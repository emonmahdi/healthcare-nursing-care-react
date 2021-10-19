import React from 'react';
import Header from '../Shared/Header/Header';
import aboutImg from './about.jpg';
import a1 from './a1.png'
import a2 from './a2.png'
import a3 from './a3.png'
import a4 from './a4.png'
import a5 from './a5.png'
import a6 from './a6.png'
import './About.css'
import Contact from '../Home/Contact/Contact';

const About = () => {
    return (
        <div>
             <div className="about-header">
                    <img src={aboutImg} className='img-fluid' alt="" />
                    <h2>About Us</h2>
             </div>
             <div className="about-content">
                 <div className="container">
                 <div className="header-title text-center">
                     <h2>Everything you need to <span>support you</span>  </h2>
                     <p>At Curantis, we believe that caring is more than just a job– it’s a way of life.</p>
                 </div>
                 </div>
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-4 col-md-6 col-sm-6">
                             <div className="single-about text-center">
                                 <div className="img">
                                     <img src={a1} className='img-fluid' alt="" />
                                 </div>
                                 <h2>Client Care Access </h2>
                                 <p>Our secure portal provides complete access to your loved one’s care, weekly schedule, assigned caregivers.</p>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-sm-6">
                             <div className="single-about text-center">
                                 <div className="img">
                                     <img src={a2} className='img-fluid' alt="" />
                                 </div>
                                 <h2>Personalized Care Plans </h2>
                                 <p>We identify needs and create solutions that provide the best overall home care for your family member. </p>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-sm-6">
                             <div className="single-about text-center">
                                 <div className="img">
                                     <img src={a3} className='img-fluid' alt="" />
                                 </div>
                                 <h2>Client-Caregiver Matching</h2>
                                 <p>We are committed to finding the best caregiver for your loved one. This helps create the foundation.</p>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-sm-6">
                             <div className="single-about text-center">
                                 <div className="img">
                                     <img src={a4} className='img-fluid' alt="" />
                                 </div>
                                 <h2>100% Satisfaction Guarantee</h2>
                                 <p>We regularly check in to ensure FirstLight safety and quality standards are being met.</p>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-sm-6">
                             <div className="single-about text-center">
                                 <div className="img">
                                     <img src={a5} className='img-fluid' alt="" />
                                 </div>
                                 <h2>24/7 Availability</h2>
                                 <p>We can be reached anytime you need us, 24 hours a day, 7 days a week, 365 days a year.</p>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-sm-6">
                             <div className="single-about text-center">
                                 <div className="img">
                                     <img src={a6} className='img-fluid' alt="" />
                                 </div>
                                 <h2>Extra Benifit</h2>
                                 <p>We can be reached anytime you need us, 24 hours a day, 7 days a week, 365 days a year.</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div> 
        </div> 
    );
};

export default About;