import './Jobs.css'
import Modal from 'react-modal';
const JobDescriptionModal = ({selectedJob, isJDModalOpen, closeModal}) =>{
    return (
        <Modal
        isOpen={isJDModalOpen}
        onRequestClose={() => closeModal('JD')}
        contentLabel="Job Details"
        ariaHideApp={false}>
        <div className='container'>
          <div className="row modal-header">
            {/* Close button (X) */}
            <button className="close-button"  onClick={() => closeModal('JD')}>
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
          </div>
        </div>
      </Modal>
    )
}

export default JobDescriptionModal;