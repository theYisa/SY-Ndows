from django.db import models

class Tenant(models.Model):
    """THIS HANDLES THE TENANT MODEL AS THIS IS THE SOURCE OF TRUTH"""
    domain = models.CharField(unique=True, db_index=True)
    name = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.name} with domain: {self.domain}"