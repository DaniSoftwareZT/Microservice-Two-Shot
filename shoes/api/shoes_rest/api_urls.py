from django.urls import path
from .api_views import shoe_list, shoe_detail

urlpatterns = [
    path("shoes/", shoe_list, name="shoe_list"),
    path("shoes/<int:pk>", shoe_detail, name="shoe_detail"),
]
