from .models import Shoe
from common.json import ModelEncoder


class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = ["id", "manufacturer", "model_name", "color"]

    def get_extra_data(self, o):
        return {"closet_name": o.bin.closet_name}


class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = ["manufacturer", "model_name", "color", "pic_url"]

    def get_extra_data(self, o):
        return {"closet_name": o.bin.closet_name, "bin_number": o.bin.bin_number}
