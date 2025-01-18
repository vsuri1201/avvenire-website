// src/components/JobCard.js
import React from 'react';
import './Jobs.css'
const JobCard = ({ job, onClick }) => {
  return (
    <div className="job-card" onClick={onClick}>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
    </div>
  );
};

export default JobCard;
