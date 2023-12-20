from .models import *
from django.contrib.auth import authenticate
from rest_framework import serializers


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255)
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        # Check if a user with the provided username exists
        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError({'username': ['Invalid credentials.']})

        return data
        
    # def create(self, validated_data):
    #     # CLEAN ALL VALUES
    #     username = validated_data['username'].lower()
        
    #     existing_user = User.objects.filter(username=username).first()
    #     if not existing_user:
    #         raise serializers.ValidationError({'username': ['The user doesnt exist.']})
        
        
from rest_framework import serializers

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'name',
            'college',
            'falculty',
            'level',
            'department',
            'password'
        ]
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        # CLEAN ALL VALUES
        username = validated_data['username'].lower()
        name = validated_data['name'].lower()
        college = validated_data['college'].lower()
        falculty = validated_data['falculty'].lower()
        department = validated_data['department'].lower()
        level = validated_data['level'].lower()
        password = validated_data['password']
        
        # Check if a user with the same username already exists
        existing_user = User.objects.filter(username=username).first()
        if existing_user:
            raise serializers.ValidationError({'username': ['A userID with this student already exists.']})

        # CREATE A NEW USER
        user = User.objects.create(
            username=username,
            name=name,
            college=college,
            falculty=falculty,
            department=department,
            level=level,  
        )
        user.set_password(password)
        user.save()
        return user
