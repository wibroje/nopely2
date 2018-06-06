from django.contrib import admin
from django.urls import path, include
# from django.views.generic.base import TemplateView

urlpatterns = [
    # path('', TemplateView.as_view(template_name='splash.html'), name='splash'),
    path('admin/', admin.site.urls),
    path('users/', include('nopely.urls')),
    path('users/', include('django.contrib.auth.urls')),
]
