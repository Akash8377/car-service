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
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        // Add more settings as needed
      };
  return (
    <div>
        <CustomHeading/>

        <div className="ServiceHeader-main">
        <div className="ServiceHeader-main-2">
          <Slider {...settings}>
            <Link className="ServiceHeader-class-link-main" to="/periodic-services">
              Periodic Service
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
            AC Service & Repair
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
            Batteries
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
            Tyres & Wheel
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
            Denting & Painting
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
              Detailing Service
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
            Car Spa & Cleansing
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
            Car Inspection
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
            Wind Shield & Lights
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
            Suspension & Fitments
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
            Clutch & Body Parts
            </Link>
            <Link className="ServiceHeader-class-link-main" to="/">
            Periodic Service
            </Link>
          </Slider>
        </div>
      </div>

    </div>
  )
}

export default Periodic