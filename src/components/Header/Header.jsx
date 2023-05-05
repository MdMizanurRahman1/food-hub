import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

// banner page used for all

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
        return location.pathname === path ? 'text-primary' : 'text-light';
    }

    return (
        <div className='banner'>
            <Navbar expand="sm">
                <Container fluid>
                    <Navbar.Brand href='#' className='text-white fs-2'>Thai Food Hubs</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto gap-4'>
                            <Link to='/' className={`text-decoration-none  ${getNavLinkClass('/')}`}>
                                Home
                            </Link>
                            <Link to='/blog' className={`text-decoration-none mx-3 ${getNavLinkClass('/blog')}`}>
                                Blog
                            </Link>
                        </Nav>

                        <Nav>
                            {user && <img className='rounded-circle mx-3' width={'30px'} height={'30px'} src={user?.photoURL} alt="" />}

                            {user ? <Button onClick={handleLogOut} variant='warning'>LogOut</Button> : <Link to='/login'><Button variant='warning'>LogIn</Button></Link>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <div className="row mt-4 pt-4">
                    <div className="col-sm-12 col-md-6 text-white">
                        <h3 className='fw-semibold fs-5'>WIDE OPTIONS OF CHOICE</h3>
                        <h1 className='fw-bold fs-5'>DELICIOUS RECEPIES FOOD</h1>
                        <p className='fs-6'>Food for thought, fuel for life"? It emphasizes the importance of not only enjoying delicious food, but also recognizing its role in nourishing and energizing our bodies and minds.</p>
                        <Button className='btn btn-danger fs-6'>CHECK OUR MENU</Button>
                    </div>

                </div>
            </Container>


        </div>
    );
};

export default Header;
