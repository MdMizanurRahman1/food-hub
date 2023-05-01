import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='bg-dark text-white py-3 fixed-bottom fw-lighter'>
            <Container>
                <Row >
                    <Col md={4} className='mb-3 mb-md-0'>
                        <h4>About Us</h4>
                        <p>
                            Our menu features a range of mouth-watering options, from classic favorites to innovative creations, all served in a warm and inviting atmosphere that's perfect for any occasion.
                        </p>
                    </Col>
                    <Col md={4} className='mb-3 mb-md-0 text-center '>
                        <h4>Contact Us</h4>
                        <p>
                            123 Main St. <br />
                            New York, NY 10001 <br />
                            (123) 456-7890 <br />
                            info@example.com
                        </p>
                    </Col>
                    <Col md={4} className='text-end'>
                        <h4>Follow Us</h4>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <a href='#'>
                                    <AiFillGithub size={30} className='text-white' />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='#'>
                                    <AiFillTwitterSquare size={30} className='text-white' />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='#'>
                                    <AiFillInstagram size={30} className='text-white' />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
