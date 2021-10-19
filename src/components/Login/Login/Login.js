import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {user, signInUsingGoogle} = useFirebase()
    return (
        <div className='mb-5'>
            <div className='w-25 p-3 mx-auto border mt-4 bg-secondary rounded'>
                <input className='form-control mb-2' type="email" placeholder='Email' />
                <input className='form-control mb-4' type="password" placeholder='Password' />
                <button className='btn btn-primary'>Login</button>
                <br />
                <Link to="/register" className='text-light '>Create a new Account 
                    <button className='btn btn-primary ms-2'>Register</button>
                 </Link>
                <br />
                <button onClick={signInUsingGoogle} className='btn btn-warning mt-3'>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;