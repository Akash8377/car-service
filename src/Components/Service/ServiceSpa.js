import React, { useState } from 'react';
import '../../style/PeriodicService.css';
import image98 from '../../image/98.png';
import ServiceHeader from './ServiceHeader';
import image42 from '../../image/42.png';
import image43 from '../../image/43.png';
import image104 from '../../image/104.png';
import image53 from '../../image/53.png';
import image54 from '../../image/54.png';
import image55 from '../../image/55.png';


import image99 from '../../image/99.png';
import image100 from '../../image/100.png';
import image101 from '../../image/101.png';
import image102 from '../../image/102.png';
import image103 from '../../image/103.png';
import Footer from '../Footer/Footer'

const ProductItem = ({ title, price, imageUrl }) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [cart, setCart] = useState([]);

    const handleAddToCart = () => {

        setCart([...cart, { title, price, imageUrl }]);
        setIsAddedToCart(true);
    };

    return (
        <div>
            <ServiceHeader />
            <div className='periodic-service-main'>
                <h2 className='periodic-service-main-heading'>Used Car</h2>
                <p className='periodic-service-main-paragraph'>
                    <img src={image42} alt="" height="20px" width="20px" />4 Hrs Taken</p>

                <div className='inner-service-main'>
                    <img
                        src={image98}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Second Hand Car Inspection</h3>
                        <h5 className='periodic-text-1'> • Doorstep Delivery • Scanner Report Provided </h5>
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
                    >
                        {isAddedToCart ? 'Added to Cart' : '+ Add to Cart'}
                    </button>

                </div>
            </div>

           

            <div className='periodic-service-main'>
            <h2 className='periodic-service-main-heading'>Inspections</h2>
                <p className='periodic-service-main-paragraph'>
                    <img src={image42} alt="" height="20px" width="20px" />4 Hrs Taken</p>

                <div className='inner-service-main'>
                    <img
                        src={image99}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Road Trip Inspection</h3>
                        <h5 className='periodic-text-1'> • Recommended for Long road trips  </h5>
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
                    <h3 className='periodic-text-6'>₹ 1299</h3>

                    <button
                        onClick={handleAddToCart}
                        className='add-cart-method'
                    >
                        {isAddedToCart ? 'Added to Cart' : '+ Add to Cart'}
                    </button>

                </div>
            </div>


            <div className='periodic-service-main'>
         
                <p className='periodic-service-main-paragraph'>
                    <img src={image42} alt="" height="20px" width="20px" />4 Hrs Taken</p>

                <div className='inner-service-main'>
                    <img
                        src={image100}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Engine Scanning</h3>
                        <h5 className='periodic-text-1'>• Scanner Report Provided • OEM Scanner Used </h5>
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
                    <h3 className='periodic-text-6'>₹ 1299</h3>

                    <button
                        onClick={handleAddToCart}
                        className='add-cart-method'
                    >
                        {isAddedToCart ? 'Added to Cart' : '+ Add to Cart'}
                    </button>

                </div>
            </div>


            <div className='periodic-service-main'>
           
                <p className='periodic-service-main-paragraph'>
                    <img src={image42} alt="" height="20px" width="20px" />4 Hrs Taken</p>
                  

                <div className='inner-service-main'>
                    <img
                        src={image101}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Insurance Claim Inspection</h3>
                        <h5 className='periodic-text-1'> • Real Time Claim Tracking Mechanism • Free Pickup & Drop Facility</h5>
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
                    <h3 className='periodic-text-6'>₹ 1299</h3>

                    <button
                        onClick={handleAddToCart}
                        className='add-cart-method'
                    >
                        {isAddedToCart ? 'Added to Cart' : '+ Add to Cart'}
                    </button>

                </div>
            </div>



            <div className='periodic-service-main'>
                <p className='periodic-service-main-paragraph'>
                    <img src={image42} alt="" height="20px" width="20px" />4 Hrs Taken</p>

                <div className='inner-service-main'>
                    <img
                        src={image102}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Complete Suspension inspection</h3>
                        <h5 className='periodic-text-1'>• 25 Points Checklist • OEM Scanner Used</h5>
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
                    <h3 className='periodic-text-6'>₹ 1299</h3>

                    <button
                        onClick={handleAddToCart}
                        className='add-cart-method'
                    >
                        {isAddedToCart ? 'Added to Cart' : '+ Add to Cart'}
                    </button>

                </div>
            </div>

            <div className='periodic-service-main'>
                <h2 className='periodic-service-main-heading'>Radiators</h2>
                <p className='periodic-service-main-paragraph'>
                    <img src={image42} alt="" height="20px" width="20px" />4 Hrs Taken</p>

                <div className='inner-service-main'>
                    <img
                        src={image103}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Radiator Placement</h3>
                        <h5 className='periodic-text-1'> • 2 Month Warranty     •  Recommended - In case of blockage of Radiator </h5>
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
                    >
                        {isAddedToCart ? 'Added to Cart' : '+ Add to Cart'}
                    </button>

                </div>
            </div>


            <div className='periodic-service-main'>
                <p className='periodic-service-main-paragraph'>
                    <img src={image42} alt="" height="20px" width="20px" />4 Hrs Taken</p>

                <div className='inner-service-main'>
                    <img
                        src={image104}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Radiator Fan Motor Replacement</h3>
                        <h5 className='periodic-text-1'> • 2 Month Warranty     •  Recommended - In case of fan not working</h5>
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
                    >
                        {isAddedToCart ? 'Added to Cart' : '+ Add to Cart'}
                    </button>

                </div>
            </div>

            


            <div>
                <h3 className="Review-Container-6">Related Blogs</h3>
                <div className='related-blog-main-container'>
                    <img src={image53} alt="" />
                    <img src={image54} alt="" />
                    <img src={image55} alt="" />
                </div>
            </div>


            <div>

                <div className="review10">
                    <h3 className="Review-Container">Recent Review & Rating on Periodic Services</h3>
                    <div className="review13">
                        <div className="review14">
                            <div className="review15">
                                <img src="./Image/20.png" alt="" />
                                <div className="review16">
                                    <p>Mohith Reddy</p>
                                    <div className="review17">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <p>1 WEEK AGO</p>
                                    </div>
                                </div>
                            </div>
                            <p>Absolutely recommended garage for everyone..!! Recently I had a issue of oil filters and engine
                                m ounts replacement for my car BMW and i don't want my car to showroom because it will usually
                                takes 1-2 weeks , so then my friend suggested this garage. And even gave the manager number.
                                The manager there Sai is very professional and friendly person. With in two days they resolved
                                my issue and even they gave an astonishing general service
                            </p>
                        </div>
                        <div className="review14">
                            <div className="review15">
                                <img src="./Image/21.png" alt="" />
                                <div className="review16">
                                    <p>Shiva Kumar</p>
                                    <div className="review17">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <p>4 WEEK AGO</p>
                                    </div>
                                </div>
                            </div>
                            <p>This is a very trusted most popular and very amazing service provider mechanic luxury car service centre they have very
                                best experience in this field for providing very best service (I car service) very good experience with maneger Sai

                            </p>
                        </div>
                        <div className="review14">
                            <div className="review15">
                                <img src="./Image/22.png" alt="" />
                                <div className="review16">
                                    <p>Meghana Chapala</p>
                                    <div className="review17">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <p>1 WEEK AGO</p>
                                    </div>
                                </div>
                            </div>
                            <p>Highly recommended this service stationThey have done a very good job in fixing all my issues in one go. i had done my car bumper painting and general service with other issues.all issues fixed perfectly....
                                Good job...👏
                                Service: Auto body & trim repair
                            </p>
                        </div>
                        <div className="review14">
                            <div className="review15">
                                <img src="./Image/23.png" alt="" />
                                <div className="review16">
                                    <p>Atharva Kulkarni</p>
                                    <div className="review17">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <p>1 MONTH AGO</p>
                                    </div>
                                </div>
                            </div>
                            <p>Excellent service. Sai helped me when I was stranded on highway (100km from city) at night due to battery malfunction. The towing of my car was arranged by Sai, then he repaired the car in quick time. He made sure that I understand what part was to be repaired and why. With the seamless service, I have become his all time customer :)

                            </p>
                        </div>
                        <div className="review14">
                            <div className="review15">
                                <img src="./Image/24.png" alt="" />
                                <div className="review16">
                                    <p>Anand K</p>
                                    <div className="review17">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <p>1 WEEK AGO</p>
                                    </div>
                                </div>
                            </div>
                            <p>Exceeded my expectations in both the quality and transperency. I regret sticking with main dealers and not coming to outside vendors earlier. Thanks to i car service and their thorough, knowledgeable and customer-focused approach, I have now made a start on work that should have been carried out during the three and a half years in which I have owned the car. I will happily go back to i car service in six months to continue this process.
                            </p>
                        </div>
                        <div className="review14">
                            <div className="review15">
                                <img src="./Image/25.png" alt="" />
                                <div className="review16">
                                    <p>Avinash Abhi</p>
                                    <div className="review17">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <p>4 WEEK AGO</p>
                                    </div>
                                </div>
                            </div>
                            <p>Very much pleased with work . Always makes me happy by looking at this work . Thank you I car service.
                                Service: Upholstery & interior restoration

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />


        </div>
    );
};

export default ProductItem;