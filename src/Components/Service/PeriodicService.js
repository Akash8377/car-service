import React, { useState } from 'react';
import '../../style/PeriodicService.css';
import image41 from '../../image/41.png';
import ServiceHeader from './ServiceHeader';
import image42 from '../../image/42.png';
import image43 from '../../image/43.png';

const ProductItem = ({ title, price, imageUrl }) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [cart, setCart] = useState([]); // Step 1: Initialize cart state

    const handleAddToCart = () => {
        // Step 2: Add the current product to the cart
        setCart([...cart, { title, price, imageUrl }]);
        setIsAddedToCart(true);
    };

    return (
        <div>
            <ServiceHeader />
            <div className='periodic-service-main'>
                <h2 className='periodic-service-main-heading'>Scheduled Package</h2>
                <p className='periodic-service-main-paragraph'>
                    <img src={image42} alt="" height="20px" width="20px" />4 Hrs Taken</p>

                <div className='inner-service-main'>
                    <img
                        src={image41}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Mini Service</h3>
                        <h5 className='periodic-text-1'> • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
                        <div className='periodic-text-2-main'>
                            <div className='periodic-text-2'>
                                <img src={image43} alt="" /> Wiper Fluid Replacement
                            </div>
                            <div className='periodic-text-2'>
                                <img src={image43} alt="" /> Battery Water Top Up
                            </div>
                        </div>

                        <div className='periodic-text-3-main'>
                            <div className='periodic-text-2'>
                                <img src={image43} alt="" /> Car Wash
                            </div>
                            <div className='periodic-text-2'>
                                <img src={image43} alt="" /> Interior Vacuuming ( Carpet & Seats )
                            </div>
                        </div>
                        <div className='periodic-text-4'>
                            <img src={image43} alt="" /> Interior Vacuuming ( Carpet & Seats )
                        </div>
                        <div className='periodic-text-5'>
                            + 4 more View All
                        </div>
                    </div>
                </div>
                <div className="periodic-text-7">
                    <h3 className='periodic-text-6'>₹ 2299</h3>

                    <button
                        onClick={handleAddToCart}
                        className='add-cart-method'
                        style={{
                            backgroundColor: 'blue', // Change the background color to your desired color
                            color: 'white', // Change the text color to your desired color
                            padding: '10px 20px', // Adjust padding as needed
                            borderRadius: '5px', // Add rounded corners if desired
                            cursor: 'pointer', // Change cursor style to indicate interactivity
                        }}
                    >
                        {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductItem;