import React from 'react';
import './Team.css'
import t1 from './t1.jpg'
import t2 from './t2.jpeg'
import t3 from './t3.jpg'


const Team = () => {
    return (
        <div>
            <div className="container">
                <div className="section-title">
                <div className="header-title text-center">
                     <h2>Amazing people <span>in our team</span>  </h2>
                     <p>The team is available 24/7 to address any client or family members’ needs or concerns for your total peace of mind.</p>
                 </div>
                 <div className="row">
                     <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-member">
                            <img src={t1} className='img-fluid' alt="" />
                            <h3 className='my-3 fw-bold'>Joel Mills</h3>
                            <p> Home Nurse </p>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-member">
                            <img src={t2} className='img-fluid' alt="" />
                            <h3 className='my-3 fw-bold'>Andrew Chamber</h3>
                            <p>Health Mentor </p>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-member">
                            <img src={t3} className='img-fluid' alt="" />
                            <h3 className='my-3 fw-bold'> Abbie Ferguson </h3>
                            <p> Health Expert</p> 
                        </div>
                     </div>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Team;