import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
            <Container>
                <Navbar.Brand href='#' style={{ fontSize: '24px' }}>Thai Food Hubs</Navbar.Brand>
                <img src="/public/logo.jpg" alt="" style={{ width: '70px', height: '30px', borderRadius: '5px' }} />
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto gap-4'>
                        <Link to='/' className='text-decoration-none text-white'>Home</Link>
                        <Link to='/blog' className='text-decoration-none text-white'>Blog</Link>
                    </Nav>
                    <Nav className='ms-5'>
                        {isLoggedIn ? (
                            <Image src='/profile.jpg' roundedCircle className='mx-2' style={{ width: '30px', height: '30px' }} />
                        ) : (
                            <Nav.Link href='#' onClick={() => setIsLoggedIn(true)}>
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;