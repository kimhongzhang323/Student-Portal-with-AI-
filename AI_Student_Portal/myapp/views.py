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

from myapp.models import ChatMessage, User
from myapp.tokens import email_verification_token
import random
import google.generativeai as genai


# Constants
GEMINI_API_KEY = settings.GEMINI_API_KEY


def index(request):
    return render(request, 'index.html')

    return JsonResponse({'message': 'Hello, World!','header':'Welcome to AI Student Portal'})
    # return render(request, 'index.html')
    
def random(request):
    print("Random route called")
    return JsonResponse({'message': 'Hello, World!','header':'Welcome to AI Student Portal'})

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


<<<<<<< HEAD
=======
def homepage(request):
    return render(request, 'index.html')
>>>>>>> 0c51094cb1aede681dc2b91eec7bcb76549da5eb

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
<<<<<<< HEAD
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


def generate_verification_code():
    """Generate a 6-digit random verification code."""
    return str(random.randint(100000, 999999))


def send_verification_email(user, verification_code):
    """Send a verification email with a 6-digit code."""
    subject = 'Your Verification Code'
    message = f'Hi {user.name},\n\nYour verification code is: {verification_code}'
    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [user.email])


def verify_code(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        code = request.POST.get('code')
        
        try:
            user = User.objects.get(email=email, verification_code=code)
            user.is_active = True
            user.verification_code = None  # Clear the code after verification
            user.save()
            return JsonResponse({'message': 'Account verified successfully!'})
        except User.DoesNotExist:
            return JsonResponse({'error': 'Invalid verification code or email.'}, status=400)

    return render(request, 'verify_code.html')



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
=======
    else:
        return Response({"error": "Invalid credentials"}, status=400)
    
>>>>>>> 0c51094cb1aede681dc2b91eec7bcb76549da5eb
