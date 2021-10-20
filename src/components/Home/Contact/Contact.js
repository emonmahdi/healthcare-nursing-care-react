import React from 'react';
import './Contact.css'
import img from './c2.png'
const Contact = () => {
    return (
        <div id='contact' className='contact-section'>
            <div className="container ">
                <div className="section-title text-center">
                    <h2>Contact </h2>
                </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <form className='w-75 mx-auto'>
                                <input className='form-control mb-2' type="text" placeholder='Name' />
                                <input className='form-control mb-2' type="email" placeholder='Name' />
                                <textarea className='form-control mb-3' ></textarea>
                                <input className='btn btn-warning' type="submit" value='Submit' />
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-area mt-4 text-light">
                                <img src={img} className='img-fluid' alt="" />
                                <h3>Call Center</h3>
                                <p>24/7 Support 
                                <br />    
                                 +(321) 721-350-9090</p>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default Contact;