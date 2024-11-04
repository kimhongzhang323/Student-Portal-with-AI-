from django.shortcuts import render, redirect
from django.conf import settings
from django.http import JsonResponse

# Get the API key for Gemini AI from Django settings
GEMINI_API_KEY = settings.GEMINI_API_KEY
from myapp.models import ChatMessage
import google.generativeai as genai

def index(request):

    return render(request, 'index.html')


def send_message(request):
    # Check if the request method is POST
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
    
    # Render the list_messages template with the retrieved messages
    return render(request, 'chatbot/list_messages.html', { 'messages': messages })


def test_route1(request):
    return JsonResponse({'message': 'Hello, World!'})


def test_route2(request):
    return JsonResponse({'message': 'Hello, Django!'})

def test_route3(request):
    return JsonResponse({'message': 'Hello, AI!'})
