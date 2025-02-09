import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os
# SMTP server configuration for iPage Webmail
SMTP_SERVER = os.getenv('')  # iPage SMTP server
SMTP_PORT = 587                 # SMTP Port for TLS
SENDER_EMAIL = ""  # Office email address (your iPage account)
SENDER_PASSWORD = ""        # Your email password
RECEIVER_EMAIL =  ""# Personal email where you want to receive the email

def send_email():
    try:
        # Set up the SMTP server and authenticate
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()  # Upgrade to a secure connection using TLS
        server.login(SENDER_EMAIL, SENDER_PASSWORD)

        # Compose the email
        message = MIMEMultipart()
        message["From"] = SENDER_EMAIL
        message["To"] = RECEIVER_EMAIL
        message["Subject"] = "Test Email from iPage Webmail Account"
        
        body = "This is a test email sent from an office account (iPage Webmail)."
        message.attach(MIMEText(body, "plain"))

        # Send the email
        server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, message.as_string())

        # Close the SMTP server
        server.quit()
        
        print("Email sent successfully!")
    except Exception as e:
        print(f"Error: {e}")

# Trigger the email sending function
if __name__ == "__main__":
    send_email()
