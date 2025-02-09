import os
from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from models import db, ApplicationData
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Flask app configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///applications.db'  # SQLite Database
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Email configuration (using iPage Webmail SMTP server)
app.config['MAIL_SERVER'] = 'smtp.ipage.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')  # Your email

# Initialize database and email service
db.init_app(app)
mail = Mail(app)

@app.route('/submit-application', methods=['POST'])
def submit_application():
    try:
        # Get POST data from the frontend (React)
        data = request.get_json()

        # Validate received data
        if not data.get("name") or not data.get("email"):
            return jsonify({"error": "Missing required fields"}), 400

        # Store data in the database
        new_application = ApplicationData(
            name=data["name"],
            email=data["email"],
            phone=data.get("phone", ""),
            message=data.get("message", "")
        )
        db.session.add(new_application)
        db.session.commit()

        # Trigger the emails
        send_confirmation_email(data["email"])
        send_notification_email(data["name"], data["email"])

        return jsonify({"message": "Application received successfully!"}), 200

    except Exception as e:
        print(str(e))
        return jsonify({"error": "Something went wrong!"}), 500

def send_confirmation_email(user_email):
    """ Send confirmation email to the user """
    try:
        msg = Message("Thank you for your application",
                      recipients=[user_email])
        msg.body = f"Dear User,\n\nThank you for submitting your application. We will get back to you shortly.\n\nBest Regards,\nCompany Team"
        mail.send(msg)
        print(f"Confirmation email sent to {user_email}")
    except Exception as e:
        print(f"Error sending confirmation email: {str(e)}")

def send_notification_email(user_name, user_email):
    """ Send email notification to the company """
    try:
        company_email = os.getenv('COMPANY_EMAIL')  # Set this in your .env file
        msg = Message(f"New Application from {user_name}",
                      recipients=[company_email])
        msg.body = f"New application received:\n\nName: {user_name}\nEmail: {user_email}\n\nPlease review the application."
        mail.send(msg)
        print(f"Notification email sent to {company_email}")
    except Exception as e:
        print(f"Error sending notification email: {str(e)}")

if __name__ == "__main__":
    # Create the database tables
    with app.app_context():
        db.create_all()
    app.run(debug=True)
