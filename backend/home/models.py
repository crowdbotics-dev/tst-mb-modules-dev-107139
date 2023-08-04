from django.conf import settings
from django.db import models
class Hello(models.Model):
    'Generated Model'
    image = models.ImageField(upload_to="hello/image/images/",)
