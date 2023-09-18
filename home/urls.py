from django.urls import path
from . import views

urlpatterns = [
    path('Pomodoro/', views.homePage)
]