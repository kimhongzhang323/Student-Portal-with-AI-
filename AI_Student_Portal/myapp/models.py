from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class ChatMessage(models.Model):
    prompt = models.TextField()
    bot_response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"User: {self.prompt[:30]}... | Bot: {self.bot_response[:30]}..."

class User(models.Model):
    STUDENT = 'student'
    LECTURER = 'lecturer'
    
    ROLE_CHOICES = [
        (STUDENT, 'Student'),
        (LECTURER, 'Lecturer'),
    ]
    
    email = models.EmailField(unique=True)
    student_id = models.CharField(max_length=50, blank=True, null=True)
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    password = models.CharField(max_length=128)
    verification_code = models.CharField(max_length=6, blank=True, null=True)
    is_verified = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        # Hash password if it's not already hashed
        if not self.password.startswith('pbkdf2_'):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def set_password(self, raw_password):
        """Set and hash the user's password."""
        self.password = make_password(raw_password)
        self.save()

    def check_password(self, raw_password):
        """Check the user's password."""
        return check_password(raw_password, self.password)

    def __str__(self):
        return f"{self.name} ({self.email}) - {self.role}"

class Course(models.Model):
    code = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=100)
    lect = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        limit_choices_to={'role': 'lecturer'},
        related_name='courses'
    )
    days = models.CharField(max_length=50)  
    time = models.CharField(max_length=50)  
    location = models.CharField(max_length=100)  

    def __str__(self):
        return f"{self.name} - {self.code}"

class Section(models.Model):
    code = models.CharField(max_length=50, unique=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.code} - {self.course.name}"

class Class(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    student = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        limit_choices_to={'role': 'student'}
    )

    def __str__(self):
        return f"{self.section.code} - {self.student.name}"
