import React, { useState, useEffect } from 'react';
import CustomHeader from '../Pages/CustomerHeading';
import Footer from '../Footer/Footer';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch cart data when the component mounts
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await fetch('https://kv-varlu.vercel.app/api/v1/cart', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual access token
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCartItems(data.items);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.error('Failed to fetch cart data');
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching cart data:', error);
    }
  };

  const addToCart = async () => {
    try {
      const response = await fetch('https://kv-varlu.vercel.app/api/v1/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual access token
        },
        body: JSON.stringify({
          serviceType: '64faf8f3cf7ee53957a86569',
          quantity: 1,
        }),
      });

      if (response.ok) {
        // Cart item added successfully
        fetchCartData(); // Refresh cart data
      } else {
        console.error('Failed to add item to the cart');
      }
    } catch (error) {
      console.error('Error adding item to the cart:', error);
    }
  };

  return (
    <div>
      <CustomHeader />
      <h2>Checkout</h2>
      {isLoading ? (
        <p>Loading cart...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} - ₹{item.price}
              </li>
            ))}
          </ul>
          <p>Total: ₹{cartItems.reduce((acc, item) => acc + parseInt(item.price), 0)}</p>
          <button onClick={addToCart}>Add Item to Cart</button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
