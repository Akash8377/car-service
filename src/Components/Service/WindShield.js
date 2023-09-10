import React, { useState } from 'react';
import '../../style/PeriodicService.css';
import image105 from '../../image/105.png';
import ServiceHeader from './ServiceHeader';
import image42 from '../../image/42.png';
import image43 from '../../image/43.png';
import image106 from '../../image/106.png';
import image107 from '../../image/107.png';
import image108 from '../../image/108.png';
import image109 from '../../image/109.png';
import image110 from '../../image/110.png';
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
            mainHeading: "Wind Shields",
            image: image105,
            subHeading: "Front Windshield Replacement",
            miniSubHeading:"• 2 Months Warranty on Fitting   •  On Crack in windshield",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image106,
            subHeading: "Read Windshield Replacement",
            miniSubHeading:"• 2 Months Warranty on Fitting   •  On Crack in windshield",
            price:"2299"
        },
        {
            mainHeading: "Glasses",
            image: image107,
            subHeading: "Door Glass Replacement",
            miniSubHeading:"• 2 Months Warranty on Fitting   •  On Crack in Door Glass",
            price:"3270"
        },
        {
            mainHeading: "Lights",
            image: image108,
            subHeading: "Front Headlight",
            miniSubHeading:"• 2 Months Warranty on Fitting   •  On Crack in Front Headlight",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image109,
            subHeading: "Rear Tail light",
            miniSubHeading:"• 2 Months Warranty on Fitting   •  On Crack in Rear Headlight",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image110,
            subHeading: "Fog Lights",
            miniSubHeading:"• 2 Months Warranty on Fitting   ",
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