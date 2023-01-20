from django.db import models

class LocationVO(models.Model):
    import_href = models.CharField(max_length=150, unique=True)
    closet_name = models.CharField(max_length=150)


class Hat(models.Model):
    fabric = models.CharField(max_length=150)
    style_name = models.CharField(max_length=150)
    color = models.CharField(max_length=150)
    image_url = models.URLField(300)
    location = models.ForeignKey (
        LocationVO,
        related_name= 'hats',
        on_delete=models.PROTECT,
    )
