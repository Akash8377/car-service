import React from "react";
import TopBanner from "./TopBanner";
import CarService from "./CarService";
import Workshop from "./Workshop";
import CustomService from "./CustomService";
import ServiceWork from "./ServiceWork";
import Review from "./Review";
import Footer from "../Footer/Footer";
import DraggableSlider from './DraggableSlider'

const Home = ()=>{
    return (
        <>
            <TopBanner />
            <DraggableSlider/>
            <CarService />
            <CustomService />
            <Workshop />
            <ServiceWork />
            <Review />
            <Footer />
        </>
    )
}

export default Home;