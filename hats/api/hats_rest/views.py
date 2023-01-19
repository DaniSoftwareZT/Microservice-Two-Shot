from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from .models import LocationVO, Hat
from .serializers import LocationVOSerializer, HatSerializer

class LocationVOViewSet(viewsets.ModelViewSet):
    queryset = LocationVO.objects.all()
    serializer_class = LocationVOSerializer

class HatViewSet(viewsets.ModelViewSet):
    queryset = Hat.objects.all()
    serializer_class = HatSerializer

