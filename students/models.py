from django.db import models

from common.models import BaseUser

class StudentProfile(BaseUser):
    """Student-only data. One-to-one with BaseUser, keeps auth table clean."""
    user = models.OneToOneField(BaseUser, on_delete=models.CASCADE, related_name="student_profile")
    date_of_birth = models.DateField()
    place_of_birth = models.CharField(max_length=100)
    sector_or_region = models.CharField(max_length=100)
    current_address = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    father_name = models.CharField(max_length=100)
    mother_name = models.CharField(max_length=100)
    primary_contact = models.CharField(max_length=30)
    payment_method = models.CharField(max_length=30)
    secretarial_id = models.CharField(max_length=100)
    profile_pic_url = models.URLField(max_length=200, blank=True, null=True)
    submission_date = models.DateField()

    def __str__(self):
        return f"Student profile = {self.user.user_id or self.user.email}"