import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI', 'sqlite:///data.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Email settings for Roundcube or any SMTP server
    MAIL_SERVER = os.getenv('MAIL_SMTP_DOMAIN')  # Replace with your Roundcube SMTP server
    MAIL_PORT = os.getenv('MAIL_SMTP_PORT', 587)  # Default port for TLS
    MAIL_USE_TLS = os.getenv('MAIL_USE_TLS', True)  # Use TLS by default
    MAIL_USE_SSL = os.getenv('MAIL_USE_SSL', False)  # Use SSL if provided
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')  # Loaded from .env file
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')  # Loaded from .env file
    MAIL_DEFAULT_SENDER = os.getenv('MAIL_USERNAME')  # Use the same email as the sender
    SECRET_KEY = os.getenv('SECRET_KEY', 'default-secret-key')  # Use secret from .env
