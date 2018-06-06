from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse_lazy
from django.views import generic
from django.contrib.auth.models import AbstractUser
from .models import CustomUser
from .forms import CustomUserCreationForm
from django.contrib.auth import authenticate, login, logout
from justwatch import JustWatch
import json

just_watch = JustWatch(country='US')

class SignUp(generic.CreateView):
	form_class = CustomUserCreationForm
	success_url = reverse_lazy('login')
	template_name = 'signup.html'

def home(request):
	users = CustomUser.objects.all()
	return render(request, 'home.html', {'users': users})

def logout_view(request):
	logout(request)
	return HttpResponseRedirect('/users/login')

def post_movie(request):
	if request.POST:
		title = request.POST.get('title')
		poster = request.POST.get('poster')
		overview = request.POST.get('overview')
		results = just_watch.search_for_item(query=title)
		print(title)
		try:
			items = results['items'][0]['offers'][0]['urls']['standard_web']
		except KeyError:
			items = None
	return render(request, 'show.html', {'title': title, 'poster': poster, 'overview': overview, 'items': items})





