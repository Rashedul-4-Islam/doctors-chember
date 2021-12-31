import React from 'react';
// import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppoinmentBanner></AppoinmentBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;