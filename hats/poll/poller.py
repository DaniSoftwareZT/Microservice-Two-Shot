import django
import os
import sys
import time
import json
import requests


sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hats_project.settings")
django.setup()
from hats_rest.models import LocationVO

# Import models from hats_rest, here.
# from hats_rest.models import Something

def grab_locations():
    url = " http://wardrobe-api:8000/api/locations/"
    response = requests.get(url)
    content = json.loads(response.content)
    for location in content["locations"]:
        LocationVO.objects.update_or_create(
            import_href=bin["href"],
            defaults={
                "section_number" : location["section_number"],
                "shelf_number" : location["shelf_number"],
                "closet_name": location["closet_name"],
            }
        )

def poll():
    while True:
        print('Hats poller polling for data')
        try:
            grab_locations()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
