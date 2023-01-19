from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import LocationVO, Hat
from common.json import ModelEncoder

class LocationVOEncoder(ModelEncoder):
    model = LocationVO
    properties = ["closet_name"]

class HatEncoder(ModelEncoder):
    model = Hat
    properties = ["fabric", "style_name", "colors", "image_url", "location"]
