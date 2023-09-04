import React, { useState } from 'react';
import '../../style/PeriodicService.css';
import image89 from '../../image/89.png';
import ServiceHeader from './ServiceHeader';
import image42 from '../../image/42.png';
import image43 from '../../image/43.png';
import image90 from '../../image/90.png';
import image82 from '../../image/82.png';
import image83 from '../../image/83.png';
import image91 from '../../image/91.png';
import image92 from '../../image/92.png';
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
            mainHeading: "Polishing",
            image: image89,
            subHeading: "3M™ Car Rubbing & Polishing",
            miniSubHeading:"• Every 5 Months ( Recommended )",
            price:"2299"
        },
        {
            mainHeading: "Ceramic Coating",
            image: image82,
            subHeading: "Ceramic Coating",
            miniSubHeading:"• Every 5 Months ( Recommended )",
            price:"2299"
        },
        {
            mainHeading: "",
            image: image83,
            subHeading: "Boot Paint",
            miniSubHeading:"• Every 5 Months ( Recommended )",
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
            mainHeading: "Teflon Coating",
            image: image90,
            subHeading: "3M™ Teflon Coating",
            miniSubHeading:"• 2 Years Warranty   •  Every 4 Months (Recommended)",
            price:"1299"
        },
        {
            mainHeading: "",
            image: image91,
            subHeading: "Meguiar's Teflon Coating",
            miniSubHeading:"•2 Years Warranty   •  Every 4 Months (Recommended)",
            price:"1299"
        },
        {
            mainHeading: "PPF",
            image: image92,
            subHeading: "PPF - Paint Protection Film",
            miniSubHeading:"• 2 Years Warranty   •  Every 4 Months (Recommended)",
            price:"2299"
        },
        {
            mainHeading: "Anti Rusting Coating",
            image: image92,
            subHeading: "Anti Rust Underbody Coating",
            miniSubHeading:"• 2 Years Warranty   •  Every 4 Months (Recommended)",
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
          <Cart className="add-cart-method" cartItems={cart} /> 
        </div>div
        <ReviewDetails />
        <Footer />
      </div>
    );
};

export default ProductItem;