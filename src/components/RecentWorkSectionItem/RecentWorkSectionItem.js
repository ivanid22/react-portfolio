import React, { useState } from 'react';
import Modal from 'react-modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './RecentWorkSectionItem.module.scss';

const modalStyle = {
  overlay: {
    backgroundColor: 'inherit',
  },
  content: {
    fontFamily: '\'Roboto\', sans-serif',
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    boxShadow: '0px 48px 48px rgba(37, 47, 137, 0.08)',
    border: '1px solid #a2a3ae',
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
  }
}

Modal.setAppElement('#root');

const RecentWorkSectionItem = ({ projectInfo, reversed }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { imageUrl, projectName, projectSummary } = projectInfo;
  const appContainer = document.querySelector("#root"); // Get the app element from DOM to toggle a class. Awful hack, don't do it.

  const showModal = () => {
    appContainer.classList.add('blurred');
    setModalOpen(true);
  }
  
  const closeModal = () => {
    appContainer.classList.remove('blurred');
    setModalOpen(false);
  }
  

  return (
    <div className={style.itemContainer}>
      <div className={`col-12 col-md-8 ${reversed ? 'order-md-2' : undefined} ${style.pictureContainer}`}>
        <img src={imageUrl} alt="Project preview" className={style.projectImg} />
      </div>
      <div className={`col-12 col-md-4 ${reversed ? 'order-md-1' : undefined} ${style.infoContainer}`}>
        <h2 className={style.infoTitle}> {projectName} </h2>
        <p className={style.inforSummary}> {projectSummary} </p>
        <button className={style.button} onClick={showModal}>View</button>
      </div>
      <Modal style={modalStyle} isOpen={modalOpen} onRequestClose={closeModal}>
        <div className={style.modalContentWrapper}>
          <div className={style.modalRowOne}>
            <h2> {projectName} </h2>
            <button className={style.closeButton} onClick={closeModal}> 
              <FontAwesomeIcon icon={faTimes} /> 
            </button>
          </div>
          <img className={style.projectImg} src={imageUrl} alt="Project preview" />
          <p className={style.modalDescriptionParagraph}>
            {projectSummary}
          </p>
        </div>
      </Modal>
    </div>
  )
};

export default RecentWorkSectionItem;
