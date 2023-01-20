from django.db import models

class LocationVO(models.Model):
    import_href = models.CharField(max_length=150, unique=True)
    closet_name = models.CharField(max_length=150)
    section_number = models.PositiveSmallIntegerField()
    shelf_number = models.PositiveSmallIntegerField()


class Hat(models.Model):
    fabric = models.CharField(max_length=150)
    style_name = models.CharField(max_length=150)
    color = models.CharField(max_length=150)
    image_url = models.URLField(max_length=300)
    location = models.ForeignKey (
        LocationVO,
        related_name= 'hats',
        on_delete=models.PROTECT,
    )
