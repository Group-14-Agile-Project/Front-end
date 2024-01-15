from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager



class UserBase(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('Username is required')
        user = self.model(username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        user = self.create_user(username, password, **extra_fields)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractUser):
    name = models.CharField(max_length=255, blank=True,null=True)
    college = models.CharField(max_length=255, blank=True,null=True)
    falculty = models.CharField(max_length=255,blank=True,null=True)
    department = models.CharField(max_length=255,blank=True,null=True)
    photo = models.ImageField(null=True, blank=True)
    objects = UserBase()
    
    def has_perm(self, perm, obj=None):
        return self.is_superuser
    
    def has_module_perms(self, app_label):
        return self.is_superuser
    def __str__(self):
        return self.username
    
class Resources(models.Model):
    pdf = models.FileField(null=True, blank=True)
    course_title = models.CharField(max_length=255, blank=True, null=True)
    lecturer_name = models.CharField(max_length=255, blank=True)
    level = models.CharField(max_length=255,blank=True)
    programme = models.CharField(max_length=255, blank=True)
    
    def __str__(self):
        return str(self.programme + " " + "Level " + self.level)
    
    
    
    
    
#The profile model below is linked to the user model. The cascade function inherited,
#help to delete the profile once the user model is deleted 

    
    