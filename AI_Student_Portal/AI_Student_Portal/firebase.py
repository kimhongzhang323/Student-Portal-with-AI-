# firebase.py
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("built-in-ai-challenge-firebase-adminsdk-5bv8p-0564c52214.json")  # Download the service account key from Firebase Console
firebase_admin.initialize_app(cred)
