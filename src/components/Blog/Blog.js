import React from 'react';
import './Blog.css'
import b1 from './b1.jpg'
import b2 from './b2.jpeg'
import b3 from './b3.jpeg'
import aboutImg from '../About/about.jpg'
const Blog = () => {
    return (
        <div>
             <div className="about-header">
                    <img src={aboutImg} className='img-fluid' alt="" />
                    <h2>Our Blog</h2>
             </div>
            <div className="container blog-content">
                <div className="section-title">
                    <h2>Our <span>Blogs</span>  </h2>
                    <p>My greatest ambition is to save great moments </p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-blog text-start">
                            <div className="blog-img">
                                <img src={b1} className='img-fluid' alt="" /> 
                            </div>
                            <div className="content p-2">
                                <h5 className='my-3 fw-bold'>5 ways to regain your energy after caregiver burnout</h5>
                                <p>Taking care of yourself is at the end of the list – and it stays there. You may feel run down, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis cum officia quam maiores, corrupti aperiam maxime earum delectus dolorem?</p> 
                                <button className='btn btn-warning'>Learn More</button>
                            </div> 
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-blog text-start">
                            <div className="blog-img">
                                <img src={b2} className='img-fluid' alt="" /> 
                            </div>
                            <div className="content p-2">
                                <h5 className='my-3 fw-bold'>Life has taught alli espinosa how to care</h5>
                                <p>Most people don’t know that I am really good with a bow and arrow. They don’t picture me toting Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis cum officia quam maiores, corrupti aperiam maxime earum delectus dolorem?</p> 
                                <button className='btn btn-warning'>Learn More</button>
                            </div> 
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-blog text-start">
                            <div className="blog-img">
                                <img src={b3} className='img-fluid' alt="" /> 
                            </div> 
                            <div className="content p-2">
                                <h5 className='my-3 fw-bold'>Most people don’t know that I am really good with a bow and arrow. They don’t picture me toting</h5>
                                <p>When thinking of dementia, most of us think about memory but this is only one of six ways. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis cum officia quam maiores </p> 
                                <button className='btn btn-warning'>Learn More</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;