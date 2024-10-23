from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    # path('view', views.view),
    # path('add', views.add),
    # path('delete', views.delete),
    # path('update', views.update),
    path('flavor/', views.flavor_many),
    path('flavor/<int:id>/', views.flavor_single),
]