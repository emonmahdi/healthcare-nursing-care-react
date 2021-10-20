import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser } from '@fortawesome/free-solid-svg-icons';  
import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';
 
 
const element2 = <FontAwesomeIcon icon={ faUser} />

const Login = () => {
    const {user, signInUsingGoogle} = useFirebase();  
    const {handleLogin,error,handleRegistration, handleEmailChange, handlePasswordChange, handleNameChange} = useAuth(); 
    return (
        <div>
            <h2 className='mt-2'>{element2} Login </h2>
            <div className='w-25 login-reg mb-5 p-3 mx-auto border mt-4 bg-secondary rounded'>
                <input onBlur={handleEmailChange} className='form-control mb-2' type="email" placeholder='Email' />
                <input onBlur={handlePasswordChange} className='form-control mb-4' type="password" placeholder='Password' />
                <button onClick={handleLogin} className='btn btn-primary'>Login</button>
                <br />
                <br />
                <p>
                   <span className='text-light me-2'>New User Nursing Care</span> <br />
                    <Link to="/register" className='text-warning'>Create a new Account  
                    </Link>
                </p>
               <span className='text-light '>------------------OR------------------</span>
                <br />
                <button onClick={signInUsingGoogle} className='btn btn-warning mt-3'>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;