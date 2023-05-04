import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => {
                console.log(error);
            });
    }

    const getNavLinkClass = (path) => {
        return location.pathname === path ? 'text-primary' : 'text-white';
    }

    return (
        <div className='banner'>
            <Navbar>
                <Container>
                    <Navbar.Brand href='#' className='text-white fs-2'>Thai Food Hubs</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto gap-4'>
                            <Link to='/' className={`text-decoration-none ${getNavLinkClass('/')}`}>
                                Home
                            </Link>
                            <Link to='/blog' className={`text-decoration-none ${getNavLinkClass('/blog')}`}>
                                Blog
                            </Link>
                        </Nav>

                        <Nav className='align-items-center justify-content-center text-white ms-5'>
                            {user && <Image src='/profile.jpg' roundedCircle className='mx-2' style={{ width: '30px', height: '30px' }} />}

                            {user ?
                                <Button onClick={handleLogOut} className='px-4'>Logout</Button> :
                                <Link to='/login'>
                                    <Button className='px-4' >Login</Button>
                                </Link>
                            }
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
