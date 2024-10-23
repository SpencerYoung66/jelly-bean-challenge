from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Flavor

# Create your views here.

def home(request):
    return HttpResponse("This is the API home screen, please input a valid endpoint")

def view(request):
    flavors = Flavor.objects.all().values()
    return JsonResponse(list(flavors), safe=False)

def add(request):
    try:
        result = Flavor.objects.create(name="Test")
        data = request.POST
        return HttpResponse(data)
        return JsonResponse({"status": "success", "flavor": {"id": result.id, "name": result.name}})
    except Exception as e:
        return JsonResponse({"status": "failed", "message": f"{e}"})

def delete(request):
    try:
        result = Flavor.objects.filter(id=8).delete()
        return JsonResponse({"status": "success", "numDeleted": result[0]})
    except Exception as e:
        return JsonResponse({"status": "failed", "message": f"{e}"})

def update(request):
    try:
        result = Flavor.objects.filter(id=9).update(name="Test Again")
        return JsonResponse({"status": "success", "numUpdated": result})
    except Exception as e:
        return JsonResponse({"status": "failed", "message": f"{e}"})
