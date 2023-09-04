import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'; // Import Button component from react-bootstrap
import '../../style/Coupon.css';

export function MenuModal(props) {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponData, setCouponData] = useState(null);

  const applyCoupon = async () => {
    try {
      const { data } = await axios.post(
        'https://kv-varlu.vercel.app/api/v1/coupon',
        {
          couponCode: couponCode,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setCouponData(data);
      setCouponApplied(true);
    } catch (error) {
      console.error('Coupon Application Error:', error);
      // Handle the error here
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
        <h2>Apply Coupon</h2>
        <div className="coupon-input-check" style={{ display: 'flex', alignItems: 'flex-start' }}>
          <input
            type="text"
            className="coupon-text-main"
            style={{ marginRight: '10px' }}
            placeholder="Enter Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button
            onClick={applyCoupon}
            style={{
              backgroundColor: '#001B39',
              color: 'white',
              marginLeft: '10px', // Add 10px gap
              padding: '5px 10px', // Adjust padding for better appearance
              border: 'none', // Remove border if needed
              cursor: 'pointer', // Change cursor to pointer on hover
            }}
          >
            APPLY
          </button>
        </div>
        <div className="availabe-coupon-text" style={{ marginTop: '10px' }}>
          AVAILABLE COUPONS
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

MenuModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};

export default MenuModal;
