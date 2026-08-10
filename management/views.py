from django.shortcuts import render

from rest_framework.views import APIView


class GenerateStudentUserKey(APIView):
    """This is where management can generate a student only user key 
    i will collect role, user_key(management alwasy start with year(mngt)0001 so i can verify them)
    i think i will use request.user or maybe ask for token in headers, i do not know for now
    """
    def get(self):pass
    def post(self):pass