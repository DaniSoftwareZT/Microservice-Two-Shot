from .models import Hat, LocationVO
from common.json import ModelEncoder


class HatListEncoder(ModelEncoder):
    model = Hat
    properties = ["id", "style_name"]


class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = ["fabric", "style_name", "color", "pic_url", "location"]


