from django.shortcuts import render, redirect
from django.conf import settings
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User  # Update if using a custom User model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
import google.generativeai as genai
from django.http import JsonResponse
from myapp.utils import extract_text_from_docx, extract_text_from_pdf
from myapp.serializers import CourseSerializer, MaterialSerializer
from myapp.models import ChatMessage, Course, Material

# Initialize Google Gemini API Key
GEMINI_API_KEY = settings.GEMINI_API_KEY

@api_view(['GET'])
def course_details_view(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)
    

def homepage(request):
    return render(request, 'index.html')

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
    return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def signup(request):
    email = request.data.get('email')
    name = request.data.get('name')
    password = request.data.get('password')
    role = request.data.get('role')

    if not email or not password or not name:
        return Response({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email is already registered.'}, status=status.HTTP_400_BAD_REQUEST)

    # Create a new user and set their password
    user = User.objects.create_user(
        email=email,
        username=email,
        password=password
    )
    user.name = name
    user.role = role
    user.save()

    return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def logout_view(request):
    logout(request)
    return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def api_logout_view(request):
    logout(request)
    return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)

@api_view(['POST'])
def send_message(request):
    user_prompt = request.data.get('prompt')
    course_id = request.data.get('course_id')
    material_id = request.data.get('material_id')
    
    # Fetch course and material
    course = Course.objects.filter(id=course_id).first()
    material = Material.objects.filter(id=material_id, course=course).first()
    
    # Initialize material content for prompt
    material_content = ""
    if material and material.file:
        file_path = material.file.path
        if file_path.endswith('.pdf'):
            material_content = extract_text_from_pdf(file_path)
        elif file_path.endswith('.docx'):
            material_content = extract_text_from_docx(file_path)
    
    # Structure the prompt
    pre_prompt = (
        f"You are assisting with the course '{course.name}' using material titled '{material.title}'. "
        "Provide guidance and instructions, referring to the following content without giving direct answers:\n\n"
        f"{material_content[:1000]}..."  # Limiting content length to avoid overwhelming the model
    )
    full_prompt = f"{pre_prompt}{user_prompt}"
    
    # Call Gemini AI with the structured prompt
    response = genai.chat(full_prompt)
    bot_response = response['message']
    
    # Save the chat with selected course and material
    chat_message = ChatMessage.objects.create(
        prompt=user_prompt,
        bot_response=bot_response,
        course=course,
        material=material
    )
    
    return Response({"bot_response": bot_response})


@api_view(['GET'])
def get_courses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def course_page(request, course_id):
    course_info = Course.objects.all(pk=course_id)
    serializer = CourseSerializer(course_info, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_materials(request, course_id):
    materials = Material.objects.filter(course_id=course_id)
    serializer = MaterialSerializer(materials, many=True)
    return Response(serializer.data)