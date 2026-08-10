
"""
I HAVE A CUSTOM USER MODEL I NAMED MODEL
it uses uuid index istead of 123 id; this is cos of i will use that index to map to auser for them to generate their user_key which will be used once they are full stundet
i will only allow email login on some place that are not sensitive or it no really dey inportant

for me and my bro
we also have the same power as the admins but are not them as they are not superuser, the difference is we have a backdoor for auto account creation and if they decide 
to misbehave , we will auto create an account and render all their admin account inaceble rendering them out of the api access

"""
"""
FLOW -> Create Account with email, upon account creation, user receive a temp user id(start with temp-xxxx)
        Temp user_key(temp-id_number(4 var) where xxxx is their uuid) = Unusable, only email login are they allowed to make as email log in should be allowed on non sensitive place
        Student user_key(yearClassDeptnumIndex e.g 26prb0001)         = Usable but only given by admin as admin can fetch the datas
        Teacher user_key(Year(te symbolze teacher)Index e.g 26te0001) = Usabel but only admin can pass it to teacher to be used
        Staff(Non Teacher but Not mngt) similar to te but st istead e.g 26st0001
        Management = (year)mngt(random numbers btwn 0 and 1000) e.g 26mngt0001
        Admin(sy team)       = only ones allow to access the django admin panel and the prefix should be sy0000(numbers only) any other lenght should scream attacker instantly
"""



from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.validators import EmailValidator



class Role(models.TextChoices):
    STUDENT = "STUDENT", "Student"
    MANAGEMENT = "MANAGEMENT", "Management"
    TEACHER = "TEACHER", "Teacher"
    NON_TEACHING_STAFF = "NON_TEACHING_STAFF", "Non Teaching Staff"
    ADMIN = "ADMIN", "Admin"


class UserManager(BaseUserManager):
    """One manager, reused for every role , role is just an argument."""
    def _create_base_auth(self, email, role, **extra_fields):   #never call this directly, NEVER
        if not email:raise ValueError("Email is required")
        EmailValidator()(email)
        email = self.normalize_email(email.lower())

        user = self.model(email=email, role=role, **extra_fields)
        user.set_unusable_password()      # no password until admin set password
        user.save(using=self._db)         #the self._db for multitenant databse e.g i get supabase and sqpite at the same time
        return user

    def create_student(self, email, **extra_fields):
        return self._create_base_auth(email, Role.STUDENT, **extra_fields)

    def create_teacher(self, email, **extra_fields):
        extra_fields.setdefault("is_staff", True)   # teachers likely need Django Admin access
        return self._create_base_auth(email, Role.TEACHER, **extra_fields)

    def create_superuser(self, email, password, user_key, **extra_fields):
        if not user_key: raise ValueError("For superuser(ADMIN), the user_key have to be set instantly")
        extra_fields.setdefault("role", Role.ADMIN)
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        user = self.model(email=self.normalize_email(email.lower()), user_key = user_key, **extra_fields)
        user.set_password(password)       # superuser gets a real password immediately
        user.is_active = True
        user.email_is_verified = True       #Email get verified instantly
        user.save(using=self._db)       #   Here only if i use multiple database simultaneously, i could have said using = 'default' or any name i name my db in the settings.py
        return user


class BaseUser(AbstractBaseUser, PermissionsMixin):
    """The ONE auth table , every role logs in through this model."""
    user_key = models.CharField(max_length=20, unique=True, null=True, blank=True, default=None, db_index=True)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=Role.choices)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=False)     # False until activation but for admin , it should not be false
    is_staff = models.BooleanField()
    is_superuser = models.BooleanField(default=False)
    email_is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_edited = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "user_key"
    REQUIRED_FIELDS = ["email"]     #alternative login for non sensitive places

    def __str__(self):
        return f"user_key: {self.user_key} & email: {self.email}& category: {self.role}"


