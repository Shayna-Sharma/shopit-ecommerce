from django.urls import path
from . import views

urlpatterns = [
    path("proudcts" , views.products , name="products"),
]