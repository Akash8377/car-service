import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomHeader from './CustomerHeading';
import '../../style/TermCondition.css';
import Footer from '../Footer/Footer';

const Privacy = () => {
    const [privacy, setPrivacy] = useState('');

    // Function to fetch terms from the API
    const fetchPrivacy = async () => {
        try {
            const response = await axios.get('https://kv-varlu.vercel.app//api/v1/privacy');
            setPrivacy(response.data.privacy);
        console.log(response);
        } catch (error) {
            console.error('Error fetching Privacy:', error);
        }
    };


   

    useEffect(() => {

        fetchPrivacy();
    }, []);

    return (
        <div>
            <CustomHeader />
            <div className='termCondition-main'>
                <h2 className='termcondition-heading-1'>Privacy Policy</h2>

                <p className='termcondition-paragraph-1'>{privacy.privacy}</p>
                {/* ... rest of your existing code ... */}
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
