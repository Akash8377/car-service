import React from 'react';

const Checkout = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + parseInt(item.price), 0);

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - ₹{item.price}
          </li>
        ))}
      </ul>
      <p>Total: ₹{total}</p>
      <button>Place Order</button>
    </div>
  );
};

export default Checkout;
