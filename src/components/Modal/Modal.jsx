import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export default function Modal({ showModal, urlModal, handleModalClose }) {
  if (showModal === true) {
    return (
      <div onClick={handleModalClose} className="overlay">
        <div className="modal">
          <img src={urlModal} alt="" />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  handleModalClose: PropTypes.func,
  urlModal: PropTypes.string,
};
