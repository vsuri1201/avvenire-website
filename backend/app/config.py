import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///data.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')  # Your email address
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')  # Your email password
    MAIL_DEFAULT_SENDER = 'your-email@example.com'
