import React from 'react';
import CustomHeader from './CustomerHeading';
import image29 from '../../image/29.png';
import '../../style/FAQ.css';

const FAQ = () => {
    
  return (
    <div>
        <CustomHeader/>
        <div className='heading-faq'>
            
            <h2>Frequently Asked Questions</h2>
            <img src={image29} alt="" height="50" width="50" />
        </div>
    </div>
  )
}

export default FAQ