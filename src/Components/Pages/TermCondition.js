import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomHeader from './CustomerHeading';
import '../../style/TermCondition.css';
import Footer from '../Footer/Footer';

const TermCondition = () => {
    const [terms, setTerms] = useState('');

    // Function to fetch terms from the API
    const fetchTerms = async () => {
        try {
            const response = await axios.get('https://kv-varlu.vercel.app/api/v1/terms');
            setTerms(response.data.terms);
        } catch (error) {
            console.error('Error fetching terms:', error);
        }
    };


   

    useEffect(() => {

        fetchTerms();
    }, []);

    return (
        <div>
            <CustomHeader />
            <div className='termCondition-main'>
                <h2 className='termcondition-heading-1'>Terms & Conditions</h2>

                <p className='termcondition-paragraph-1'>{terms.terms}</p>
                {/* ... rest of your existing code ... */}
            </div>
            <Footer />
        </div>
    );
};

export default TermCondition;
