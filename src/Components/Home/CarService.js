import React from "react";
import { Link } from 'react-router-dom';
import './CarService'
const CarService = () => {
    return (
        <>
            <div className="home1">
                <h2>Car Services Available In Hyderabad</h2>
                <p>Get hassle-free and professional car service, car repair, wheel care services, cashless
                    insurance claim and much more in Hyderabad.
                </p>
                <div className="home2">
                    <div className="home4">
                        <div className="home3">
                            <Link className="decoration-car-services" to="/periodic-services" style={{ textDecoration: 'none' }}>
                                <img src="./Image/35.png" alt="" />
                                <p>Periodic Service</p>
                            </Link>
                        </div>
                        <div className="home3">
                            <Link className="decoration-car-services" to="/batteries" style={{ textDecoration: 'none' }}>
                                <img src="./Image/36.png" alt="" />
                                <p>Batteries</p>
                            </Link>
                        </div>
                        <div className="home3">
                            <Link className="decoration-car-services" to="/services-repair" style={{ textDecoration: 'none' }}>
                                <img src="./Image/4.png" alt="" />
                                <p>AC Service & Repair</p>
                            </Link>
                        </div>
                        <div className="home3">
                            <Link className="decoration-car-services" to="/tyres" style={{ textDecoration: 'none' }}>
                                <img src="./Image/5.png" alt="" />
                                <p>Tyres & Wheel</p>
                            </Link>
                        </div>

                        <div className="home3">
                            <Link className="decoration-car-services" to="/wind-sheild" style={{ textDecoration: 'none' }}>
                                <img src="./Image/37.png" alt="" />
                                <p>Wind Shield & Lights</p>
                            </Link>
                        </div>

                        <div className="home3">
                            <Link className="decoration-car-services" to="/spa-service" style={{ textDecoration: 'none' }}>
                                <img src="./Image/38.png" alt="" />
                                <p>Car Spa & Cleansing</p>
                            </Link>
                        </div>

                        <div className="home3">
                            <Link className="decoration-car-services" to="/detailing-service" style={{ textDecoration: 'none' }}>
                                <img src="./Image/39.png" alt="" />
                                <p>Detailing Service</p>
                            </Link>
                        </div>
                       
                        <div className="home3">
                            <Link className="decoration-car-services" to="/inspection" style={{ textDecoration: 'none' }}>
                                <img src="./Image/40.png" alt="" />
                                <p>Insurance</p>
                            </Link>
                        </div>
                    
                        <div className="home3">
                            <Link className="decoration-car-services" to="/denting-repair" style={{ textDecoration: 'none' }}>
                                <img src="./Image/41.png" alt="" />
                                <p>Denting & Painting</p>
                            </Link>
                        </div>
                      
                        <div className="home3">
                            <Link className="decoration-car-services" to="/services-repair" style={{ textDecoration: 'none' }}>
                                <img src="./Image/42.png" alt="" />
                                <p>Suspension & Fitments</p>
                            </Link>
                        </div>
                        
                        <div className="home3">
                            <Link className="decoration-car-services" to="/services-repair" style={{ textDecoration: 'none' }}>
                                <img src="./Image/43.png" alt="" />
                                <p>Clutch & Body Parts</p>
                            </Link>
                        </div>
                        
                        <div className="home3">
                            <Link className="decoration-car-services" to="/services-repair" style={{ textDecoration: 'none' }}>
                                <img src="./Image/45.png" alt="" />
                                <p>Car Inspection</p>
                            </Link>
                        </div>
                       
                    </div>
                </div>
                <div className="home5">
                    <img src="./Image/6.png" alt="" />
                    <img src="./Image/7.png" alt="" />
                    <img src="./Image/8.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default CarService;
