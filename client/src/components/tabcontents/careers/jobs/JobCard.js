// src/components/JobCard.js
import React from 'react';
import './Jobs.css'
import convertDateFormat from '../../../utils/date_utils'
const JobCard = ({ job, onClick }) => {
  return (
    <div className="job-card" onClick={onClick}>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p className='action-buttons'>
        <a>View</a> | <a>Apply</a></p>
      <p className="posted-date"><strong>Posted:&nbsp;</strong><i>{convertDateFormat(job.postedDate)}</i></p>
    </div>
  );
};

export default JobCard;
