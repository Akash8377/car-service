import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import CustomHeader from './CustomerHeading';
import image30 from '../../image/30.png';
import image31 from '../../image/31.png';
import image32 from '../../image/32.png';
import image33 from '../../image/33.png';
import '../../style/ContactUs.css';
import image34 from '../../image/34.png';
import image35 from '../../image/35.png';
import image36 from '../../image/36.png';
import Footer from '../Footer/Footer';

const ContactUs = () => {
    // Define a state variable to store the user's message
    const [message, setMessage] = useState('');

    // Function to handle form submission and send a POST request
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the API endpoint
            await axios.post('https://kv-varlu.vercel.app/api/v1/contact', {
                message: message,
            });

            // Clear the message field after successful submission
            setMessage('');

            // Optionally, you can display a success message or perform other actions
            console.log('Message sent successfully');
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <CustomHeader />

            <div className='heading-faq'>
                <h2>Contact us</h2>
                <img src={image30} alt="" height="50" width="50" />
            </div>

            <div className='contact-us-2'>
                <div className='contact-us-data'>
                    <h3>Need any Assistance? Leave Us a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className='custom-textarea'
                            placeholder='Write your message here......'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                borderRadius: '5px',
                                display: 'block',
                                margin: '0 auto',
                                textAlign: 'center',
                                padding: '10px 20px',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div>
                    <h3 className='information-contact-us'>More Information</h3>
                    <div className='contact-us-3'>
                        <img className='' src={image31} alt='' width="30px" height="30px" />
                        <h4>info@carservice.in</h4>
                    </div>
                    <div className='contact-us-3'>
                        <img className='' src={image32} alt='' width="30px" height="30px" />
                        <h4>9388893888</h4>
                    </div>
                    <div className='contact-us-3'>
                        <img className='' src={image33} alt='' width="30px" height="30px" />
                        <h4>Monday - Saturday</h4>
                    </div>
                </div>
            </div>
            <div className='contact-us-4'>
                <h2>Our Office Address</h2>
                <div className='contact-us-5'>
                    <img src={image34} alt="" />
                    <div>
                        <div className='contact-us-6'>
                            <img src={image35} alt="" width="30px" height="30px" />
                            <h4>DLF STREET, NEW AVENUE<br />HYDERABAD, INDIA</h4>
                        </div>
                        <div>
                            <button className="image-button">
                                <img src={image36} alt="" className="image" width="20px" height="20px" />
                                <span className="text-contact-us">LOCATE US ON GOOGLE MAPS</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;
