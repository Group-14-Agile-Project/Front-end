from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from django.contrib.auth import authenticate
from rest_framework.permissions import AllowAny
#from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.


def get_auth_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'user':UserLoginSerializer(user).data,
        'refresh': str(refresh),
        'token': str(refresh.access_token) 
    }
    

class SignInView(APIView):
    permission_classes = [AllowAny]
    

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if not user:
            response_data = {'message': 'Invalid Credential'}
            return Response(response_data, status=400)

        user_data = get_auth_for_user(user)
        return Response(user_data, status=200)
    
    

class SignUpView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
       data = request.data
       serializer = UserRegistrationSerializer(data=data)
       if serializer.is_valid():
           user = serializer.save()
           user_data = get_auth_for_user(user)
           print(user_data)
           return Response(user_data, status=200)
       else:
           error_response = {
                "message": serializer.errors  
            }
           return Response(error_response, status=status.HTTP_400_BAD_REQUEST)