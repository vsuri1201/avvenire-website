from flask import Flask
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from flask_dotenv import DotEnv
import os

# Initialize the database and mail objects
db = SQLAlchemy()
mail = Mail()

def create_app():
    # Initialize Flask app
    app = Flask(__name__)
    
    # Load environment variables from .env file
    dotenv = DotEnv()
    dotenv.init_app(app)
    
    # Load app configurations from config.py
    app.config.from_object('app.config.Config')
    
    # Initialize extensions
    db.init_app(app)
    mail.init_app(app)
    
    # Register blueprints (routes)
    from .routes import bp as main_bp
    app.register_blueprint(main_bp)
    
    return app
