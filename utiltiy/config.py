import os
from dotenv import load_dotenv
from django.conf import settings
import hmac

load_dotenv()

class Static:
    def verify_sy_secret_key(self, incoming_key)-> bool:
        """VERIFY AGAINST THE INCOMING KEY AND RETURN TRUE IF THEY MATCH , IF ANYTHING GOES WRONG, RETURN FALSE"""
        
        key = settings.SECIAL_KEY
        if key is None: return False
        return hmac.compare_digest(key, incoming_key)