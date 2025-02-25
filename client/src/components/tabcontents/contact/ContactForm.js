import React, { useState } from "react";

import "./Contact.css";
import axios from 'axios';
import location_icon from "../../assets/images/location-icon.jpg";
import web_icon from "../../assets/images/web-icon.jpg";
import mail_icon from "../../assets/images/mail-icon.jpg";
import phone_icon from "../../assets/images/phone-icon.jpg";
import LoaderComponent from "../../loader/LoaderComponent";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject:''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
// Handle input changes
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
          ...prevData,
          [name]: value
      }));
  };

// Handle form submission
  const handleSubmit = async (e) => {
      e.preventDefault();

      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false); // Stop the loading spinner after the timeout
        setIsSubmitted(true); // Mark the form as submitted
      }, 3500);

      // Simple form validation (optional)
      if (!formData.name || !formData.email || !formData.message || !formData.subject) {
          alert('Please fill in all fields');
          return;
      }

      // Assuming you'll send the form data to a server or handle it here
      console.log('Form data submitted:', formData);
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/send-message`, // Use the correct API URL without /api
          formData, 
          {headers: {'Content-Type': 'multipart/form-data'}}
        );
      } catch (error) {
        console.error('Error:', error);
      }
      setFormData({ name: '', email: '', message: '',subject:'' }); // Reset form fields
      };

  return (
    <div className="contact-form">
      <div className="container">
        <div className="row justify-content-left">
          <div className="col-md-6">
            {!isLoading ? (<div className="form-container">
              <br></br>
              {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <h2>We welcome your inquiries and feedback.</h2>
                      <div className="mb-4">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="subject" className="form-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary mar-t-20 w-25 py-3">
                        Submit
                      </button>
                  </form>
              ) : (
                  <div>
                      <h3>Thank you for reaching out!</h3>
                      <p>We'll get back to you as soon as possible.</p>
                  </div>
              )}
            </div>) : <LoaderComponent type="enquiry"/>}  
          </div>
          <div className="col-md-offset-1 col-md-4">

            <div class="content">
              <p>
                <h2 className="h2-left">
                  {" "}
                  <img src={location_icon} alt="location"></img>Office Location
                </h2>
                38930 Blacow Rd, Suite-E2<br></br>
                Fremont,CA - 94536
              </p>
            </div>

            <div class="content">
              <p>
                <h2 className="h2-left">
                  {" "}
                  <img src={phone_icon} alt="location"></img>Phone
                </h2>
                +1 (919)-656-7976 <br></br> +1 (919)-491-2179
              </p>
            </div>

            <div class="content">
              <p>
                <h2 className="h2-left">
                  <img src={mail_icon} alt="location"></img> Email
                </h2>
                <a href="mailto:hr@avveniresolutions.com">
                  hr@avveniresolutions.com
                </a>
              </p>
            </div>

            <div class="content">
              <p>
                <h2 className="h2-left">
                  <img src={web_icon} alt="location"></img> Website:{" "}
                </h2>
                <a href="http://www.avveniresolutions.com/">
                  www.avveniresolutions.com
                </a>
              </p>
            </div>

            <div class="content mar-t-30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.7658770182006!2d-122.00156842392965!3d37.53701587204629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf6750c5d731%3A0x2cd21fd0ceaa2958!2s38930%20Blacow%20Rd%2C%20Fremont%2C%20CA%2094536!5e0!3m2!1sen!2sus!4v1739701471217!5m2!1sen!2sus"
                width="300"
                height="250"
                style={{ border: 0 }}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
