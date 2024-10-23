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

# @api_view(['GET'])
# def view(request):
#     flavors = Flavor.objects.all().values()
#     return Response(flavors)
#     # return JsonResponse(list(flavors), safe=False)

@api_view(['GET', 'POST'])
def flavor_many(request):
    if request.method == 'GET':
        flavors = Flavor.objects.all()
        serializer = FlavorSerializer(flavors, many=True)
        # flavors = Flavor.objects.all().values()
        return Response(serializer.data)
        # return Response(flavors)
    elif request.method == 'POST':
        serializer = FlavorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # result = Flavor.objects.create(name="Test")

@api_view(['GET', 'PUT', 'DELETE'])
def flavor_single(request, id):
    # flavor = Flavor.objects.filter(id=id)
    flavor = Flavor.objects.get(id=id)
    if request.method == 'GET':
        serializer = FlavorSerializer(flavor)
        return Response(serializer.data)
        # return Response(flavor.values())
    elif request.method == 'PUT':
        serializer = FlavorSerializer(flavor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            # result = serializer.update(name="Test Again")
            return Response(serializer.data)
    elif request.method == 'DELETE':
        # result = flavor.delete()
        flavor.delete()
        return Response({"status": f"{status.HTTP_204_NO_CONTENT}"})

# @api_view(['POST'])
# def add(request):
#     try:
#         result = Flavor.objects.create(name="Test")
#         data = request.POST
#         return HttpResponse(data)
#         return JsonResponse({"status": "success", "flavor": {"id": result.id, "name": result.name}})
#     except Exception as e:
#         return JsonResponse({"status": "failed", "message": f"{e}"})
#
# def delete(request):
#     try:
#         result = Flavor.objects.filter(id=8).delete()
#         return JsonResponse({"status": "success", "numDeleted": result[0]})
#     except Exception as e:
#         return JsonResponse({"status": "failed", "message": f"{e}"})
#
# def update(request):
#     try:
#         result = Flavor.objects.filter(id=9).update(name="Test Again")
#         return JsonResponse({"status": "success", "numUpdated": result})
#     except Exception as e:
#         return JsonResponse({"status": "failed", "message": f"{e}"})
