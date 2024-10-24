from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('flavor/', views.flavor_many),
    path('flavor/<int:id>/', views.flavor_single),
]