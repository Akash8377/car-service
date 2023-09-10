import React, { useState } from 'react';
import '../../style/AddCart.css';
import image111 from '../../image/111.png';
import CouponModal from './Coupon';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, setCart }) => {
  const [couponShow, setCouponShow] = useState(false);
  const navigate = useNavigate();

  // Function to remove an item from the cart
  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);


  return (
    <div className='cart-container'>
      <CouponModal show={couponShow} onHide={() => setCouponShow(false)} />
      <img src={image111} alt='' />
      <h2>Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className='cart-item'>
              <h5>{item.title}</h5>
              <div>
                <p>₹ {item.price}</p>
              </div>
              {/* Remove button */}
              <button
                className='add-cart-cancel-option'
                onClick={() => handleRemoveFromCart(item.id)}
                style={{ color: 'black', textDecoration: 'none' }}
              >
                𐤕
              </button>
            </div>
          ))}
          {/* Display subtotal */}
          <div className='subtotal'>
            <p>Subtotal: ₹ {subtotal}</p>
          </div>
          <button className='coupon-checkout' onClick={() => setCouponShow(true)}>
            Coupon
          </button>
          <button className='checkout-button' onClick={() => navigate('/checkout')}>Checkout</button>

        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
