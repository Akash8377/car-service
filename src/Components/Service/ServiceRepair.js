import React, { useState } from 'react';
import '../../style/PeriodicService.css';
import imager56 from '../../image/56.png';
import ServiceHeader from './ServiceHeader';
import image42 from '../../image/42.png';
import image43 from '../../image/43.png';
import image57 from '../../image/57.png';
import image58 from '../../image/58.png';
import image59 from '../../image/59.png';
import image60 from '../../image/60.png';
import image61 from '../../image/61.png';
import image62 from '../../image/62.png';
import image64 from '../../image/64.png';
import Cart from './AddCart';
import image66 from '../../image/66.png';


import Footer from '../Footer/Footer';
import ReviewDetails from './ReviewDetail'

const ProductItem = ({ title, price, imageUrl }) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (item) => {
      setCart([...cart, item]);
    };

    const data = [
        {
            mainHeading: "Service Packages",
            image: imager56,
            subHeading: "Regular AC Service",
            miniSubHeading:"• 600 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image57,
            subHeading: "High Performance AC Service",
            miniSubHeading:"• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "AC Fitments",
            image: image58,
            subHeading: "Cooling Coil Replacement",
            miniSubHeading:"• 2 Month Warranty     •  Recommended - In case of No Cooling",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image59,
            subHeading: "Compressor Replacement",
            miniSubHeading:"• 2 Month Warranty                         •  Every 20000 kms or 12 Months (Recommended)",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image60,
            subHeading: "Heating Coil Replacement",
            miniSubHeading:"• 2 Month Warranty                         •  Every 20000 kms or 12 Months (Recommended)",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image61,
            subHeading: "V-Belt Replacement",
            miniSubHeading:"• 2000 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image62,
            subHeading: "AC Blower Motor Replacement",
            miniSubHeading:"• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "Radiators",
            image: image66,
            subHeading: "Radiator Placement",
            miniSubHeading:"• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image64,
            subHeading: "Radiator Fan Motor Replacement",
            miniSubHeading:"• 2000 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
            price:"1299"
        },
        {
            mainHeading: "",
            image: imager56,
            subHeading: "Radiator Flush & Clean",
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
        <Cart cartItems={cart} setCart={setCart} />
      </div>div
      <ReviewDetails />
      <Footer />
    </div>
    );
};

export default ProductItem;