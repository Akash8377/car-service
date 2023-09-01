import React, { useState } from "react";
import CustomHeader from './CustomerHeading';
import Footer from '../Footer/Footer'
import '../../style/Offer.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image37 from '../../image/37.png';
import image38 from '../../image/38.png';
import image29 from '../../image/29.png';
import questions from "./Faq.json";

const Offer = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const handleQuestionClick = (questionId) => {
    if (openQuestionId === questionId) {
      setOpenQuestionId(null); // Close the currently open question
    } else {
      setOpenQuestionId(questionId); // Open the clicked question
    }
  };

    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        // Add more settings as needed
      };
  return (
    <div className='offer-main'>
        <CustomHeader/>

        <div>
            <h2 className='offer-heading-1'>Claim Our Current Offers! HURRY!!</h2>
        </div>

        <div className="offer-1">
          <Slider {...settings}>
            <div><img src={image37} alt=""/></div>
            <div><img src={image38} alt=""/></div>
            <div><img src={image37} alt=""/></div>
            <div><img src={image38} alt=""/></div>
          </Slider>
        </div>
        
        <div className='heading-faq'>
        <h2>Frequently Asked Questions</h2>
        <img src={image29} alt="" height="50" width="50" />
      </div>
      <div className="container">
        <div className="inner">
          {questions.map((question) => (
            <div key={question.id} className="entity">
              <div
                className="question"
                onClick={() => handleQuestionClick(question.id)}
              >
                {question.question}
                {openQuestionId === question.id ? <h3>^</h3> : <h3>+</h3>}
              </div>
              {openQuestionId === question.id && <p className="text">{question.answer}</p>}
            </div>
          ))}
         
        </div>
      </div>

        <Footer/>
    </div>
  )
}

export default Offer