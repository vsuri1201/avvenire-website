import React, { useState } from 'react';
import { skillsOptions, designationOptions } from '../../assets/constants/constants';
import './Contact.css'
import location_icon from '../../assets/images/location-icon.jpg'
import web_icon from '../../assets/images/web-icon.jpg'
import mail_icon from '../../assets/images/mail-icon.jpg'
import phone_icon from '../../assets/images/phone-icon.jpg'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    primarySkills: '',
    currentDesignation: '',
    subject: '',
    message: '',
    attachments: null,
    legalStatus: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.primarySkills) newErrors.primarySkills = 'Primary skills are required';
    if (!formData.currentDesignation) newErrors.currentDesignation = 'Current designation is required';
    if (!formData.legalStatus) newErrors.legalStatus = 'Legal status is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle successful form submission (e.g., send data to API)
      console.log('Form submitted successfully:', formData);
      // Clear the form data or show success message
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        primarySkills: '',
        currentDesignation: '',
        subject: '',
        message: '',
        attachments: null,
        legalStatus: ''
      });
      document.getElementById('attachments').value = '';
    }
  };

  return (
    <div className="contact-form">
      <div className="container">
        <div className="row justify-content-left">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {/* First Name and Last Name in the same row */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>

              {/* Primary Skills and Current Designation in the same row */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <label htmlFor="primarySkills" className="form-label">Primary Skills</label>
                  <select
                    className="form-select form-select-lg"
                    id="primarySkills"
                    name="primarySkills"
                    value={formData.primarySkills}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Primary Skills</option>
                    {skillsOptions.map((skill, index) => (
                      <option key={index} value={skill}>{skill}</option>
                    ))}
                  </select>
                  {errors.primarySkills && <div className="text-danger">{errors.primarySkills}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="currentDesignation" className="form-label">Current Designation</label>
                  <select
                    className="form-select form-select-lg"
                    id="currentDesignation"
                    name="currentDesignation"
                    value={formData.currentDesignation}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Current Designation</option>
                    {designationOptions.map((designation, index) => (
                      <option key={index} value={designation}>{designation}</option>
                    ))}
                  </select>
                  {errors.currentDesignation && <div className="text-danger">{errors.currentDesignation}</div>}
                </div>
              </div>
                    
            {/* Legal Status */}
            <div className="mb-4">
            <div className="form-group">
        <label htmlFor="legalStatus">Legal Status:&nbsp;</label>
        
        {/* Radio Buttons for Legal Status */}
        <div className="form-check">
          <input
            type="radio"
            id="h1"
            name="legalStatus"
            className="form-check-input"
            value="H1"
            onChange={handleChange}
            checked={formData.legalStatus === 'H1'}
            required
          />
          <label htmlFor="h1" className="form-check-label">H1</label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="opt"
            name="legalStatus"
            className="form-check-input"
            value="OPT"
            onChange={handleChange}
            checked={formData.legalStatus === 'OPT'}
            required
          />
          <label htmlFor="opt" className="form-check-label">OPT</label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="gc"
            name="legalStatus"
            className="form-check-input"
            value="GC"
            onChange={handleChange}
            checked={formData.legalStatus === 'GC'}
            required
          />
          <label htmlFor="gc" className="form-check-label">GC</label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="citizen"
            name="legalStatus"
            className="form-check-input"
            value="Citizen"
            onChange={handleChange}
            checked={formData.legalStatus === 'Citizen'}
            required
          />
          <label htmlFor="citizen" className="form-check-label">Citizen</label>
        </div>

        {/* Error message if no radio button is selected */}
        {errors.legalStatus && <small className="text-danger">Please select a legal status.</small>}
      </div>
            </div>
              {/* Subject */}
              <div className="mb-4">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control form-control-lg"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Attachments */}
              <div className="mb-4">
                <label htmlFor="attachments" className="form-label">Attachments</label>
                <input
                  type="file"
                  className="form-control form-control-lg"
                  id="attachments"
                  name="attachments"
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary mar-t-20 w-25 py-3">Submit</button>
            </form>
          </div>
          <div className="col-md-offset-1 col-md-4">
          <div class="content"> 
            <p>
            <h2> <img src={location_icon} alt="location"></img> Administrative Location</h2>
            38477 Blacow Rd,<br></br>
			Fremont,CA - 94536
            </p>
          </div>

          <div class="content"> 
            <p>
            <h2> <img src={location_icon} alt="location"></img>Office Location</h2>
            38930 Blacow Rd, Suite-E2<br></br> 
			Fremont,CA - 94536
            </p>
          </div>

          <div class="content">
            <p>
            <h2> <img src={phone_icon} alt="location"></img>Phone</h2>
            919-656-7976 <br></br> 919-491-2179
            </p>
          </div>

          <div class="content"> 
            <p>
            <h2><img src={mail_icon} alt="location"></img> Email</h2>
            <a href="mailto:hr@avveniresolutions.com">hr@avveniresolutions.com</a>
            </p>
          </div>

          <div class="content"> 
            <p>
            <h2><img src={web_icon} alt="location"></img> Website: </h2>
            <a href="http://www.avveniresolutions.com/">www.avveniresolutions.com</a>
            </p>
          </div>


          <div class="content mar-t-30">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.650730319107!2d-122.00799028468904!3d37.539729779802876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf6f34c52e63%3A0x215d8c0bd33ffb60!2s38477+Blacow+Rd%2C+Fremont%2C+CA+94536%2C+USA!5e0!3m2!1sen!2sin!4v1453275204633" width="300" height="250" frameborder="0" style={{border:0}} allowfullscreen></iframe>
		 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7195422135974!2d-121.99348618523007!3d37.56167093216545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc07f133879d1%3A0xeab859d4cb407d26!2s2450%20Peralta%20Blvd%2C%20Fremont%2C%20CA%2094536!5e0!3m2!1sen!2sus!4v1652061810049!5m2!1sen!2sus" width="300" height="250" style={{border:0}} frameborder="0" allowfullscreen></iframe>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
