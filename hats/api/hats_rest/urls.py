from django.urls import path, include
from rest_framework import routers
from .views import HatViewSet, LocationVoViewSet

router = routers.DefaultRouter()
router.register(r'hats', HatViewSet)
router.register(r'locationvo' LocationVoViewSet)

urlpatters = [
    path('', include(router.urls)),
]
