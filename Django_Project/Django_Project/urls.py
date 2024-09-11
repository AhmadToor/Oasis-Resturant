from django.contrib import admin
from django.urls import path
from . import views
admin.site.site_title = "- El Golea Restaurant"
admin.site.site_header = "El Golea Restaurant (Admin)"



urlpatterns = [
    path('admin', admin.site.urls),
    path('', views.index ,name= 'index') ,
    path('*', views.index),
    path('contact', views.index),
    path('menu', views.index),
    path('testimonials', views.index),
    path('gallery', views.index),
    path('about', views.index),
    path('home/', views.index),
    path('privacy-policy', views.index),
    path('term-and-conditions', views.index),
    path('submit/', views.submit),
    path('FormApi/', views.FormApi),
    path('login', views.loginuser, name='loginuser'),
    path('logout', views.logoutuser, name='logoutuser'),
]


handler404 = views.custom404