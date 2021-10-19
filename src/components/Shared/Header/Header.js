import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';  
import { Link } from 'react-router-dom';  
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
const element = <FontAwesomeIcon icon={ faUserNurse} />

const Header = () => {
    const {user, email, logOut} = useAuth();
    return (
        <>
        <Navbar bg="info" variant="light" sticky="top" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand to="#home"> <span className='text-dark'>{element}</span> Nursing <span className='fw-bold text-dark'>Care</span> </Navbar.Brand>
            
            <Navbar.Toggle /> 
            
            <Navbar.Collapse className="justify-content-end">
                <Nav className="">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    {user?.email?
                    <Button onClick={logOut} variant='light'>Logout</Button>: 
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                </Nav>
                <Navbar.Text>
                    
                    Signed in as:
                     <a href="#login" className='text-danger'>
                     {
                         user.displayName? <span> {user.displayName} </span>:
                         <span>{user.email}</span>
                     }
                    {/* <img  src={user.photoURL} className='login-img' alt="User" /> */}
                    </a>
                </Navbar.Text>
                
            </Navbar.Collapse>
            
            </Container>
        </Navbar>
        {/* slider component */}
        
        </>
    );
};

export default Header;