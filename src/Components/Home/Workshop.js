import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Workshop = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // Add more settings as needed
      };
    return (
        <>
            <div className="home6">
                <h3>Choose the workshop Near You</h3>
                <div className="home7">
                    <Slider {...settings}>
                        <img src="./Image/9.png" alt="" className="ide" />
                        <img src="./Image/10.png" alt="" />
                        <img src="./Image/9.png" alt="" />
                        <img src="./Image/10.png" alt="" />
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Workshop;