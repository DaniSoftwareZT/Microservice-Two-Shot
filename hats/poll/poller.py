import django
import os
import sys
import time
import json
import requests
from api_hats.models import Hat

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hats_project.settings")
django.setup()

# Import models from hats_rest, here.
# from hats_rest.models import Something

def poll():
    while True:
        print('Hats poller polling for data')
        try:
            # Write your polling logic, here
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()

def get_location_data(wardrobe_api_url):
    response = requests.get(wardrobe_api_url)
    if response.status_code == 200:
        return json.loads(response.content)
    else:
        raise Exception("Failed to retrieve location data from wardrobe API.")

def update_hat_location(location_data):
    for location in location_data:
        hat = Hat.objects.get(import_href=location['import_href'])
        hat.location = location['location']
        hat.save()

def poller(wardrobe_api_url):
    location_data = get_location_data(wardrobe_api_url)
    update_hat_location(location_data)
