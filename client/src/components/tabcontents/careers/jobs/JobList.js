// src/components/JobList.js
import React, { useState } from 'react';
import JobCard from './JobCard';
import Modal from 'react-modal';
import './Jobs.css'
import { jobs } from '../../../assets/constants/constants';

const JobList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="col-md-offset-1 col-md-11">
      <h1>Job Listings</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onClick={() => openModal(job)} />
        ))}
      </div>

      {/* Modal for Job Details */}
      <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Job Details"
        >
          <div className='container'>
            <div className="row modal-header">
              {/* Close button (X) */}
              <button className="close-button"  onClick={closeModal}>
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className='row modal-body'>
              <h2>{selectedJob?.title}</h2>
              <h3>Job Description:</h3>
              <p>{selectedJob?.fullDescription.jobDescription}</p>

              <h3>Educational Requirements:</h3>
              <ul>
                {selectedJob?.fullDescription.educationalRequirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Roles and Responsibilities:</h3>
              <ul>
                {selectedJob?.fullDescription.rolesAndResponsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className='row apply-button-container'>
                <button className='col-md-1'>Apply</button>
              </div>
            </div>
          </div>
        </Modal>
    </div>
  );
};

export default JobList;
