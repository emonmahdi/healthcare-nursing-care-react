import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; 
import './ServiceDetails.css'
import img1 from './b1.jpg'
import img2 from './b2.jpeg'
import img3 from './b3.jpeg'

const ServiceDetails = () => {
   
    const {serviceId} = useParams(); 

    const [singleDetails, setSingleDetails] = useState([]);
    
    const [getDetails, setGetDetails] = useState({})

    useEffect( () => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setSingleDetails(data))
    }, [])

    useEffect( () => {
      const details = singleDetails.find(td => td.id == serviceId );
      setGetDetails(details);
    }, [singleDetails])
      
    return (
        <div className='container service-details'>
             {/* <h2> id: {serviceId}</h2>
             <h5>Name: {getDetails?.name}</h5>
             <img src={getDetails?.img} className='img-fluid' alt="" />
             <p>{getDetails?.description}</p>
             <h5>{getDetails?.price}</h5> */}
             <div className="row">
                 <div className="col-lg-8">
                     <div className="single-details-services text-start">
                        <div className="title">
                             <h2 className='fw-bold mb-4'>{getDetails?.name}</h2> 
                         </div>
                         <div className="single-details-img shadow rounded">
                             <img src={getDetails?.img} className='img-fluid w-100 rounded-3' alt="" />
                         </div> 
                         <p className='my-4'>{getDetails?.description}</p>
                         <span className='text-primary fw-bold'>Treatment Charge: {getDetails?.price}</span> 
                         <div className="extra-details">
                             <p className='my-3'>​It can be very nerve-wracking when your senior loved one is admitted to a hospital or healthcare facility. And likely, the last thing you’ll be thinking about is what happens when the doctor discharges your loved one.​</p>
                             <h3 className='my-3 fw-bold'>Quality Senior Companionship</h3>
                             <p className='my-4'>Our professional CareGivers act as trusted partners to your aging family members while offering a friendly ear and capable hands. Your loved ones benefit from consistent human interaction, and you enjoy the peace of mind that comes from knowing your family member is safe and cared for.</p>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-4">
                     <div className="single-right-sidebar p-3 shadow rounded mb-3">
                         <input className='form-control' type="text" placeholder='Search Keyword' />
                     </div>
                     <div className="single-right-sidebar text-start p-3 shadow rounded mb-3">
                         <h4 className='fw-bold mb-4'>Recent Services</h4>
                         <div className='d-flex mb-3'>
                             <div className='w-50'>
                                 <img src={img1} className='img-fluid  w-50' alt="" />
                             </div> 
                            <div className='me-5'>
                                <h6 className='fw-bold'>Support</h6>
                                <p>10 Sep 2021</p>
                            </div>
                         </div>
                         <div className='d-flex  mb-1'>
                             <div className='w-50'>
                                 <img src={img1} className='img-fluid  w-50' alt="" />
                             </div> 
                            <div className='me-5 text-start'>
                                <h6 className='fw-bold'>Support</h6>
                                <p>20 Sep 2021</p>
                            </div>
                         </div>
                         <div className='d-flex '>
                             <div className='w-50'>
                                 <img src={img1} className='img-fluid   w-50' alt="" />
                             </div> 
                            <div className='me-5'>
                                <h6 className='fw-bold'>Support</h6>
                                <p>16 Sep 2021</p>
                            </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default ServiceDetails;