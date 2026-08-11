"""I CREATED THIS ONLY BECAUSE I WANT TO BE ABLE TO USE TENANTS, 
NORMALLY, I AM SUPPOSED TO PUT THS IN SETTINGS BUT ITS COMPLEX THERE SO I USE HERE,
IT COLLECTS THE DOMAIN E.G localhost:8002 or localhost:8000 or "anotherdomain.com"(everything before the slash) and store that literal string to the default db
that way, i know which tenant is coming.

FOR BACKDOOR FOR US, i use the tenant table that will be in the default db to store a TENANT table, this tenant table hold the data for the db to use, 
and for us to create superuser access in that tenat, we simply just do domain/sy/_admin/email/password/<sy_secret>/tenant_url

so that way we can create admin access into any tenant db

note that the db need to have been created in settion first, check setting inside the database for how it is.
"""

from salamYusuf.models import Tenant
import logging

logger = logging.getLogger(__name__)

class TenantMixin:
    def __init__(self, request):
        """
        request: same request that the view collects
        FROM THERE I GET THE INCOMING URL AND MAINUPULATE WHICH TENANT IT SHOULD GO TO
        IF THAT HOST DOES NOT EXIST IN THE TENANT DB, RETURN 401 STRAIGHT
        
        FOR SUPERUSER (SY TEAM) -> THIS WILL JUST SILENTY PASS AND CREATE THE SUPERSUER IN THE DEFAULT DB ISOLATED FROM ANY CLIENT
        IN OTHER FOR SUPERUSER TO CREATE A ADMIN IN ANY OF THOSE ACCOUNT, I CANNOT USE THE GET_HOST() FOR THEM AS THAT IS NOT IDEAL, SO I ADD AN ALTERNATIVE OF PASSING A HOST TO THE DEF IN CHARGE
        
        (tip so i will not forget:) use db_name as the value that will save this so i can alwasy know where they are used
        """
        
    def get_tenant_id(self, request, domain = None):
        """Return tenant_id if found else None, Added the domain because of admins"""
        domain = domain or request.get_host()
        tenant_id = Tenant.objects.db_manager('default').filter(domain__iexact = domain).first()
        logger.info(msg= f"Current domain is {domain}")
        if tenant_id: return f"tenant_{tenant_id.pk}"
        else:return None
        
        
            