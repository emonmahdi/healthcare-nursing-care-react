import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, price} = service
    return (
        <div className='col-lg-4'>
            <div className="single-service bg-light pb-3">
                <img src={img} className='img-fluid' alt="" />
                <h6>Price: {price}</h6>
                <h2>{name}</h2>
                <p>{description}</p>
                <Link to={`/service/${id}`}>
                    <button className='btn btn-info'>View Details</button>
                </Link>
               
            </div>
        </div>
    );
};

export default Service;