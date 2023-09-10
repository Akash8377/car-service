import React, { useState } from 'react';
import '../../style/PeriodicService.css';
import image98 from '../../image/98.png';
import ServiceHeader from './ServiceHeader';
import image42 from '../../image/42.png';
import image43 from '../../image/43.png';
import image99 from '../../image/99.png';
import image100 from '../../image/100.png';
import image101 from '../../image/101.png';
import image102 from '../../image/102.png';
import image103 from '../../image/103.png';
import image104 from '../../image/104.png';
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
            mainHeading: "Used Car",
            image: image98,
            subHeading: "Second Hand Car Inspection",
            miniSubHeading:"• Doorstep Delivery   •  Scanner Report Provided",
            price:"2299"
        },
        {
            mainHeading: "Inspections",
            image: image99,
            subHeading: "Road Trip Inspection",
            miniSubHeading:"• Recommended for Long road trips",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image100,
            subHeading: "Engine Scanning",
            miniSubHeading:"• Scanner Report Provided   • OEM Scanner Used",
            price:"3270"
        },
        {
            mainHeading: "",
            image: image101,
            subHeading: "Insurance Claim Inspection",
            miniSubHeading:"• Real Time Claim Tracking Mechanism   • Free Pickup & Drop Facility",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image102,
            subHeading: "Complete Suspension inspection",
            miniSubHeading:"• 25 Points Checklist   • OEM Scanner Used",
            price:"1299"
        },
        {
            mainHeading: "Radiators",
            image: image103,
            subHeading: "Radiator Placement",
            miniSubHeading:"• 2 Month Warranty     •  Recommended - In case of blockage of Radiator ",
            price:"299"
        },
        {
            mainHeading: "",
            image: image104,
            subHeading: "Radiator Fan Motor Replacement",
            miniSubHeading:"• 2 Month Warranty     •  Recommended - In case of fan not working",
            price:"299"
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