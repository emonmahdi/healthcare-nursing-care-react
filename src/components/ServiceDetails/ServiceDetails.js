import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; 
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const {serviceId} = useParams();
    // console.log(serviceId)

    const [service, setService] = useState([]);

    useEffect( () => { 
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    
    const details = service?.filter(td => td.id === serviceId)  
    console.log(details)
    return (
        <div className='container service-details'>
            <img src={details[0]} alt="" />
            <h2>Name: {details.name}</h2>
            <h2>This is Service Details Page {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;