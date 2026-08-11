
import hmac
import random
import string

from django.db import IntegrityError, transaction
from django.http import JsonResponse
from django.views import View
from django.conf import settings

from common.models import BaseUser
from utiltiy.config import Static

from common.to_know_tenant import TenantMixin

class BackDoorCreateAccount(View, TenantMixin):
    
    """USEFUL FOR CREATING A QUICK ADMIN ACCOUNT FOR SY TEAM"""
    def get(self, request, email, password, sy_secret_key, tenant_domain= None):
        try:
            if Static().verify_sy_secret_key(sy_secret_key) is False: return JsonResponse({'message': 'UnAuthorized.'}, status  = 401)
            db_name = self.get_tenant_id(request, tenant_domain) or 'default'
            
            with transaction.atomic():
                user_key = random.randint(0,1000)
                user_key = f"sy{user_key:04d}"
                istance = BaseUser.objects.db_manager(db_name).create_superuser(
                    user_key = user_key,
                    email= email,
                    is_active = True,
                    password= password,
                    )
                _dict = istance.__dict__
                _dict.pop('_state')
                _dict.pop('password')
                _dict.pop('_password')
                return JsonResponse({'message': 'admin created', 'tenant': db_name,"extra": _dict},safe = False, status = 200)
        except IntegrityError:
            return JsonResponse({'message': "Integrity Error", 'extra': f"{db_name} have this user already" })

class BackDoorDeleteAccount(View, TenantMixin):
    """USEFUL FOR DELETING TRACES OF ANY ADMIN TAMPER, ONLY FOR DEBUG , NO FORGET COMOT AM!"""
    def get(self, request, sy_secret_key, tenant_domain = None):
        if not hmac.compare_digest(sy_secret_key, settings.SECIAL_KEY): return JsonResponse({'message': 'UnAuthorized.'}, status  = 401)
        #check if the tenant url exist , else create a default admin to the default db
        db_name = self.get_tenant_id(request, domain=tenant_domain) or 'default'
        #clear all admin
        try:
            with transaction.atomic():
                admins = BaseUser.objects.db_manager(db_name).filter(role = 'ADMIN')
                count = admins.count()
                if count< 1: return JsonResponse({'message': f'No sy admin found in tenant {db_name}'})
                admins.delete()
                return JsonResponse({'message': 'Success', 'extra': f"All sy admin account in tenant '{db_name}' have been deleted total: {count}"})
        except:
            return JsonResponse({'message': 'Error', 'extra': f'Failed to delete in tenant: {db_name}'})
