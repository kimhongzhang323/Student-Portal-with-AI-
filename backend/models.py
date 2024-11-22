from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from datetime import datetime

db = SQLAlchemy()
bcrypt = Bcrypt()

# Constants for roles
ROLE_STUDENT = 'student'
ROLE_LECTURER = 'lecturer'
ROLE_CHOICES = [ROLE_STUDENT, ROLE_LECTURER]

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    student_id = db.Column(db.String(50), nullable=True)
    name = db.Column(db.String(100), nullable=False)
    role = db.Column(db.Enum(*ROLE_CHOICES), nullable=False)
    password = db.Column(db.String(128), nullable=False)

    # Many-to-many relationship with courses via the enrollments table
    courses = db.relationship('Course', secondary='enrollments', backref=db.backref('students', lazy='dynamic'))

    def save(self):
        db.session.add(self)
        db.session.commit()

    def set_password(self, raw_password):
        self.password = bcrypt.generate_password_hash(raw_password).decode('utf-8')
        self.save()

    def check_password(self, raw_password):
        return bcrypt.check_password_hash(self.password, raw_password)

    def __repr__(self):
        return f"<User {self.name} ({self.email}) - {self.role}>"



class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(50), unique=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    lect_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    days = db.Column(db.String(50), nullable=False)
    time = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(100), nullable=False)

    lecturer = db.relationship('User', backref=db.backref('courses', lazy=True))

    # Many-to-many relationship with users via the enrollments table
    students = db.relationship('User', secondary='enrollments', backref=db.backref('courses', lazy='dynamic'))

    def __repr__(self):
        return f"<Course {self.name} - {self.code}>"



class Assignment(db.Model):
    __tablename__ = 'assignments'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
    due_date = db.Column(db.DateTime, nullable=False)

    course = db.relationship('Course', backref=db.backref('assignments', lazy=True))

    def __repr__(self):
        return f"<Assignment {self.title} - {self.course.name}>"


class AssignmentSubmission(db.Model):
    __tablename__ = 'assignment_submissions'

    id = db.Column(db.Integer, primary_key=True)
    assignment_id = db.Column(db.Integer, db.ForeignKey('assignments.id'), nullable=False)
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    submitted_file = db.Column(db.String(255), nullable=False)
    submission_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    grade = db.Column(db.Numeric(5, 2), nullable=True)

    assignment = db.relationship('Assignment', backref=db.backref('submissions', lazy=True))
    student = db.relationship('User')

    def __repr__(self):
        return f"<Submission {self.student.name} - {self.assignment.title}>"


class Grade(db.Model):
    __tablename__ = 'grades'

    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
    grade = db.Column(db.Numeric(3, 2), nullable=False)
    credits = db.Column(db.Integer, nullable=False)

    student = db.relationship('User', backref=db.backref('grades', lazy=True))
    course = db.relationship('Course', backref=db.backref('grades', lazy=True))

    def __repr__(self):
        return f"<Grade {self.student.name} - {self.course.name}: {self.grade}>"


class StudentProfile(db.Model):
    __tablename__ = 'student_profiles'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    cgpa = db.Column(db.Numeric(4, 2), nullable=True)

    user = db.relationship('User', backref=db.backref('profile', uselist=False))

    def calculate_cgpa(self):
        grades = Grade.query.filter_by(student_id=self.user_id).all()

        total_weighted_points = sum(grade.grade * grade.credits for grade in grades)
        total_credits = sum(grade.credits for grade in grades)

        if total_credits > 0:
            self.cgpa = total_weighted_points / total_credits
            db.session.commit()
        else:
            self.cgpa = None

        return self.cgpa

    def __repr__(self):
        return f"<StudentProfile {self.user.name} - CGPA: {self.cgpa if self.cgpa is not None else 'N/A'}>"


class Material(db.Model):
    __tablename__ = 'materials'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=True)
    file = db.Column(db.String(255), nullable=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
    upload_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    course = db.relationship('Course', backref=db.backref('materials', lazy=True))

    def __repr__(self):
        return f"<Material {self.title} - {self.course.name}>"


class ChatMessage(db.Model):
    __tablename__ = 'chat_messages'

    id = db.Column(db.Integer, primary_key=True)
    prompt = db.Column(db.Text, nullable=False)
    bot_response = db.Column(db.Text, nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=True)
    material_id = db.Column(db.Integer, db.ForeignKey('materials.id'), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    course = db.relationship('Course', backref=db.backref('chat_messages', lazy=True))
    material = db.relationship('Material', backref=db.backref('chat_messages', lazy=True))

    def __repr__(self):
        return f"<ChatMessage User: {self.prompt[:30]}... | Bot: {self.bot_response[:30]}...>"

    def to_json(self):
        return {
            'id': self.id,
            'prompt': self.prompt,
            'bot_response': self.bot_response,
            'course_id': self.course_id,
            'material_id': self.material_id,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'course': self.course.name if self.course else None,
            'material': self.material.title if self.material else None
        }

class Enrollment(db.Model):
    __tablename__ = 'enrollments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)

    user = db.relationship('User', backref=db.backref('enrollments', lazy=True))
    course = db.relationship('Course', backref=db.backref('enrollments', lazy=True))

    def __repr__(self):
        return f"<Enrollment User: {self.user.name} - Course: {self.course.name}>"
