from django.urls import path
from . import views

urlpatterns = [
    path("products" , views.products , name="products"),
    path("products/<slug:slug>" , views.productDetails , name="productDetails"),
]