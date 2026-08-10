"""ALL STUDENT RELATED VIEWS GO HERE AND WIRING ONLY THE THING STUDENT CAN ACCESS GO HERE"""

from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import status

from .serializer import InteresteeSignupSerilizer

from django.contrib.auth import get_user_model as Base


class Interestee(APIView):
    """
    THIS VIEW Is FOR APPLICANT THAT ARE NEW. COLLECT only email, first_name and lasy_name, SAVE IT LIKE A NORMAL ACC BUT SET PASSWORD AS INACEBILE, ACCOUNT IS_STAUS = fALSE AND 
    USER_KEY = FALSE SO THEIR ACCOUNT EXIST BUT NO USER KEY
    
    PROCESS; MANAGEMWNT GET THE REQUEST AS A MAIL (I HAVE ISSUE WITH MAIL THOUGH SO WE NEED ANOTHER WAY TO NOTIFY MANAGEMWNT)
    
    THE STUDENT WALSK DOWN TO THE SCHOOL, THEY CAN LOG IN WITH EMAIL SINCE THEIR ACCOUNT ON THAT PLACE IS STILL JUST A INTERESTEE ACCOUNT
     
    MANAGEMWNT WILL HAVE A PLACE WHERE THEY CAN GENERATE USER_KEY (management/views/GenerateStudentUserKey class) AND USE THAT USER_KEY FOR THE USER
    
    """
    serializer_class = InteresteeSignupSerilizer
    def post(self, request):
        istance = InteresteeSignupSerilizer(data = request.data)
        if istance.is_valid():
            istance.save()
            return Response(istance.data, status = status.HTTP_200_OK)
        return Response(istance.errors, status = status.HTTP_400_BAD_REQUEST)
    
    
    
    