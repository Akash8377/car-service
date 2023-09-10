import React, { useState } from 'react';
import '../../style/PeriodicService.css';
import image69 from '../../image/69.png';
import ServiceHeader from './ServiceHeader';
import image42 from '../../image/42.png';
import image43 from '../../image/43.png';
import image70 from '../../image/70.png';
import image71 from '../../image/71.png';
import image72 from '../../image/72.png';
import image73 from '../../image/73.png';
import image74 from '../../image/74.png';
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
            mainHeading: "Amaron",
            image: image69,
            subHeading: "Amaron (60 Months Warranty)",
            miniSubHeading:"• 50 Amp Hour     •  60 Months Warranty        •  Free Installation ",
            price:"2299"
        },
        {
            mainHeading: "Exide",
            image: image70,
            subHeading: "Exide (55 Months Warranty)",
            miniSubHeading:"• 50 Amp Hour     •  55 Months Warranty        •  Free Installation ",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image70,
            subHeading: "Exide (66 Months Warranty)",
            miniSubHeading:"• 40 Amp Hour     •  66 Months Warranty        •  Free Installation ",
            price:"1299"
        },
        {
            mainHeading: "Liv Guard",
            image: image71,
            subHeading: "Boot Paint",
            miniSubHeading:"• 50 Amp Hour     •  60 Months Warranty        •  Free Installation ",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image72,
            subHeading: "Livguard (72 Months Warranty)",
            miniSubHeading:"• 50 Amp Hour     •  72 Months Warranty        •  Free Installation ",
            price:"1299"
        },
        {
            mainHeading: "Alternator",
            image: image73,
            subHeading: "Alternator Replacement",
            miniSubHeading:"• 2 Month Warranty     •  Recommended - In case of Discharging Battery",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image74,
            subHeading: "Alternator Repair",
            miniSubHeading:"• 2 Month Warranty     •  Recommended - In case of fan not working",
            price:"2299"
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