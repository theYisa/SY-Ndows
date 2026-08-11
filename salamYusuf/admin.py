from django.contrib import admin

from common.models import BaseUser
from .models import Tenant

admin.site.register([Tenant,])