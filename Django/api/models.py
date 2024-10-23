from django.db import models

# Create your models here.

class Flavor(models.Model):
    name = models.CharField(max_length=256, null=False)

    def __str__(self):
        return self.name