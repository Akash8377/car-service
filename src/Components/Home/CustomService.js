import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const CustomService = () => {

  const customServiceStyle = {
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "22px",
    letterSpacing: "0.2245868295431137px",
    textAlign: "center",
    textDecoration: "none", // Remove text decoration
    color:"black"
  };

  const data = [
    {
      image: "./Image/12.png",
      title: "Batteries",
      link: "/batteries",
    },
    {
      image: "./Image/11.png",
      title: "AC Parts",
      link: "/periodic-services",
    },
    {
      image: "./Image/13.png",
      title: "Brakes",
      link: "/services-repair",
    },
    {
      image: "./Image/14.png",
      title: "Clutch",
      link: "/services-repair",
    },
    {
      image: "./Image/16.png",
      title: "Go connect 2.0",
      
    },
    {
      image: "./Image/26.png",
      title: "Lights",
     
    },
    {
      image: "./Image/27.png",
      title: "Glasses",
      link: "/wind-sheild",
    },
    {
      image: "./Image/28.png",
      title: "Car Detailing",
      link: "/detailing-service",
    },
    {
      image: "./Image/29.png",
      title: "Tyres",
      link: "/tyres",
    },
    {
      image: "./Image/30.png",
      title: "Car Spa",
      link: "/spa-service",
    },
    {
      image: "./Image/31.png",
      title: "Steering",
      link: "/denting-repair",
    },
    {
      image: "./Image/32.png",
      title: "Suspension",
      link: "/services-repair",
    },
    {
      image: "./Image/33.png",
      title: "Body Parts",
      link: "/services-repair",
    },
    {
      image: "./Image/34.png",
      title: "Side Mirror",
      link: "/periodic-services",
    },
  ];

  return (
    <div className="home8">
      <h3>Curated Custom Services</h3>
      <div className="home9">
        {data?.map((ele, i) => (
          <Link to={ele.link} key={i} style={customServiceStyle}>
            <div className="home10">
              <img src={ele.image} alt={ele.title} />
              <p>{ele.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomService;
