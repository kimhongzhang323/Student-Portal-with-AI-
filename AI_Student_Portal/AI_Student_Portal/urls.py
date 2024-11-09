"""
URL configuration for AI_Student_Portal project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp.views import test_route1, test_route2, test_route3, login_view
from myapp import views  # Replace 'my_app' with the actual app name
from rest_framework_simplejwt import TokenRefreshView

urlpatterns = [
    path('', views.index, name='index'),
    path('admin/', admin.site.urls),
    path('test1/', test_route1),
    path('test2/', test_route2),
    path('test3/', test_route3),
    path('register/', views.RegisterView.as_),
    path('signup/', views.signup, name='signup'),
    path('verify/', views.verify_code, name='verify_code'),
    path('logout/', views.logout_view, name='logout'),
    path('api/logout/', views.api_logout_view, name='api_logout'),
    

]
