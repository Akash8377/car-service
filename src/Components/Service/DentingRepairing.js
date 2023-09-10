import React, { useState } from 'react';
import '../../style/PeriodicService.css';
import image80 from '../../image/80.png';
import ServiceHeader from './ServiceHeader';
import image42 from '../../image/42.png';
import image43 from '../../image/43.png';
import image81 from '../../image/81.png';
import image82 from '../../image/82.png';
import image83 from '../../image/83.png';
import image84 from '../../image/84.png';
import image85 from '../../image/85.png';
import image88 from '../../image/87.png';
import image87 from '../../image/88.png';
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
            mainHeading: "Front Side",
            image: image80,
            subHeading: "Front Bumper Paint",
            miniSubHeading:"• 3 Years Warranty on Paint",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image81,
            subHeading: "Bonnet Paint",
            miniSubHeading:"• 3 Years Warranty on Paint",
            price:"2299"
        },
        {
            mainHeading: "Rear Side",
            image: image82,
            subHeading: "Rear Bumper Paint",
            miniSubHeading:"• 3 Years Warranty on Paint",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image83,
            subHeading: "Boot Paint",
            miniSubHeading:"• 3 Years Warranty on Paint)",
            price:"1299"
        },
        {
            mainHeading: "Whole Body",
            image: image84,
            subHeading: "Full Body Dent Paint",
            miniSubHeading:"• 3 Years Warranty on Paint",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image85,
            subHeading: "Alloy Paint",
            miniSubHeading:"• 3 Years Warranty on Paint",
            price:"1299"
        },
        {
            mainHeading: "Right Side",
            image: image88,
            subHeading: "Right Fender Paint",
            miniSubHeading:"• 3 Years Warranty on Paint",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image87,
            subHeading: "Right Rear Door Paint",
            miniSubHeading:"• 3 Years Warranty on Paint",
            price:"2299"
        }
       
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