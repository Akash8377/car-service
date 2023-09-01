import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import './Login.css'; 
import image39 from '../../image/39.png';
import image40 from '../../image/40.png';

export function MenuModal(props) {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleContinueClick = async () => {
    try {
      console.log('Before API request');
      const {response} = await axios.post(
        "https://kv-varlu.vercel.app/api/v1/login",
        {
          mobileNumber: mobileNumber,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('After API request');
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="menu-modal"
    >
      <Modal.Body className="Find_Work_Modal">
        <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>

        <div className="login-container">
          <img src={image39} alt="" />
          <img className="image-login-logo" src={image40} alt="" />

          <div className="input-container">
            <span>+91</span>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />
          </div>
          <button className="continue-button" onClick={handleContinueClick}>
            Continue
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

MenuModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};

export default MenuModal;
