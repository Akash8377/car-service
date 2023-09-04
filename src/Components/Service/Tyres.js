import React, { useState } from 'react';
import '../../style/PeriodicService.css';
import image75 from '../../image/75.png';
import ServiceHeader from './ServiceHeader';
import image42 from '../../image/42.png';
import image43 from '../../image/43.png';
import image76 from '../../image/76.png';
import image77 from '../../image/77.png';
import image78 from '../../image/78.png';
import image79 from '../../image/79.png';
import Footer from '../Footer/Footer';
import ReviewDetails from './ReviewDetail';
import Cart from './AddCart';
import { Link } from 'react-router-dom';

const ProductItem = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const data = [
    {
      mainHeading: 'Apollo',
      image: image75,
      subHeading: 'Apollo Amazer 4G Life',
      miniSubHeading:
        '• Size - 175/60 R15 90T • 6 Years Warranty • Tubeless • Fitting Cost Included',
      price: '2299',
    },
    {
      mainHeading: 'MRF',
      image: image76,
      subHeading: 'MRF ZTX',
      miniSubHeading:
        '• Size - 175/60 R15 80T • 6 Years Warranty • Tubeless • Fitting Cost Included',
      price: '2299',
    },
    {
      mainHeading: 'Bridgestone',
      image: image77,
      subHeading: 'Bridgestone Ecopia EP150',
      miniSubHeading:
        '• Size - 175/60 R15 60T    • 6 Years Warranty     • Tubeless    • Fitting Cost Included',
      price: '2299',
    },
    {
      mainHeading: 'CEAT',
      image: image78,
      subHeading: 'CEAT Milaze X3',
      miniSubHeading:
        '• Size - 175/60 R15 90T    • 6 Years Warranty     • Tubeless    • Fitting Cost Included',
      price: '1299',
    },
    {
      mainHeading: 'Good Year',
      image: image79,
      subHeading: 'GoodYear Assu Duraplus 2 TT',
      miniSubHeading: '• GoodYear Assu Duraplus 2 TT',
      price: '2299',
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
