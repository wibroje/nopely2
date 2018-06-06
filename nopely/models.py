from django.contrib.auth.models import AbstractUser
from django.db import models
from nopely2 import settings

class CustomUser(AbstractUser):
	name = models.CharField(blank=True, max_length=255)

	def __str__(self):
		return self.name

class Movie(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	title = models.CharField(blank=True, max_length=255)
	overview = models.CharField(blank=True, max_length=1000)
	poster = models.CharField(blank=True, max_length=100)

	def __str__(self):
		return self.title

