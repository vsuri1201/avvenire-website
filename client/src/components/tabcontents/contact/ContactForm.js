import React, { useState } from "react";

import "./Contact.css";
import axios from 'axios';
import location_icon from "../../assets/images/location-icon.jpg";
import web_icon from "../../assets/images/web-icon.jpg";
import mail_icon from "../../assets/images/mail-icon.jpg";
import phone_icon from "../../assets/images/phone-icon.jpg";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject:''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

      // Simple form validation (optional)
      if (!formData.name || !formData.email || !formData.message || !formData.subject) {
          alert('Please fill in all fields');
          return;
      }

      // Assuming you'll send the form data to a server or handle it here
      console.log('Form data submitted:', formData);

      const url = 'http://127.0.0.1:5000/send-message'; // Replace with your URL

      try {
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Success:', response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '',subject:'' }); // Reset form fields
      };

  return (
    <div className="contact-form">
      <div className="container">
        <div className="row justify-content-left">
          <div className="col-md-6">
            <div className="form-container">
              <h2>We welcome your inquiries and feedback.</h2>
              <br></br>
              {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
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
            </div>
          </div>
          <div className="col-md-offset-1 col-md-4">
            <div class="content">
              <p>
                <h2 className="h2-left">
                  {" "}
                  <img src={location_icon} alt="location"></img> Administrative
                  Location
                </h2>
                38477 Blacow Rd,<br></br>
                Fremont,CA - 94536
              </p>
            </div>

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
                919-656-7976 <br></br> 919-491-2179
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.650730319107!2d-122.00799028468904!3d37.539729779802876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf6f34c52e63%3A0x215d8c0bd33ffb60!2s38477+Blacow+Rd%2C+Fremont%2C+CA+94536%2C+USA!5e0!3m2!1sen!2sin!4v1453275204633"
                width="300"
                height="250"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7195422135974!2d-121.99348618523007!3d37.56167093216545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc07f133879d1%3A0xeab859d4cb407d26!2s2450%20Peralta%20Blvd%2C%20Fremont%2C%20CA%2094536!5e0!3m2!1sen!2sus!4v1652061810049!5m2!1sen!2sus"
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
