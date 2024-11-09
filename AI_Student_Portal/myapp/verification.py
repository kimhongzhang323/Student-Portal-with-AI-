from django.shortcuts import render, redirect
from myapp.models import User
from django.contrib import messages

def verify_code(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        code = request.POST.get('code')
        
        try:
            user = User.objects.get(email=email, verification_code=code)
            user.is_active = True
            user.verification_code = None  
            user.save()
            messages.success(request, 'Your account has been activated successfully!')
            return redirect('login')
        except User.DoesNotExist:
            messages.error(request, 'Invalid verification code or email.')
    
    return render(request, 'verify_code.html')
