import './Jobs.css'
import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Select from 'react-select';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  skillsOptions,
  designationOptions,
} from "../../../assets/constants/constants";
const JobApplicationModal = ({selectedJob, isApplicationModalOpen, closeModal}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.primarySkills)
      newErrors.primarySkills = "Primary skills are required";
    if (!formData.currentDesignation)
      newErrors.currentDesignation = "Current designation is required";
    if (Object.keys(newErrors).length > 0 || errors.attachment) {
      setErrors({
        ...errors,        // Spread existing errors
        ...newErrors,     // Spread new errors
      });
      
    } 
    else {
      // Handle successful form submission (e.g., send data to API)
      const form = new FormData();
      form.append('firstName', formData.firstName);
      form.append('lastName', formData.lastName);
      form.append('email', formData.email);
      form.append('mobile', formData.mobile);
      form.append('usCitizen', formData.usCitizen);
      form.append('visaSponsorship', formData.visaSponsorship);
      form.append('primarySkills', formData.primarySkills);
      form.append('currentDesignation', formData.currentDesignation);
      form.append('message', formData.message);
      form.append('attachment', formData.attachment);
      form.append('jobDetail', `${selectedJob.title} - ${selectedJob.id}`);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/apply`,
          form, 
          {
            headers: {
            'Content-Type': 'multipart/form-data',
            }
          }
        );
        alert("Application submitted successfully!");
        console.log('success:', response.data);
      } catch (error) {
        console.error('Error uploading data:', error);
      }

      // Clear the form data or show success message
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        primarySkills: '',
        currentDesignation: "",
        subject: "",
        message: "",
        attachment: null,
        usCitizen: "Yes",
        visaSponsorship: "No",
      });
      document.getElementById("attachment").value = "";
      setSelectedSkills([]);
      closeModal('Application');
    }
  };

  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      primarySkills: "",
      currentDesignation: "",
      subject: "",
      message: "",
      attachment: null,
      usCitizen: "Yes",
      visaSponsorship: "No",
    });
  
  const [selectedSkills, setSelectedSkills] = useState([]);
  
    useEffect(() => {
      // Initialize selectedSkills as an array of objects (if formData.primarySkills is not empty)
      if (formData.primarySkills) {
        const skillsArray = formData.primarySkills.split(',').map(skill => ({
          value: skill.trim(), // Trim whitespace
          label: skill.trim(), // Trim whitespace
        }));
        setSelectedSkills(skillsArray);
      } else {
        // If primarySkills is empty, reset selectedSkills to an empty array
        setSelectedSkills([]);
      }
    }, [formData.primarySkills]);
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    // Validate file type (PDF or Word)
    if (file) {
      const fileType = file.type;
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

      if (!allowedTypes.includes(fileType)) {
        setErrors({...errors, attachment: "Please upload a PDF or Word document"});
        setFormData({ ...formData, attachment: null });
        return;
      } else {
        setFormData({ ...formData, attachment: file });
        setErrors({...errors, attachment: null});
      }
    }
  };

  const handleMultiSelectChange = (selectedOptions) => {
    const selectedSkills = selectedOptions ? selectedOptions.map(option => option.value).join(', ') : '';
    setFormData((prevData) => ({
      ...prevData,
      primarySkills: selectedSkills, // Store the string in formData
    }));
  };

  const handleSingleSelectChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      currentDesignation: selectedOption ? selectedOption.value : '',
    }));
  };
  
  const mappedDesignationOptions = designationOptions.map((designation) => ({
    value: designation,
    label: designation,
  }));
    
      // Find the selected option based on currentDesignation
  const selectedDesignation = mappedDesignationOptions.find(
    (option) => option.value === formData.currentDesignation
  );

  return (
    <Modal
    isOpen={isApplicationModalOpen}
    onRequestClose={() => closeModal('Application')}
    contentLabel="Job Application"
    ariaHideApp={false}>
      <div className="application-modal">
        <div className="row modal-header">
          {/* Close button (X) */}
          <button className="close-button"  onClick={() => closeModal('Application')}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className='row modal-body'>
          <div className="col-md-12">
            <h2>{selectedJob?.title}</h2>
            <div className="form-container col-md-6">
              <form onSubmit={handleSubmit}>
                {/* First Name and Last Name in the same row */}
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    {errors.firstName && (
                      <div className="text-danger">{errors.firstName}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    {errors.lastName && (
                      <div className="text-danger">{errors.lastName}</div>
                    )}
                  </div>
                </div>
                {/* Email and Mobile in the same row*/}
                <div className="row mb-5">
                  <div className='col-md-6'>
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
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number
                    </label>
                    <PhoneInput
                      inputStyle={{width: '100%'}}
                      inputProps={{
                        id: 'mobile',  // Set the id here
                        name: 'mobile', // Optionally set a name attribute as well
                      }}
                      value={formData.mobile}
                      onChange={(value) => setFormData({ ...formData, mobile: value })}
                      country={'us'} // Optional: You can set a default country here (e.g., US)
                      required
                    />
                    {errors.mobile && (
                      <div className="text-danger">{errors.mobile}</div>
                    )}
                  </div>
                </div>
                
                {/* US Citizenship */}
                <div className="row">
                  <div className='form-group'>
                    <label htmlFor="usCitizen">Are you a US citizen or permanent resident (Green Card holder)?</label>
                    {/* Radio Buttons for Legal Status */}
                    <br></br>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="usCitizenYes"
                        name="usCitizen"
                        className="form-check-input"
                        value="Yes"
                        onChange={handleChange}
                        checked={formData.usCitizen === "Yes"}
                        required
                      />
                      <label htmlFor="usCitizenYes" className="form-check-label">
                        Yes
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="usCitizenNo"
                        name="usCitizen"
                        className="form-check-input"
                        value="No"
                        onChange={handleChange}
                        checked={formData.usCitizen === "No"}
                        required
                      />
                      <label htmlFor="usCitizenNo" className="form-check-label">
                        No
                      </label>
                    </div>

                    {/* Error message if no radio button is selected */}
                    {errors.usCitizen && (
                      <small className="text-danger">
                        Please select if you are a U.S. Citizen
                      </small>
                    )}
                  </div>
                </div>

                {/* Visa Sponsorship */}
                <div className="row mb-1">
                  <div className="form-group">
                    <label htmlFor="visaSponsorship">Will you now or in future require a visa sponsorship for working with us?&nbsp;&nbsp;</label>
                    <br></br>
                    {/* Radio Buttons for Legal Status */}
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="visaSponsorshipYes"
                        name="visaSponsorship"
                        className="form-check-input"
                        value="Yes"
                        onChange={handleChange}
                        checked={formData.visaSponsorship === "Yes"}
                        required
                      />
                      <label htmlFor="visaSponsorshipYes" className="form-check-label">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="visaSponsorshipNo"
                        name="visaSponsorship"
                        className="form-check-input"
                        value="No"
                        onChange={handleChange}
                        checked={formData.visaSponsorship === "No"}
                        required
                      />
                      <label htmlFor="visaSponsorshipNo" className="form-check-label">
                        No
                      </label>
                    </div>

                    {/* Error message if no radio button is selected */}
                    {errors.visaSponsorship && (
                      <small className="text-danger">
                        Please select if you require visa sponsorship
                      </small>
                    )}
                  </div>
                </div>
                {/* Primary Skills and Current Designation in the same row */}
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label htmlFor="primarySkills" className="form-label">
                      Primary Skills
                    </label>
                    <Select
                      inputProps={{
                        id:"primarySkills",
                        name:"primarySkills"
                      }}
                      inputStyle={{width: '100%'}}
                      isMulti
                      options={skillsOptions.map((skill) => ({
                        value: skill,
                        label: skill,
                      }))}
                      value={selectedSkills}
                      onChange={handleMultiSelectChange}
                      getOptionLabel={(e) => e.label}  // Use the label for display in the dropdown
                      getOptionValue={(e) => e.value}  // Use the value for the selection
                      placeholder="Select Primary Skills"
                      required />
                    {errors.primarySkills && (
                      <div className="text-danger">{errors.primarySkills}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="currentDesignation" className="form-label">
                      Current Designation
                    </label>
                    <Select
                      inputProps={{
                        id:"currentDesignation",
                        name:"currentDesignation"
                      }}
                      inputStyle={{width: '100%'}}
                      options = {mappedDesignationOptions}
                      value = {selectedDesignation || null}
                      onChange={handleSingleSelectChange}
                      getOptionLabel={(e) => e.label}  // Use the label for display in the dropdown
                      getOptionValue={(e) => e.value} // Use the value for the selection
                      placeholder="Select Current Designation"
                      required />
                    {errors.currentDesignation && (
                      <div className="text-danger">
                        {errors.currentDesignation}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message to the Employer */}
                <div className="row mb-4">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message to the Hiring Manager..."
                    className="form-control form-control-lg"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* attachment */}
                <div className="row mb-4">
                  <label htmlFor="attachment" className="form-label">
                    Your Resume/CV &nbsp;&nbsp;<text style={{opacity:0.6}}>(PDF or Word document)</text>
                  </label>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    id="attachment"
                    name="attachment"
                    onChange={handleFileChange}
                  />
                  {errors.attachment && (
                      <div className="text-danger">
                        {errors.attachment}
                      </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="row">
                    <div className="col-md-offset-4 col-md-4">
                      <button type="submit" className="btn btn-primary btn-large">
                        Submit Application
                      </button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default JobApplicationModal;