"""BECAUSE I AM USING A MULTI TENANT , I NEED TO CONTROL HOW DJANGO HANDLE MY MIGRATE SO SOME TABLE ONLY GO TO ONE DB

CURRENT WANT
default = every other django default tables + Tenant,
tenant_1 = every other django default tables - Tenant
tenant_2 = every other django default tables - Tenant 
...
I PURPOSEDLY ADDED THE DJANGO AND DRF TABLES TO EVERY SINGLE DB BECAUSE WHO KNOWS? THEY MIGHT COME HANDY IN FUTURE
"""
"""
DJANGO BY DEFAULT USE USE THE allow_....
SO i will not forget : https://docs.djangoproject.com/en/6.0/topics/db/multi-db/#topics-db-multi-db-routing

QUICK INFO
    *   db = database alias, the one in settings e.g default, tenant_1, etc
    *   app_label = the app name
    *   model_name = the model name
"""

class CustomRouter:
    
    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if db != 'default':
            #behaviour of every migration except 'default' db alias:
                return model_name != 'tenant'           #True only when model is not Tenant
        else:
            #behaviour of default model to return all models, i will exclude models that should not go there
            NOT_ALLOWED_IN_DEFAULT = ['studentprofile',]
            return not(model_name in NOT_ALLOWED_IN_DEFAULT)
        
    
            