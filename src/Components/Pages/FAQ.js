import React, { useState } from "react";
import CustomHeader from './CustomerHeading';
import image29 from '../../image/29.png';
import '../../style/FAQ.css';
import questions from "./Faq.json";
import Footer from '../Footer/Footer'

const FAQ = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const handleQuestionClick = (questionId) => {
    if (openQuestionId === questionId) {
      setOpenQuestionId(null); // Close the currently open question
    } else {
      setOpenQuestionId(questionId); // Open the clicked question
    }
  };

  return (
    <div>
      <CustomHeader />
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
  );
};

export default FAQ;
