// Cart.js
import React,{useState} from 'react';
import '../../style/AddCart.css';
import image111 from '../../image/111.png';
import CouponModal from './Coupon'

const Cart = ({ cartItems }) => {
  const [couponShow, setCouponShow] = useState(false);
  return (
    <div className='cart-container'>
       <CouponModal show={couponShow} onHide={() => { setCouponShow(false) }} />
      <img src={image111} alt=""/>
      <h2>Your Cart</h2>
      {cartItems && cartItems.length > 0 ? ( 
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className='cart-item'>
              <img src={item.imageUrl} alt={item.title} height="20px" width="20px"/>
              <h5>{item.subHeading}</h5>
              <p>₹ {item.price}</p>
              
            </div>
          ))}
          
          <button className='coupon-checkout' onClick={() => setCouponShow(true)}>Coupon</button>
          <button className='checkout-button'>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
