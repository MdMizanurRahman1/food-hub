import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// error handleing page

const ErrorPage = () => {
    return (
        <Card className="mx-auto shadow p-4 my-5 bg-body-tertiary rounded" style={{ maxWidth: '700px', backgroundColor: '#FFC0CB' }}>
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Row className="align-items-center">
                    <Col md={6} className="text-center">
                        <Image
                            src="../../../public/error.jpg"
                            alt="404 Error"
                            fluid
                            className="my-3 rounded"
                        />
                    </Col>
                    <Col md={6} className="text-center">
                        <h1>Oops!</h1>
                        <p>The page you are looking for cannot be found.</p>
                    </Col>
                </Row>
                <Link to="/">
                    <Button className='bg-danger'>Back to Home</Button>
                </Link>
            </Container>
        </Card>
    );
};



export default ErrorPage;