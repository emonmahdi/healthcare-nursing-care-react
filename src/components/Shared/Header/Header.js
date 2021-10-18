import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';  
const element = <FontAwesomeIcon icon={ faUserNurse} />

const Header = () => {
    return (
        <>
        <Navbar bg="info" variant="light" sticky="top" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand to="#home"> <span className='text-dark'>{element}</span> Nursing Care</Navbar.Brand>
            
            <Navbar.Toggle />
            
            <Navbar.Collapse className="justify-content-end">
                <Nav className="">
                    <Nav.Link to="/home">Home</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                
            </Navbar.Collapse>
            
            </Container>
        </Navbar>
        {/* slider component */}
        
        </>
    );
};

export default Header;