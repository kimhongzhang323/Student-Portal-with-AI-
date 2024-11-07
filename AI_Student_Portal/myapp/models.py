from django.db import models

# Create your models here.
class ChatMessage(models.Model):
    prompt = models.TextField()
    bot_response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"User: {self.prompt}, Bot: {self.bot_response}"
    
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

    def __str__(self):
        return self.name

class Course(models.Model):
    code = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=100)
    lect = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'lecturer'})

    def __str__(self):
        return self.name

class Section(models.Model):
    code = models.CharField(max_length=50, unique=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.code} - {self.course.name}"


class Class(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'})

    def __str__(self):
        return f"{self.section.code} - {self.student.name}"