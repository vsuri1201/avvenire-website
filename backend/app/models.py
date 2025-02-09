from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class BaseModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)

class FormData(BaseModel):
    message = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f'<FormData {self.name}>'

class ApplicationData(BaseModel):
    phone = db.Column(db.String(15))
    message = db.Column(db.Text)

    def __init__(self, name, email, phone, message):
        self.name = name
        self.email = email
        self.phone = phone
        self.message = message

    def __repr__(self):
        return f'<ApplicationData {self.name}>'
