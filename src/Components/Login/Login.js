import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import './Login.css';
import image39 from '../../image/39.png';
import image40 from '../../image/40.png';

export function MenuModal(props) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSendingStatus, setOtpSendingStatus] = useState('');
  const [otpVerificationStatus, setOtpVerificationStatus] = useState('');
  const [otpInputDisabled, setOtpInputDisabled] = useState(false);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleContinueClick = async () => {
    try {
      setOtpSendingStatus('Sending OTP...');

      const { data } = await axios.post(
        'https://kv-varlu.vercel.app/api/v1/login',
        {
          mobileNumber: mobileNumber,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setOtpSendingStatus('OTP sent successfully');
      setOtpInputDisabled(false);

         const otpFromResponse = data.otp;

      // Set the OTP in the state
      setOtp(otpFromResponse);

      setTimeout(() => {
        setOtpSendingStatus('');
      }, 6000000);
    } catch (error) {
      console.error('API Error:', error);

      setOtpSendingStatus('Failed to send OTP');

      setTimeout(() => {
        setOtpSendingStatus('');
      }, 4000);
    }
  };

  const handleVerifyOtpClick = async () => {
    try {
      const { data } = await axios.post(
        'https://kv-varlu.vercel.app/api/v1/verify/login',
        {
          mobileNumber: mobileNumber,
          otp: otp,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (data.success) {
        setOtpVerificationStatus('OTP verified successfully');
        // Add logic to handle successful login here
      } else {
        setOtpVerificationStatus('OTP verified successfully');
      }

      setTimeout(() => {
        setOtpVerificationStatus('');
      }, 6000000);

      // Disable OTP input after verification
      setOtpInputDisabled(true);
    } catch (error) {
      console.error('OTP Verification Error:', error);

      setOtpVerificationStatus('OTP verification failed');

      setTimeout(() => {
        setOtpVerificationStatus('');
      }, 6000);
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

        <div className={`otp-status ${otpSendingStatus === 'Sending OTP...' ? 'otp-sending' : (otpSendingStatus === 'OTP sent successfully' ? 'otp-success' : 'otp-failed')}`}>
          {otpSendingStatus}
        </div>

        <div className={`otp-status ${otpVerificationStatus === 'OTP verified successfully' ? 'otp-success' : 'otp-failed'}`}>
          {otpVerificationStatus}
        </div>

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

          {otpSendingStatus === 'OTP sent successfully' && !otpInputDisabled ? (
            <div className="otp-verification-container">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
                disabled={otpInputDisabled}
              />
              <button className="verify-otp-button" onClick={handleVerifyOtpClick}>
                Verify OTP
              </button>
            </div>
          ) : null}
        </div>
      </Modal.Body>
    </Modal>
  );
}

MenuModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};

export default MenuModal;
