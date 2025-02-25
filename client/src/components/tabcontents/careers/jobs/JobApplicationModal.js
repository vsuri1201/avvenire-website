import './Jobs.css'
import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Select from 'react-select';
import PhoneInput from "react-phone-input-2";
import LoaderComponent from '../../../loader/LoaderComponent';
import "react-phone-input-2/lib/style.css";
import {
  skillsOptions,
  designationOptions,
} from "../../../assets/constants/constants";
const JobApplicationModal = ({selectedJob, isApplicationModalOpen, closeModal}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true); // Stop the loading spinner after the timeout
    }, 3500);
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
      let primarySkillsToSubmit = formData.primarySkills
      .split(',') // Split by commas
      .map(skill => skill.trim()) // Trim any leading/trailing whitespace
      .filter(skill => skill !== 'Other' && skill !== '') // Remove 'Other' and any empty strings
      .join(', '); // Join back the array into a string, separated by commas

    // Append customSkills if present
    if (formData.customSkills) {
      primarySkillsToSubmit = `${primarySkillsToSubmit}, ${formData.customSkills}`;
    }
      
      // Handle successful form submission (e.g., send data to API)
      const form = new FormData();
      form.append('firstName', formData.firstName);
      form.append('lastName', formData.lastName);
      form.append('email', formData.email);
      form.append('mobile', formData.mobile);
      form.append('usCitizen', formData.usCitizen);
      form.append('visaSponsorship', formData.visaSponsorship);
      form.append('primarySkills', primarySkillsToSubmit);
      form.append('currentDesignation', 
        formData.currentDesignation==="Other" ? 
        formData.customDesignation : formData.currentDesignation);
      form.append('message', formData.message);
      form.append('attachment', formData.attachment);
      form.append('jobDetail', `${selectedJob.title} - ${selectedJob.id}`);
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/apply`,
          form, 
          {
            headers: {
            'Content-Type': 'multipart/form-data',
            }
          }
        );
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
        usCitizen: "",
        visaSponsorship: "",
        customSkills: "",
        customDesignation: ""
      });
      // document.getElementById("attachment")?.value = "";
      setSelectedSkills([]);
      // closeModal('Application');
      for (let [key, value] of form.entries()) {
        console.log(`${key}: ${value}`);
      }
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
      usCitizen: "",
      visaSponsorship: "",
      customSkills:"",
      customDesignation: ""
    });
  
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [customSkillsDisabled, setCustomSkillsDisabled] = useState(true);
  const [customDesignationDisabled, setCustomDesignationDisabled] = useState(true);
  
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
    // Check if "Other" is selected for skills
    const selectedSkills = selectedOptions.map(option => option.value);
    setFormData((prevData) => ({
      ...prevData,
      primarySkills: selectedSkills.join(', ') // Store the selected skills
    }));

    const isOtherSelected = selectedSkills.includes('Other');
    setCustomSkillsDisabled(!isOtherSelected);  // Enable custom skill input if "Other" is selected
  };

  const handleSingleSelectChange = (selectedOption) => {
    // Check if "Other" is selected for designation
    setFormData((prevData) => ({
      ...prevData,
      currentDesignation: selectedOption ? selectedOption.value : ''
    }));

    const isOtherSelected = selectedOption?.value === 'Other';
    setCustomDesignationDisabled(!isOtherSelected);  // Enable custom designation input if "Other" is selected
  };

  const mappedDesignationOptions = designationOptions.map((designation) => ({
    value: designation,
    label: designation,
  }));
    
      // Find the selected option based on currentDesignation
  const selectedDesignation = mappedDesignationOptions.find(
    (option) => option.value === formData.currentDesignation
  );

  const handleClose = () => {
    closeModal('Application');
    setIsSubmitted(false);
  }

  return (
    <Modal
    isOpen={isApplicationModalOpen}
    onRequestClose={handleClose}
    contentLabel="Job Application"
    ariaHideApp={false}>
      <div className="application-modal">
        <div className="row modal-header">
          {/* Close button (X) */}
          <button className="close-button"  onClick={handleClose}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className='row modal-body'>
          <div className="col-md-12">
            <h2>{selectedJob?.title}</h2>
            {!isLoading ? (
              <div className="form-container col-md-6">
              {!isSubmitted ? (
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
                    <label htmlFor="customSkills" className="form-label">
                      Other Skills
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="customSkills"
                      name="customSkills"
                      value={formData.customSkills}
                      onChange={handleChange}
                      disabled={customSkillsDisabled}
                    />
                  </div>
                </div>

                <div className='row mb-4'>
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
                  <div className="col-md-6">
                    <label htmlFor="customDesignation" className="form-label">
                      Other Designation
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="customDesignation"
                      name="customDesignation"
                      value={formData.customDesignation}
                      onChange={handleChange}
                      disabled={customDesignationDisabled}
                    />
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
                    Your Resume/CV &nbsp;&nbsp;<span style={{opacity:0.6}}>(PDF or Word document)</span>
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
              ) : (
                <div className="submission-content"> Application submitted successfully. You can close this window now.</div>
              )}
            </div>
            ): (
              <LoaderComponent type="application"/>
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default JobApplicationModal;