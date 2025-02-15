// src/components/JobList.js
import React, { useState } from 'react';
import JobCard from './JobCard';
import './Jobs.css'
import { jobs } from '../../../assets/constants/constants';
import JobApplicationModal from './JobApplicationModal';
import JobDescriptionModal from './JobDescriptionModal';

const JobList = () => {
  const [isJDModalOpen, setIsJDModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  let state = null;
  const openModal = (state, job)=>{
    if (state === 'JD'){
      setIsJDModalOpen(true);
    }
    else{
      setIsApplicationModalOpen(true);
    }
    setSelectedJob(job);
  }

  const closeModal = (state) => {
    if (state === 'JD'){
      setIsJDModalOpen(false);
    }
    else{
      setIsApplicationModalOpen(false);
    }
    setSelectedJob(null);
  };

  return (
    <div className="job-list-container">
      <br></br>
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard 
            key={job.id} 
            job={job} 
            onViewClick={() => openModal(state='JD', job)} 
            onApplyClick={()=> openModal(state='Application', job)} />
        ))}
      </div>

      {/* Modal for Job Details */}
      <JobDescriptionModal 
        selectedJob={selectedJob} 
        isJDModalOpen={isJDModalOpen} 
        closeModal = {closeModal} />
      
      {/* Modal for Job Application */}

      <JobApplicationModal 
        selectedJob={selectedJob} 
        isApplicationModalOpen={isApplicationModalOpen} 
        closeModal = {closeModal}/>
    </div>
  );
};

export default JobList;
