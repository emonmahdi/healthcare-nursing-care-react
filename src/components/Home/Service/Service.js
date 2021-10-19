import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, price} = service
    return (
        <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="single-service bg-light pb-3 ">
                <img src={img} className='img-fluid' alt="" />
                <div className="content text-start p-3 mt-3"> 
                    <h5 className='title'>{name}</h5>
                    <p>{description}</p>
                    <h6>Treatment Charge: {price}</h6>
                </div>
                <Link  to={`/service/${id}`}>
                    <button className='btn service-btn'>View Details</button>
                </Link> 
            </div>
        </div>
    );
};

export default Service;