import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; 

const ServiceDetails = () => {
    const {serviceId} = useParams()
    // const [services, setServices] = useState([]);
    // useEffect( () => {
    //     const url =  ``
    //     console.log(url)
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    console.log(serviceId)
    return (
        <div>
            <h2>This is Service Details Page {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;