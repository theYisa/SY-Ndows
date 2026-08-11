from django.contrib import admin
from django.http import JsonResponse
from django.urls import path, include
from django.views import View
from common.to_know_tenant import TenantMixin

class Remove_soon(View, TenantMixin):
    """Use this to test for get_host*()"""
    def get(self, request, placeholder = None):
        if self.get_tenant_id(request) is None: return JsonResponse({'error': 'Domain is not verified for this usage, admin need to add it first. Do not add this domain to tenant as it will also behave like a tenant in addition to being an admin domain, you can actually doit, thats just the impact.In places where error is suppsoed to happen because this domain is for admin, it will not raise errror because it will be seen as an actual tenant'}, status = 401)
        return JsonResponse({'message': str(request.get_host()), "message": "Testing there is nothing here"})
   
   
   
   
    
urlpatterns = [
    path('', Remove_soon.as_view()),
    
    path('_admin/', admin.site.urls),
    path('students/', include('students.urls')),
    path('sy/', include('salamYusuf.urls')),
    
    path('<str:placeholder>/', Remove_soon.as_view()),

]
