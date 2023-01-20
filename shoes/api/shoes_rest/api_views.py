from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import Shoe, BinVO
from .encoders import ShoeListEncoder, ShoeDetailEncoder
import json


@require_http_methods(["GET", "POST"])
def shoe_list(request):
    if request.method == "GET":
        shoes = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoeListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            bin = BinVO.objects.get(import_href=content["bin"])
            content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"error": "Bin does not exist"},
                status=400,
            )
        shoe = Shoe.objects.create(**content)
        return JsonResponse(
            shoe,
            encoder=ShoeDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE", "PUT"])
def shoe_detail(request, id):
    if request.method == "GET":
        shoe = Shoe.objects.get(id=id)
        print(shoe)
        return JsonResponse(
            shoe,
            encoder=ShoeDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Shoe.objects.filter(id=id).delete()
        return JsonResponse(
            {"deleted": count > 0},
            status=200,
        )
    else:
        content = json.loads(request.body)
        try:
            bin = BinVO.objects.get(name=content["bin"])
            content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"error": "Bin does not exist"},
                status=400,
            )
