// src/components/JobCard.js
import React from 'react';
import './Jobs.css'
// import convertDateFormat from '../../../utils/date_utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
const JobCard = ({ job, onViewClick }) => {

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p className='action-buttons'>
        {/* <a onClick={onViewClick} className="view-button">View</a> | <a onClick={onApplyClick} className="apply-button">Apply</a></p> */}
        <a onClick={onViewClick}><FontAwesomeIcon icon={faEye} /></a></p>
      {/* <p className="posted-date"><strong>Posted:&nbsp;</strong><i>{convertDateFormat(job.postedDate)}</i></p> */}
    </div>
  );
};

export default JobCard;
