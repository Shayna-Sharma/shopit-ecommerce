from django.shortcuts import render
from rest_framework.decorators import api_view
from . models import Product
from . serializers import ProductSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(["GET"])
def products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products , many=True)
    return Response(serializer.data)

#For getting the details of a single product
@api_view(["GET"])
def productDetails(request , slug):
    # product = Product.objects.get(slug = slug)
    product = get_object_or_404(Product , slug = slug)
    serializer = ProductSerializer(product)
    return Response(serializer.data)