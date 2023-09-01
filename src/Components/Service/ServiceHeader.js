import React from 'react'
import CustomHeading from '../Pages/CustomerHeading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../../style/ServiceHeader.css';

const Periodic = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        // Add more settings as needed
      };
  return (
    <div>
        <CustomHeading/>

        <div className="ServiceHeader-main">
        <div className="ServiceHeader-main-2">
          <Slider {...settings}>
            <Link className="ServiceHeader-class-link-main" to="/">
              Our Services
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
              Curated Custom Service
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
              How Car Service Works?
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
              Rating & Reviews
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
              Price List
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
              Frequently Asked Question
            </Link>
          </Slider>
        </div>
      </div>

    </div>
  )
}

export default Periodic