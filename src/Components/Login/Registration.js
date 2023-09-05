import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import './Login.css';
import image39 from '../../image/39.png';

export function RegistrationModal(props) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSendingStatus, setOtpSendingStatus] = useState('');
  const [otpVerificationStatus, setOtpVerificationStatus] = useState('');
  const [otpInputDisabled, setOtpInputDisabled] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // Track registration status

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
        'https://kv-varlu.vercel.app/api/v1/register',
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

      // Extract the OTP from the API response
      const otpFromResponse = data.user.otp;

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
        'https://kv-varlu.vercel.app/api/v1/verify/otp',
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
        // Set registration status to true when OTP is verified
        setIsRegistered(true);
      } else {
        setOtpVerificationStatus('OTP verified successfully');
      }

      setTimeout(() => {
        setOtpVerificationStatus('');
      }, 60000);

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

  const handleRegisterClick = () => {
    // Add logic to complete the registration process
    // You can navigate to the registration page or perform any other necessary actions
    console.log('Registration completed');
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
          <div className='registration-contain'>Registration</div>

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

          {/* Display registration button when OTP is verified */}
          {isRegistered && (
            <button className="register-button" onClick={handleRegisterClick}>
              Register
            </button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

RegistrationModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};

export default RegistrationModal;
