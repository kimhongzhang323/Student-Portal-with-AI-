from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

# Initialize Flask app, SQLAlchemy and Bcrypt
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///student_portal.db'  # Replace with your DB URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

# Constants for roles
ROLE_STUDENT = 'student'
ROLE_LECTURER = 'lecturer'
ROLE_CHOICES = [ROLE_STUDENT, ROLE_LECTURER]

# Define the models

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

    def __repr__(self):
        return f"<User {self.name} ({self.email}) - {self.role}>"

    def set_password(self, raw_password):
        self.password = bcrypt.generate_password_hash(raw_password).decode('utf-8')

    def check_password(self, raw_password):
        return bcrypt.check_password_hash(self.password, raw_password)


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

class Enrollment(db.Model):
    __tablename__ = 'enrollments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)

    user = db.relationship('User', backref=db.backref('enrollments', lazy=True))
    course = db.relationship('Course', backref=db.backref('enrollments', lazy=True))

    def __repr__(self):
        return f"<Enrollment User: {self.user.name} - Course: {self.course.name}>"

# Create all tables
with app.app_context():
    db.create_all()

print("Tables created successfully!")
