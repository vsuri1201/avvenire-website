from flask import Blueprint, request, jsonify
from flask_mail import Message, Mail
from app import db
from app.models import FormData
from app.config import Config

mail = Mail()

# Initialize Blueprint
bp = Blueprint('main', __name__)

@bp.route('/submit', methods=['POST'])
def submit_form():
    # Get data from request
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({'error': 'Missing fields'}), 400

    # Store data in SQLite
    form_data = FormData(name=name, email=email, message=message)
    db.session.add(form_data)
    db.session.commit()

    # Send email
    try:
        msg = Message(
            'New Form Submission',
            recipients=[Config.MAIL_USERNAME],  # Admin email to notify
            body=f"Name: {name}\nEmail: {email}\nMessage: {message}"
        )
        mail.send(msg)
        return jsonify({'message': 'Data submitted successfully'}), 200
    except Exception as e:
        return jsonify({'error': f'Failed to send email: {str(e)}'}), 500
