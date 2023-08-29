import React from "react";

const CustomService = () => {
  const data = [
    {
      image: "./Image/12.png",
      title: "Batteries",
    },
    {
      image: "./Image/11.png",
      title: "AC Parts",
    },
    {
      image: "./Image/13.png",
      title: "Brakes",
    },
    {
        image:"./Image/14.png",
        title:"Clutch"
    },
    {
        image:"./Image/16.png",
        title:"Go connect 2.0"
    },
    {
        image: "./Image/26.png",
        title: "Lights",
      },
      {
        image: "./Image/27.png",
        title: "Glasses",
      },
      {
        image: "./Image/28.png",
        title: "Car Detailing",
      },
      {
          image:"./Image/29.png",
          title:"Tyres"
      },
      {
          image:"./Image/30.png",
          title:"Car Spa"
      },
      {
        image: "./Image/31.png",
        title: "Steering",
      },
      {
        image: "./Image/32.png",
        title: "Suspension",
      },
      {
        image: "./Image/33.png",
        title: "Body Parts",
      },
      {
          image:"./Image/34.png",
          title:"Side Mirror"
      }

  ];
  return (
    <>
      <div className="home8">
        <h3>Curated Custom Services</h3>
        <div className="home9">
          {data?.map((ele, i) => (
            <>
              <div className="home10">
                <img src={ele?.image} alt="" />
                <p>{ele?.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomService;
