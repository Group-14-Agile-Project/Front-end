from django.urls import path
from . import views

urlpatterns = [
    path("auth/login/", views.SignInView.as_view()),
    path("auth/sign_up/", views.SignUpView.as_view({'post':'post'})),
    path("auth/resources/", views.ResourcesView.as_view()),
    path("auth/profile/", views.UserProfileView.as_view()),

]


