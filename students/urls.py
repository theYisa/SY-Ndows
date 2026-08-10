from django.urls import path
from .views import *

urlpatterns = [
    path('application/', Interestee.as_view(), name = 'interestee_signup')
]
