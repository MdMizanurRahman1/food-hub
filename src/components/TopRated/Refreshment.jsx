import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

// this is the parts of extra section

const Refreshment = () => {
    return (
        <Container className='my-5'>
            <h3 className='text-center mt-5 text-danger' style={{ fontWeight: 'bold' }}>Savory Refreshments</h3>
            <p className='text-center mb-5 text-muted'>Take a look of our mouthwatering items.</p>
            <Row xs={1} md={2} lg={4} className="g-4">
                <Col>
                    <Card className='border-0'>
                        <Card.Img variant="top" src="tea.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <Card.Body className='bg-danger bg-opacity-10 rounded' style={{ height: '200px' }}>
                            <Card.Title className='text-center text-danger text-opacity-75'>Straberry Ice Tea</Card.Title>
                            <Card.Text className="text-muted text-center" style={{ fontSize: '14px' }}>
                                Strawberry iced tea is a refreshing and delicious drink that's perfect for warmer weather. Our customers are eager to drink this special tea.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Card.Img variant="top" src="chocolate.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <Card.Body className='bg-danger bg-opacity-10 rounded' style={{ height: '200px' }}>
                            <Card.Title className='text-center text-danger text-opacity-75'>Rasberry Cheesecake</Card.Title>
                            <Card.Text className="text-muted text-center" style={{ fontSize: '14px' }}>
                                Raspberry cheesecake is a delightful dessert. Raspberry cheesecake is a perfect dessert for special occasions or at a dinner party.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Card.Img variant="top" src="public/cheesecake.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <Card.Body className='bg-danger bg-opacity-10 rounded' style={{ height: '200px' }}>
                            <Card.Title className='text-center text-danger text-opacity-75'>Chocolate Ice-cream</Card.Title>
                            <Card.Text className="text-muted text-center" style={{ fontSize: '14px' }}>
                                Chocolate ice cream is a classic frozen dessert that's loved by all ages. In hot summer days, this is a timeless dessert that never goes out of style.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Card.Img variant="top" src="../../../public/pancakes.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <Card.Body className='bg-danger bg-opacity-10 rounded' style={{ height: '200px' }}>
                            <Card.Title className='text-center text-danger text-opacity-75'>Caramel Pancake</Card.Title>
                            <Card.Text className="text-muted text-center " style={{ fontSize: '14px' }}>
                                Caramel pancakes are perfect for a special occasion breakfast or brunch, or just as a fun way to switch up your usual pancake routine.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Refreshment;
