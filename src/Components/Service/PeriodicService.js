import React, { useState } from 'react';
import '../../style/PeriodicService.css';
import image41 from '../../image/41.png';
import ServiceHeader from './ServiceHeader';
import image42 from '../../image/42.png';
import image43 from '../../image/43.png';
import image44 from '../../image/44.png';
import image45 from '../../image/45.png';
import image46 from '../../image/46.png';
import image47 from '../../image/47.png';
import image48 from '../../image/48.png';
import image49 from '../../image/49.png';
import image50 from '../../image/50.png';
import image51 from '../../image/51.png';
import image52 from '../../image/52.png';
import Cart from './AddCart';

import Footer from '../Footer/Footer';
import ReviewDetails from './ReviewDetail'

const ProductItem = ({ title, price, imageUrl }) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (item) => {
      setCart([...cart, item]);
    };

    const data = [
        {
            mainHeading: "Scheduled Package",
            image: image41,
            subHeading: "Mini Service",
            miniSubHeading:"• 2000 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image44,
            subHeading: "Medium Services",
            miniSubHeading:"• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image45,
            subHeading: "Major Service",
            miniSubHeading:"• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "Brake Maintenance",
            image: image46,
            subHeading: "Front Brakes Pad",
            miniSubHeading:"• 2 Month Warranty                         •  Every 20000 kms or 12 Months (Recommended)",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image47,
            subHeading: "Rear Brakes Shoes",
            miniSubHeading:"• 2 Month Warranty                         •  Every 20000 kms or 12 Months (Recommended)",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image48,
            subHeading: "Front Brake Discs",
            miniSubHeading:"• 2000 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image49,
            subHeading: "Caliper Pin Replacement",
            miniSubHeading:"• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image50,
            subHeading: "Disc Turning",
            miniSubHeading:"• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "Handbrake Wire Replacement",
            image: image51,
            subHeading: "Front Brakes Pad",
            miniSubHeading:"• 2000 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image52,
            subHeading: "Brake Drums Turning",
            miniSubHeading:"• 2000 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
            price:"1299"
        },
    ];

    return (
        <div>
      <ServiceHeader />
      <div className='add-cart-header'>
        <div>
          {data && data.length > 0 ? (
            data.map((ele, i) => (
              <div className='periodic-service-main' key={i}>
                <h2 className='periodic-service-main-heading'>{ele.mainHeading}</h2>
                <p className='periodic-service-main-paragraph'>
                  <img src={image42} alt='' height='20px' width='20px' />4 Hrs Taken
                </p>

                <div className='inner-service-main'>
                  <img
                    src={ele.image}
                    alt={ele.title}
                    width='192px'
                    height='190px'
                    style={{ borderRadius: '30px' }}
                  />
                  <div>
                    <h3>{ele.subHeading}</h3>
                    <h5 className='periodic-text-1'>{ele.miniSubHeading}</h5>
                    <div className='periodic-text-2-main'>
                      <div className='periodic-text-2'>
                        <img src={image43} alt='' /> Wiper Fluid Replacement
                      </div>
                      <div className='periodic-text-2'>
                        <img src={image43} alt='' /> Battery Water Top Up
                      </div>
                    </div>

                    <div className='periodic-text-3-main'>
                      <div className='periodic-text-2'>
                        <img src={image43} alt='' /> Car Wash
                      </div>
                      <div className='periodic-text-2'>
                        <img src={image43} alt='' /> Interior Vacuuming ( Carpet & Seats )
                      </div>
                    </div>
                    <div className='periodic-text-4'>
                      <img src={image43} alt='' /> Interior Vacuuming ( Carpet & Seats )
                    </div>
                    <div className='periodic-text-5'>+ 4 more View All</div>
                  </div>
                </div>
                <div className='periodic-text-7'>
                  <h3 className='periodic-text-6'>₹ {ele.price}</h3>

                  <button
                    onClick={() =>
                      handleAddToCart({
                        title: ele.mainHeading,
                        price: ele.price,
                        imageUrl: ele.image,
                      })
                    }
                    className='add-cart-method'
                  >
                    + Add to Cart
                  </button>

                </div>
              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </div>
        <Cart className="add-cart-method" cartItems={cart} /> 
      </div>div
      <ReviewDetails />
      <Footer />
    </div>
    );
};

export default ProductItem;