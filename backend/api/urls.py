from django.urls import path
from . import views


urlpatterns = [
    path("", views.home, name="home"),
    path("urlAnalyse", views.urlAnalyse, name="URL Analyse"),
    path("getComments", views.getComments, name="Get Commnents"),
]
