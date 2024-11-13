from django.conf import settings
from django.db import models
from django.contrib.auth.hashers import make_password, check_password

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

    def save(self, *args, **kwargs):
        if not self.password.startswith('pbkdf2_'):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)
        self.save()

    def check_password(self, raw_password):
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
    
class Assignment(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    course = models.ForeignKey('Course', on_delete=models.CASCADE, related_name='assignments')
    due_date = models.DateTimeField()

    def __str__(self):
        return f"{self.title} - {self.course.name}"

class AssignmentSubmission(models.Model):
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE, related_name='submissions')
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    submitted_file = models.FileField(upload_to='assignments/submissions/')
    submission_date = models.DateTimeField(auto_now_add=True)
    grade = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)  # Optional

    def __str__(self):
        return f"{self.student.name} - {self.assignment.title}"


class Grade(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'})
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    grade = models.DecimalField(max_digits=3, decimal_places=2, help_text="Grade point for the course")
    credits = models.PositiveIntegerField(help_text="Credits for the course")

    def __str__(self):
        return f"{self.student.name} - {self.course.name}: {self.grade}"


class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to={'role': 'student'}, related_name='profile')
    cgpa = models.DecimalField(max_digits=4, decimal_places=2, null=True, blank=True, help_text="Student's cumulative GPA")

    def calculate_cgpa(self):
        grades = Grade.objects.filter(student=self.user)
        
        total_weighted_points = sum(grade.grade * grade.credits for grade in grades)
        total_credits = sum(grade.credits for grade in grades)
        
        if total_credits > 0:
            self.cgpa = total_weighted_points / total_credits
            self.save()
        else:
            self.cgpa = None  # Handle cases with no grades

        return self.cgpa

    def __str__(self):
        return f"{self.user.name} - CGPA: {self.cgpa if self.cgpa is not None else 'N/A'}"

class Material(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)  # Optional for storing text directly
    file = models.FileField(upload_to='materials/', blank=True, null=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='materials')
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.course.name}"

class ChatMessage(models.Model):
    prompt = models.TextField()
    bot_response = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True, blank=True)
    material = models.ForeignKey(Material, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"User: {self.prompt[:30]}... | Bot: {self.bot_response[:30]}..."


