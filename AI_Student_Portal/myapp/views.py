from django.shortcuts import render, redirect
from django.conf import settings
from django.core.mail import send_mail
from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.hashers import make_password
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.http import HttpResponse
from myapp.models import ChatMessage, User
from myapp.tokens import EmailTokenGenerator
import random
import google.generativeai as genai


# Constants
GEMINI_API_KEY = settings.GEMINI_API_KEY


def send_message(request):
    if request.method == 'POST':
        # Configure the Gemini AI model with the API key
        genai.configure(api_key=GEMINI_API_KEY)
        model = genai.GenerativeModel("gemini-pro")

        # Retrieve the user's prompt from the POST data
        prompt = request.POST.get('prompt')
        
        # Generate a response from the AI model using the prompt
        bot_response = model.generate_content(prompt)

        # Create a new ChatMessage record with the prompt and bot response
        ChatMessage.objects.create(prompt=prompt, bot_response=bot_response.text)

    # Redirect to the list of messages after processing
    return redirect('list_messages')


def list_messages(request):
    # Retrieve all messages from the ChatMessage model
    messages = ChatMessage.objects.all()
    return render(request, 'chatbot/list_messages.html', {'messages': messages})


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = User.objects.filter(username=username).first()
    if user and user.check_password(password):
        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        })
    return Response({'error': 'Invalid password'}, status=status.HTTP_401_UNAUTHORIZED)


def signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        name = request.POST.get('name')
        password = request.POST.get('password')
        role = request.POST.get('role')

        # Create a new user and set their password
        user = User.objects.create(
            email=email,
            name=name,
            role=role,
            password=make_password(password)
        )
        user.save()
        return redirect('login')
    return render(request, 'signup.html')



def logout_view(request):
    """
    Logs out the user and redirects them to the home page or login page.
    """
    logout(request)
    return redirect('login')  # Adjust 'login' to your login URL name


# Optionally, for an API-based response
def api_logout_view(request):
    """
    API-based logout, responds with JSON.
    """
    logout(request)
    return JsonResponse({'message': 'Logged out successfully'}, status=200)
    
