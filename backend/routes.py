import os
from flask import Flask, jsonify, request, render_template, abort
from flask_cors import CORS
from flask_jwt_extended import create_access_token, create_refresh_token
from app import app, db
import models
from werkzeug.utils import secure_filename

# Initialize Flask app
app = Flask(__name__)

# Enable CORS (Cross-Origin Resource Sharing)
CORS(app)

# Homepage Route
@app.route('/')
def homepage():
    return render_template('index.html')

# Courses Route
@app.route('/api/courses', methods=['GET'])
def get_courses():
    try:
        courses = models.Course.query.all()
        courses_list = [{'id': course.id, 'name': course.name} for course in courses]
        return jsonify(courses_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Login Route
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = models.User.query.filter_by(email=username).first()
    if user and user.check_password(password):
        access_token = create_access_token(identity=user.id)
        refresh_token = create_refresh_token(identity=user.id)
        return jsonify({"access": access_token, "refresh": refresh_token}), 200
    
    return jsonify({'error': 'Invalid username or password'}), 401

# Another Route (Placeholder for additional logic)
@app.route('/api/another', methods=['GET'])
def another_route():
    return jsonify({"message": "This is another route!"}), 200

# Lecture Notes Route
@app.route('/api/lectureNotes', methods=['GET'])
def lecture_notes():
    try:
        lecture_notes = models.LectureNote.query.all()
        notes_list = [{'id': note.id, 'title': note.title, 'content': note.content} for note in lecture_notes]
        return jsonify(notes_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Assignments Route
@app.route('/api/assignments', methods=['GET'])
def assignments():
    try:
        assignments = models.Assignment.query.all()
        assignments_list = [{'id': assignment.id, 'title': assignment.title, 'due_date': assignment.due_date} for assignment in assignments]
        return jsonify(assignments_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Quizzes Route
@app.route('/api/quizzes', methods=['GET'])
def quizzes():
    try:
        quizzes = models.Quiz.query.all()
        quizzes_list = [{'id': quiz.id, 'title': quiz.title, 'questions': quiz.questions} for quiz in quizzes]
        return jsonify(quizzes_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Assignment Upload Route
@app.route('/api/assignmentUpload', methods=['POST'])
def assignment_upload():
    submitted_file = request.files.get('submitted_file')
    if not submitted_file:
        return jsonify({'error': 'No file provided'}), 400

    filename = secure_filename(submitted_file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    submitted_file.save(file_path)

    # Logic to associate with an assignment can go here
    return jsonify({'message': 'File uploaded successfully', 'file_path': file_path}), 201

# Add Submission Route
@app.route('/api/addSubmission', methods=['POST'])
def add_submission():
    data = request.json
    assignment_id = data.get('assignment_id')
    student_id = data.get('student_id')

    try:
        submission = models.AssignmentSubmission(
            assignment_id=assignment_id,
            student_id=student_id,
            submitted_file=data.get('submitted_file')  # Assuming this is a filename reference
        )
        db.session.add(submission)
        db.session.commit()
        return jsonify({'message': 'Submission added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
