import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="foot1">
        <div className="foot2">
          <div className="foot3">
            <h4>ABOUT US</h4>
            <div className="foot4">
              <p><Link className="footer-main-link" to="/faq">FAQ's</Link></p>
              <p><Link className="footer-main-link" to="/contactUs">Contact Us</Link></p>
              <p><Link className="footer-main-link" to="/">Careers</Link></p>
              <p><Link className="footer-main-link" to="/term-condition">Terms & Conditions</Link></p>
              <p><Link className="footer-main-link" to="/privacy-policy">Privacy Policy</Link></p>
              <p>Car Service Patners</p>
              <p>Workshop Locator</p>
              <p><Link className="footer-main-link" to="/offer">Offers</Link></p>
              <p><Link className="footer-main-link" to="/reviews">Reviews</Link></p>
              <p>Directory</p>
            </div>
          </div>
          <div className="foot3">
            <h4>OUR SERVICES</h4>
            <div className="foot4">
            <p><Link className="footer-main-link" to="/periodic-services"> Scheduled Services</Link></p>
            <p><Link className="footer-main-link" to="/services-repair">AC Services</Link></p>
            <p><Link className="footer-main-link" to="/spa-service">Cleaning & Detailing</Link></p>
            <p><Link className="footer-main-link" to="/">Lights & Fitments</Link></p>
            <p><Link className="footer-main-link" to="/denting-repair">Denting Painting</Link></p>
            <p><Link className="footer-main-link" to="/">Insurance Services</Link></p>
            <p><Link className="footer-main-link" to="/">Custom Repair</Link></p>
            <p><Link className="footer-main-link" to="/batteries">Batteries</Link></p>
            <p><Link className="footer-main-link" to="/tyres">Tyres</Link></p>
            <p><Link className="footer-main-link" to="/detailing-service">Detailing Services</Link></p>
            <p><Link className="footer-main-link" to="/wind-sheild">Windshields & Glass</Link></p>
            </div>
          </div>
          <div className="foot3">
            <h4>LUXURY BRANDS</h4>
            <div className="foot4">
            <p>Mercedes</p>
              <p>BMW</p>
              <p>Audi</p>
              <p>Volvo</p>
              <p>Mitsubishi</p>
              <p>Jaguar</p>
              <p>Porsche</p>
              <p>Rolls Royce</p>
              <p>Ferrari</p>
              <p>Land Rover</p>
            </div>
          </div>
          <div className="foot3">
            <h4>POPULAR BRANDS</h4>
            <div className="foot4">
              <p>Maruti Suzuki</p>
              <p>Hyundai</p>
              <p>Honda</p>
              <p>Toyota</p>
              <p>Tata</p>
              <p>Mahindra</p>
              <p>Chevrolet</p>
              <p>Fiat</p>
              <p>Renault</p>
              <p>Kia</p>
              <p>Skoda</p>
              <p>Volkswagen</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
