

import React, { useState, useEffect } from "react";
import CustomHeader from './CustomerHeading';
import image29 from '../../image/29.png';
import '../../style/FAQ.css';
import Footer from '../Footer/Footer';

const FAQ = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch FAQ data
  const fetchFAQData = async () => {
    try {
      const response = await fetch('https://kv-varlu.vercel.app/api/v1/faq');
      if (response.ok) {
        const data = await response.json();
        setFaqData(data.faqs);
      } else {
        throw new Error('Failed to fetch FAQ data');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFAQData();
  }, []);

  // Handle question click
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
          {loading ? (
            <p>Loading FAQ data...</p>
          ) : (
            Array.isArray(faqData) && faqData.length > 0 ? (
              faqData.map((faq) => (
                <div key={faq._id} className="entity">
                  <div
                    className="question"
                    onClick={() => handleQuestionClick(faq._id)}
                  >
                    {faq.question}
                    {openQuestionId === faq._id ? <h3>^</h3> : <h3>+</h3>}
                  </div>
                  {openQuestionId === faq._id && <p className="text">{faq.answer}</p>}
                </div>
              ))
            ) : (
              <p>No FAQ data available.</p>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
