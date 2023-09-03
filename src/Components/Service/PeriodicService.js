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
import image53 from '../../image/53.png';
import image54 from '../../image/54.png';
import image55 from '../../image/54.png';
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
                <h2 className='periodic-service-main-heading'>Scheduled Package</h2>
                <p className='periodic-service-main-paragraph'>
                    <img src={image42} alt="" height="20px" width="20px" />4 Hrs Taken</p>

                <div className='inner-service-main'>
                    <img
                        src={image41}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Mini Service</h3>
                        <h5 className='periodic-text-1'> • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
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
                        src={image44}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Medium Services</h3>
                        <h5 className='periodic-text-1'> • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
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
                        src={image45}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Major Service</h3>
                        <h5 className='periodic-text-1'> • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
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
                <h2 className='periodic-service-main-heading'>Brake Maintenance</h2>
                <p className='periodic-service-main-paragraph'>
                    <img src={image42} alt="" height="20px" width="20px" />4 Hrs Taken</p>

                <div className='inner-service-main'>
                    <img
                        src={image46}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Front Brakes Pad</h3>
                        <h5 className='periodic-text-1'>  • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
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
                        src={image47}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Rear Brakes Shoes</h3>
                        <h5 className='periodic-text-1'> • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
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
                        src={image51}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Front Brake Discs</h3>
                        <h5 className='periodic-text-1'> • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
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
                        src={image48}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Caliper Pin Replacement</h3>
                        <h5 className='periodic-text-1'> • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
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
                        src={image49}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Disc Turning</h3>
                        <h5 className='periodic-text-1'> • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
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
                        src={image50}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Brake Drums Turning</h3>
                        <h5 className='periodic-text-1'> • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
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
                        src={image49}
                        alt={title}
                        width="192px"
                        height="190px"
                        style={{ borderRadius: '30px' }}
                    />
                    <div>
                        <h3>Disc Turning</h3>
                        <h5 className='periodic-text-1'> • 2000 kms or 2 Month Warranty • Every 6000 kms or 3 Months (Recommended)</h5>
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
                <img src={image53} alt=""/>
                <img src={image54} alt=""/>
                <img src={image55} alt=""/>
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
      <Footer/>


        </div>
    );
};

export default ProductItem;