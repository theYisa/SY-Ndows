from rest_framework.serializers import ModelSerializer
from common.models import BaseUser

class InteresteeSignupSerilizer(ModelSerializer):
    """On purpose , i use the auth model for them, until they walk to to school, they cannot have a real profle"""
    class Meta:
        model = BaseUser
        exclude = ['id', 'password', 'role', 'is_staff', 'last_login', 'user_key', 'last_edited', 'groups','user_permissions']  #the db models have verify the resy so no need here is_active etc
        extra_kwargs = {
            'user_key': {'read_only': True},
            'is_superuser': {'read_only': True},
            'is_superuser': {'read_only': True},
            'email_is_verified': {'read_only': True},
            'is_active': {'read_only': True},
            
        }
        
    def create(self, validated_data):
        """i need to control the create cos i am using a different style from django default"""
        interestee  = BaseUser.objects.create_student(**validated_data)
        return interestee
