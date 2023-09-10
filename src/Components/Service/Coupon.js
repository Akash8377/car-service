import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import '../../style/Coupon.css';
import { Link } from 'react-router-dom';

export function MenuModal(props) {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponData, setCouponData] = useState([]);

  useEffect(() => {
    // Fetch coupon data when the component mounts
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://kv-varlu.vercel.app/api/v1/coupon');
        setCouponData(data);
      } catch (error) {
        console.error('Coupon Fetch Error:', error);
        // Handle the error here
      }
    };

    fetchData();
  }, []);

  const applyCoupon = (code) => {
    // Apply coupon logic here
    // You can use the selected coupon code and apply it to your application
    // For example, you can set a state variable to indicate that a coupon is applied
    // and display the applied coupon code.
    setCouponApplied(true);
    console.log(`Applied coupon: ${code}`);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="menu-modal"
    ><Button variant="secondary" onClick={props.onHide} style={{ color: 'black' }}>
        𐤕
      </Button>
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
            onClick={() => applyCoupon(couponCode)}
            style={{
              backgroundColor: '#001B39',
              color: 'white',
              marginLeft: '10px',
              padding: '5px 10px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            APPLY
          </button>
        </div>
        <div className="availabe-coupon-text" style={{ marginTop: '10px' }}>
          AVAILABLE COUPONS
        </div>
        {/* Display the fetched coupon data */}
        {couponData.map((coupon) => (
          <div key={coupon._id} className="coupon-1-main">
            <div className="top3">
              <img src="./Image/2.png" alt="" height="50px" width="50px" />
              <h3>{coupon.code}</h3>
            </div>
            <p className="coupon-main-para-1">{`Flat ${coupon.discount}% OFF on Scheduled Services, AC, Brakes, Detailing & Cleaning.`}</p>
            <Link
              className="term-condition-coupon"
              to="/term-condition"
              style={{ textDecoration: 'none', color: '#001B39', fontWeight: 700 }}
            >
              VIEW T&C
            </Link>
            <div className="coupon-offer-coupon-main">
              <div className="coupon-offer-coupon-button-container">
                <h5 className="coupon-offer-coupon">{coupon.code}</h5>
                <button className="coupon-offer-coupon-button" onClick={() => applyCoupon(coupon.code)}>
                  Apply
                </button>
              </div>
            </div>
            <p className="coupon-main-para-1">*Applicable with any Periodic Service Detailing Service.</p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>

        {/* Add another button (e.g., "Apply") if needed */}
        {/* <Button variant="primary" onClick={applyCoupon}>Apply</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

MenuModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};

export default MenuModal;
