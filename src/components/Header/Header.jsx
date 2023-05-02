import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='banner'>
            <Navbar>
                <Container>
                    <Navbar.Brand href='#' className='text-primary fs-2'>Thai Food Hubs</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto gap-4'>
                            <Link to='/' className='text-decoration-none '>
                                Home
                            </Link>
                            <Link to='/blog' className='text-decoration-none '>
                                Blog
                            </Link>
                        </Nav>
                        <Nav className='ms-5 '>
                            {isLoggedIn ? (
                                <Image src='/profile.jpg' roundedCircle className='mx-2' style={{ width: '30px', height: '30px' }} />
                            ) : (
                                <Nav.Link href='#' onClick={() => setIsLoggedIn(true)} className='text-primary'>
                                    Login
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <div className="row mt-4 pt-4  ">
                    <div className="col-sm-12 col-md-6 text-white">
                        <h3 className='fw-semibold'>WIDE OPTIONS OF CHOICE</h3>
                        <h1 className='fw-bold'>DELICIOUS RECEPIES FOOD</h1>
                        <p>Food for thought, fuel for life"? It emphasizes the importance of not only enjoying delicious food, but also recognizing its role in nourishing and energizing our bodies and minds.</p>
                        <Button className='btn btn-danger'>CHECK OUR MENU</Button>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
