from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Flavor
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import FlavorSerializer


# Create your views here.

def home(request):
    return HttpResponse("This is the API home screen, please input a valid endpoint")

@api_view(['GET', 'POST'])
def flavor_many(request):
    if request.method == 'GET':
        flavors = Flavor.objects.all()
        serializer = FlavorSerializer(flavors, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FlavorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def flavor_single(request, id):
    flavor = Flavor.objects.get(id=id)
    if request.method == 'GET':
        serializer = FlavorSerializer(flavor)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = FlavorSerializer(flavor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method == 'DELETE':
        flavor.delete()
        return Response({"status": f"{status.HTTP_204_NO_CONTENT}"})

