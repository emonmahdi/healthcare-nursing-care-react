import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const {error,handleRegistration, handleEmailChange, handlePasswordChange} = useFirebase()
    return (
        <div className='mb-5'>
            <h2 className='text-primary'>Please Registration</h2>
           <form onSubmit={handleRegistration}>
           <div className='w-25 p-3 mx-auto border mt-4 bg-secondary rounded'>
                <input onBlur={handleEmailChange} className='form-control mb-2' type="email" required placeholder='Email' />
                <input onBlur={handlePasswordChange} className='form-control mb-4' type="password" required placeholder='Password' />
                <h5 className='bg-light  text-danger'>{error}</h5>
                <button className='btn btn-primary me-3'>Sign In</button> 
                <Link to='/login' className='btn btn-warning ms-2'>Login</Link>
            </div>
           </form>
        </div>
    );
};

export default Register;