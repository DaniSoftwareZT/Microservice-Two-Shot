from django.db import models


class BinVO(models.Model):
    import_href = models.CharField(max_length=100, unique=True)

    closet_name = models.CharField(max_length=100)
    bin_number = models.PositiveSmallIntegerField()


class Shoe(models.Model):
    manufacturer = models.CharField(max_length=100)
    model_name = models.CharField(max_length=100)
    color = models.CharField(max_length=30)
    pic_url = models.CharField(max_length=200, null=True, blank=True)

    bin = models.ForeignKey(
        BinVO,
        related_name="shoes",
        on_delete=models.PROTECT,
    )
