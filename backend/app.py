import os
from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from flask_cors import CORS
from models import db, User, Course, Assignment, AssignmentSubmission, Grade, StudentProfile, Material, ChatMessage
import routes
import os
from flask import Flask, jsonify, request, render_template, abort
from flask_cors import CORS
from flask_jwt_extended import create_access_token, create_refresh_token, get_jwt_identity
from app import app, db
import models
from werkzeug.utils import secure_filename
from werkzeug.security import check_password_hash

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__ )

# Enable CORS if needed
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///student_portal.db"  # SQLite database file
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable modification tracking for performance reasons

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Path to frontend build folder
frontend_folder = os.path.join(os.getcwd(),"..","frontend")
dist_folder = os.path.join(frontend_folder,"dist")

# Serve the index.html file when the root is accessed
@app.route("/",defaults={"filename":""})
@app.route("/<path:filename>")
def index(filename):
  if not filename:
    filename = "index.html"
  return send_from_directory(dist_folder,filename)


@app.route('/')
def homepage():
    user_id = 1  # Get this from session or some logic
    user = User.query.get(user_id)
    enrolled_courses = Course.query.filter_by(student_id=user_id).all()

    return render_template('index.html', user=user, enrolled_courses=enrolled_courses)

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = models.User.query.get(user_id)
    if user:
        return jsonify({
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'role': user.role,
            'student_id': user.student_id
        })
    else:
        return jsonify({'error': 'User not found'}), 404


@app.route('/api/courses/enrolled', methods=['GET'])
def get_enrolled_courses():
    user_id = request.args.get('user_id')
    if user_id:
        user = models.User.query.get(user_id)
        if user and user.role == 'student':
            enrolled_courses = models.Course.query.join(models.Enrollment).filter(models.Enrollment.user_id == user_id).all()
            courses = [{'id': course.id, 'name': course.name, 'code': course.code} for course in enrolled_courses]
            return jsonify(courses)
        else:
            return jsonify({'error': 'User not found or not a student'}), 404
    else:
        return jsonify({'error': 'User ID is required'}), 400


@app.route('/api/assignments', methods=['GET'])
def get_assignments():
    user_id = request.args.get('user_id')
    if user_id:
        user = models.User.query.get(user_id)
        if user and user.role == 'student':
            assignments = models.Assignment.query.filter_by(student_id=user_id).all()
            assignments_data = [{'id': assignment.id, 'title': assignment.title, 'course_id': assignment.course_id} for assignment in assignments]
            return jsonify(assignments_data)
        else:
            return jsonify({'error': 'User not found or not a student'}), 404
    else:
        return jsonify({'error': 'User ID is required'}), 400


if __name__ == "__main__":
    app.run(debug=True)
