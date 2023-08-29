import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const Workshop = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    // Add more settings as needed
  };
  return (
 
    <>
      <div className="home60">
        <h3>Choose the workshop Near You</h3>
        <div className="home70">
          <Slider {...settings}>
            <Link className="link-class-main" to="/">
              Our Services
            </Link>
            <Link className="link-class-main" to="/">
              Curated Custom Service
            </Link>
            <Link className="link-class-main" to="/">
              How Car Service Works?
            </Link>
            <Link className="link-class-main" to="/">
              Rating & Reviews
            </Link>
            <Link className="link-class-main" to="/">
              Price List
            </Link>
            <Link className="link-class-main" to="/">
              Frequently Asked Question
            </Link>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Workshop;