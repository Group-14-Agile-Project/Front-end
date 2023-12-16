from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser 



class User(AbstractUser):
    name = models.CharField(max_length=255, blank=True,null=True)
    college = models.CharField(max_length=255, blank=True,null=True)
    falculty = models.CharField(max_length=255,blank=True,null=True)
    department = models.CharField(max_length=255,blank=True,null=True)
    level = models.CharField(max_length=255,blank=True,null=True)
    # photo = models.ImageField(null=True, blank=True)
    
    
    def __str__(self):
        return self.username
    
#The profile model below is linked to the user model. The cascade function inherited,
#help to delete the profile once the user model is deleted 

    
    