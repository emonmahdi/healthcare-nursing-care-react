import React from 'react'; 
import Slider from '../../Slider/Slider';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div> 
            <Slider></Slider>
            <Services></Services> 
            <Contact></Contact>
        </div>
    );
};

export default Home;