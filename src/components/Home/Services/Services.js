import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] =  useState([]);

    useEffect( () => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='py-5'>
             <h2 className='mb-5 fw-bold'>Our <span className='text-warning'>Services</span> </h2>
             <div className="container">
                <div className="row">
                    {
                        services.map(service => <Service
                        key={service.id}
                        service={service}
                        ></Service> )
                    }
                </div>
             </div>
        </div>
    );
};

export default Services;