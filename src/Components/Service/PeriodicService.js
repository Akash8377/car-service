

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { ServiceContext } from '../../context/ServiceContext';

import '../../style/PeriodicService.css';
import ServiceHeader from './ServiceHeader';
import Cart from './AddCart';
import Footer from '../Footer/Footer';
import ReviewDetails from './ReviewDetail';

const ProductItem = ({ title, price, imageUrl }) => {
  const { carInfo } = useContext(ServiceContext);
  const [cart, setCart] = useState([]);
  const [carDetails, setCarDetails] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const fetchDataFromBackend = async () => {
    try {
      // Make an HTTP GET request to your API endpoint with query parameters
      const response = await axios.get('https://your-api-endpoint.com/api/v1/car/service/price', {
        params: {
          manufacturer:carInfo.model ,
          model: carInfo.manufacturer,
          fuelType: carInfo.fuelType,
        },
      });

      // Assuming the response contains an array of service data
      const backendData = response.data;

      // Assuming you have an initial data array with default prices
      const data = [
        // Your data objects here with default prices
      ];

      // Update the data with prices from the backend response
      const updatedData = data.map((item) => {
        const matchingService = backendData.serviceTypes.find((service) =>
          service.feature.includes(item.mainHeading)
        );
        if (matchingService) {
          return { ...item, price: matchingService.price };
        }
        return item;
      });
      setCarDetails(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  return (
    <div>
      <ServiceHeader />
      <div className='add-cart-header'>
        <div>
          {carDetails && carDetails.length > 0 ? (
            carDetails.map((ele, i) => (
              <div className='periodic-service-main' key={i}>
                <h2 className='periodic-service-main-heading'>{ele.mainHeading}</h2>
                {/* Rest of your component rendering here */}
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
            ))
          ) : (
            <p>No data available.</p>
          )}
        </div>
        <Cart className='add-cart-method' cartItems={cart} />
      </div>
      <ReviewDetails />
      <Footer />
    </div>
  );
};

export default ProductItem;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useContext } from 'react';
// import { ServiceContext } from '../../context/ServiceContext';

// import '../../style/PeriodicService.css';
// import image41 from '../../image/41.png';
// import ServiceHeader from './ServiceHeader';
// import image42 from '../../image/42.png';
// import image43 from '../../image/43.png';
// import image44 from '../../image/44.png';
// import image45 from '../../image/45.png';
// import image46 from '../../image/46.png';
// import image47 from '../../image/47.png';
// import image48 from '../../image/48.png';
// import image49 from '../../image/49.png';
// import image50 from '../../image/50.png';
// import image51 from '../../image/51.png';
// import image52 from '../../image/52.png';
// import Cart from './AddCart';

// import Footer from '../Footer/Footer';
// import ReviewDetails from './ReviewDetail'

// const ProductItem = ({ title, price, imageUrl, subHeading }) => {
//   const { carInfo } = useContext(ServiceContext);
//   console.log(carInfo);
//   const [cart, setCart] = useState([]);
//   const [carDetails, setCarDetails] = useState([]);

//   const handleAddToCart = (item) => {
//     // Check if the item is already in the cart
//     const existingItem = cart.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       // If the item is already in the cart, replace it
//       const updatedCart = cart.map((cartItem) =>
//         cartItem.id === item.id ? { ...item, id: cartItem.id } : cartItem
//       );
//       setCart(updatedCart);
//     } else {
//       // If the item is not in the cart, add it
//       // Generate a unique ID for the item (for example, using a timestamp)
//       const itemId = Date.now();
//       // Create a new item with a unique ID
//       const newItem = { ...item, id: itemId };
//       setCart([...cart, newItem]);
//     }
//   };

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get('https://kv-varlu.vercel.app/car/service/price', carInfo);
//         console.log(response);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getData();
//   }, []);

//   const data = [
//     {
//       mainHeading: "Scheduled Package",
//       image: image41,
//       subHeading: "Mini Service",
//       miniSubHeading: "• 2000 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
//       price: "2299"
//     },
//     {
//       mainHeading: "",
//       image: image44,
//       subHeading: "Medium Services",
//       miniSubHeading: "• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
//       price: "2299"
//     },
//     {
//       mainHeading: "",
//       image: image45,
//       subHeading: "Major Service",
//       miniSubHeading: "• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
//       price: "2299"
//     },
//     {
//       mainHeading: "Brake Maintenance",
//       image: image46,
//       subHeading: "Front Brakes Pad",
//       miniSubHeading: "• 2 Month Warranty                         •  Every 20000 kms or 12 Months (Recommended)",
//       price: "1299"
//     },
//     {
//       mainHeading: "",
//       image: image47,
//       subHeading: "Rear Brakes Shoes",
//       miniSubHeading: "• 2 Month Warranty                         •  Every 20000 kms or 12 Months (Recommended)",
//       price: "1299"
//     },
//     {
//       mainHeading: "",
//       image: image48,
//       subHeading: "Front Brake Discs",
//       miniSubHeading: "• 2000 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
//       price: "2299"
//     },
//     {
//       mainHeading: "",
//       image: image49,
//       subHeading: "Caliper Pin Replacement",
//       miniSubHeading: "• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
//       price: "2299"
//     },
//     {
//       mainHeading: "",
//       image: image50,
//       subHeading: "Disc Turning",
//       miniSubHeading: "• 2000 kms or 2 Month Warranty   •  Every 20000 kms or 12 Months (Recommended)",
//       price: "2299"
//     },
//     {
//       mainHeading: "Handbrake Wire Replacement",
//       image: image51,
//       subHeading: "Front Brakes Pad",
//       miniSubHeading: "• 2000 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
//       price: "1299"
//     },
//     {
//       mainHeading: "",
//       image: image52,
//       subHeading: "Brake Drums Turning",
//       miniSubHeading: "• 2000 kms or 2 Month Warranty      •  Every 6000 kms or 3 Months (Recommended)",
//       price: "1299"
//     },
//   ];

//   return (
//     <div>
//       <ServiceHeader />
//       <div className='add-cart-header'>
//         <div>
//           {data && data.length > 0 ? (
//             data.map((ele, i) => (
//               <div className='periodic-service-main' key={i}>
//                 <h2 className='periodic-service-main-heading'>{ele.mainHeading}</h2>
//                 <p className='periodic-service-main-paragraph'>
//                   <img src={image42} alt='' height='20px' width='20px' />4 Hrs Taken
//                 </p>

//                 <div className='inner-service-main'>
//                   <img
//                     src={ele.image}
//                     alt={ele.title}
//                     width='192px'
//                     height='190px'
//                     style={{ borderRadius: '30px' }}
//                   />
//                   <div>
//                     <h3>{ele.subHeading}</h3>
//                     <h5 className='periodic-text-1'>{ele.miniSubHeading}</h5>
//                     <div className='periodic-text-2-main'>
//                       <div className='periodic-text-2'>
//                         <img src={image43} alt='' /> Wiper Fluid Replacement
//                       </div>
//                       <div className='periodic-text-2'>
//                         <img src={image43} alt='' /> Battery Water Top Up
//                       </div>
//                     </div>

//                     <div className='periodic-text-3-main'>
//                       <div className='periodic-text-2'>
//                         <img src={image43} alt='' /> Car Wash
//                       </div>
//                       <div className='periodic-text-2'>
//                         <img src={image43} alt='' /> Interior Vacuuming ( Carpet & Seats )
//                       </div>
//                     </div>
//                     <div className='periodic-text-4'>
//                       <img src={image43} alt='' /> Interior Vacuuming ( Carpet & Seats )
//                     </div>
//                     <div className='periodic-text-5'>+ 4 more View All</div>
//                   </div>
//                 </div>
//                 <div className='periodic-text-7'>
//                   <h3 className='periodic-text-6'>₹ {ele.price}</h3>

//                   <button
//                     onClick={() =>
//                       handleAddToCart({
//                         title: ele.subHeading,
//                         price: ele.price,
//                         imageUrl: ele.image,
//                       })
//                     }
//                     className='add-cart-method'
//                   >
//                     + Add to Cart
//                   </button>
//                   {/* <Link
//                     className="add-cart"
//                     onClick={() => addToCart(ele.subHeading,ele.price)}
//                   >
//                     Add to cart
//                   </Link> */}

//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No data available.</p>
//           )}
//         </div>
//         <Cart cartItems={cart} setCart={setCart} />
//       </div>div
//       <ReviewDetails />
//       <Footer />
//     </div>
//   );
// };

// export default ProductItem;