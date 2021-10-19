import React from 'react'; 
import Slider from '../../Slider/Slider';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div> 
            <Slider></Slider>
            <Services></Services> 
            <Team></Team>
            <Contact></Contact>
        </div>
    );
};

export default Home;