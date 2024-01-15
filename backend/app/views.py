from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from django.contrib.auth import authenticate
from rest_framework.permissions import AllowAny
from app.models import *
#from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.generics import RetrieveUpdateAPIView



# Create your views here.


def get_auth_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'user':UserRegistrationSerializer(user).data,
        'refresh': str(refresh),
        'token': str(refresh.access_token) 
    }
    

class SignInView(APIView):
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
    def post(self, request):
       username = request.data.get("username")
       password = request.data.get("password")
       user = User.objects.create_user(username=username, password=password)
       serializer = UserRegistrationSerializer(user)
       if not username or not password:
           return Response("user and password required", status=status.HTTP_400_BAD_REQUEST)
    #    if serializer.is_valid():
    #        user = serializer.save()
    #        user_data = get_auth_for_user(user)
    #        print(user_data)
       else:
            return Response(serializer.data, status=200)
        #    return Response(error_response, status=status.HTTP_400_BAD_REQUEST)
       

class ResourcesView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        level = request.data.get('level')
        programme = request.data.get('programme')
        resourses = Resources.objects.filter(level=level,programme=programme)
        serializer = ResourcesSerializer(resourses,many=True)
        print(serializer.data)
        return Response(serializer.data, status=200)
    
class UserProfileView(RetrieveUpdateAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = [IsAuthenticated]


    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        # get_user_from_jwttoken(request)
        instance = get_user_from_jwttoken(request)
        print(instance)
        serializer = UserSerializer(instance, data=request.data, partial=partial)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
def get_user_from_jwttoken(request):
    "Return a user object when a valid jwt token is set in the request header"
    jwt = JWTAuthentication()
    user = jwt.get_user(
        jwt.get_validated_token((jwt.get_raw_token(jwt.get_header(request))))
    )
    return user

