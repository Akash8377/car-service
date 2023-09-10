import React, { useState, useEffect } from 'react';
import CustomHeading from '../Pages/CustomerHeading';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../../style/ServiceHeader.css';
import axios from 'axios';

const Periodic = () => {
  const [categories, setCategories] = useState([]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    // Add more settings as needed
  };

  useEffect(() => {
    // Fetch data from your API endpoint
    axios
      .get('https://kv-varlu.vercel.app/api/v1/category/all')
      .then((response) => {
        // Assuming your API response structure matches the example you provided
        const { success, categories } = response.data;
        if (success) {
          setCategories(categories);
        } else {
          console.error('API request failed');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <CustomHeading />

      <div className="ServiceHeader-main">
        <div className="ServiceHeader-main-2">
          <Slider {...settings}>
            {categories.map((category) => (
              <Link
                key={category._id}
                className="ServiceHeader-class-link-main"
                to={`/category/${category.name}`} // Use appropriate route
              >
                {category.name}
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Periodic;
