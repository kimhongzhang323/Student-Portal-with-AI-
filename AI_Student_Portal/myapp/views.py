from datetime import timezone
from django.shortcuts import get_object_or_404, render, redirect
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
from myapp import models
from myapp.utils import extract_text_from_docx, extract_text_from_pdf
from myapp.serializers import CourseSerializer, MaterialSerializer
from myapp.models import Assignment, AssignmentSubmission, ChatMessage, Course, Material, StudentProfile

# Initialize Google Gemini API Key
GEMINI_API_KEY = settings.GEMINI_API_KEY

@api_view(['GET'])
def course_details_view(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return JsonResponse(serializer.data)
    

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
    return JsonResponse({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def signup(request):
    email = request.data.get('email')
    name = request.data.get('name')
    password = request.data.get('password')
    role = request.data.get('role')

    if not email or not password or not name:
        return JsonResponse({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return JsonResponse({'error': 'Email is already registered.'}, status=status.HTTP_400_BAD_REQUEST)

    # Create a new user and set their password
    user = User.objects.create_user(
        email=email,
        username=email,
        password=password
    )
    user.name = name
    user.role = role
    user.save()

    return JsonResponse({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def api_logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)

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
    
    return JsonResponse({"bot_response": bot_response})


@api_view(['GET'])
def get_courses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return JsonResponse(serializer.data)

#serializer is used to convert the data into JSON format
@api_view(['GET'])
def get_materials(request, course_id):
    materials = Material.objects.filter(course_id=course_id)
    serializer = MaterialSerializer(materials, many=True)
    return JsonResponse(serializer.data)

@api_view(['GET'])
def calculate_cgpa_view(request, student_id):

    student = get_object_or_404(User, student_id=student_id, role=User.STUDENT)
    
    profile = get_object_or_404(StudentProfile, user=student)
    
    cgpa = profile.calculate_cgpa()
    
    # Prepare the response data
    response_data = {
        'student_id': student.student_id,
        'name': student.name,
        'cgpa': cgpa if cgpa is not None else 'Not available'
    }
    
    return JsonResponse(response_data)


@api_view(['GET'])
def student_list_view(request):
    # Get the search query from request parameters
    search_query = request.GET.get('search', '')

    # Filter students based on role and the search query
    students = User.objects.filter(role=User.STUDENT).order_by('name')
    if search_query:
        students = students.filter(
            models.Q(name__icontains=search_query) |
            models.Q(student_id__icontains=search_query)
        )

    # Prepare the student data
    student_data = [
        {
            'student_id': student.student_id,
            'name': student.name,
            'email': student.email
        }
        for student in students
    ]
    ##safe=False is used to allow serialization of non-dict objects
    return JsonResponse(student_data, safe=False)

@api_view(['POST'])
def submit_assignment_view(request, assignment_id):
    student = request.user  # Assuming the user is authenticated and represents a student
    
    # Ensure that the student role is correct
    if student.role != 'student':
        return JsonResponse({'error': 'Only students can submit assignments.'}, status=403)

    assignment = get_object_or_404(Assignment, id=assignment_id)

    if assignment.due_date and assignment.due_date < timezone.now():
        return JsonResponse({'error': 'The deadline for this assignment has passed.'}, status=400)

    if AssignmentSubmission.objects.filter(assignment=assignment, student=student).exists():
        return JsonResponse({'error': 'You have already submitted this assignment.'}, status=400)

    submitted_file = request.FILES.get('submitted_file')
    if not submitted_file:
        return JsonResponse({'error': 'No file uploaded.'}, status=400)

    # Create the submission record
    submission = AssignmentSubmission.objects.create(
        assignment=assignment,
        student=student,
        submitted_file=submitted_file
    )

    # Return a success response
    return JsonResponse({
        'message': 'Assignment submitted successfully.',
        'submission_id': submission.id
    }, status=201)