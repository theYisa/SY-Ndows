from django.contrib import admin
from django.urls import path, include

    
urlpatterns = [
    path('_admin/', admin.site.urls),
    path('students/', include('students.urls')),
    path('sy/', include('salamYusuf.urls')),    
]
