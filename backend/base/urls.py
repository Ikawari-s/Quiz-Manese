from .import views
from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView,)

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name='products'),
    path('products/<str:pk>/', views.getProduct, name='product'),
    path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'), 

]