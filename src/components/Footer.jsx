import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

// footer used for all

const Footer = () => {
    return (
        <footer className='bg-dark text-white py-3 fw-lighter '>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4} className='mb-3 text-center'>
                        <h4>About Us</h4>
                        <p>
                            Our menu features a range of mouth-watering options, from classic favorites to innovative creations, all served in a warm and inviting atmosphere that's perfect for any occasion.
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='mb-3 text-center'>
                        <h4>Contact Us</h4>
                        <p>
                            233 S Sathorn Rd, Khwaeng Yan Nawa, <br />
                            Sathon, Bangkok 10120, Thailand<br />
                            (123) 456-7890 <br />
                            info@example.com
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='text-center'>
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
