import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineLike } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';


const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { chef_name, chef_picture, likes, number_of_recipes, years_of_experience, description, recipes } = chefDetails;
    return (
        <div className='my-5 '>
            <Container >
                <Col className="mb-4">
                    <Card className="h-25 shadow-lg rounded chef-card w-50 mx-auto" style={{ backgroundColor: '#ffe5e5' }}>
                        <Card.Img
                            variant="top"
                            src={chef_picture}
                            className="rounded-top img-transition"
                            style={{
                                transition: "transform .2s ease-in-out", height: '50vh'
                            }}
                            onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                        />
                        <Card.Body
                            className="d-flex flex-column justify-content-between card-transition"
                        >
                            <Card.Title className="text-center mb-0">{chef_name}</Card.Title>
                            <div className='d-flex gap-4 text-center mx-auto mt-2'>
                                <Card.Text >
                                    <small className="text-muted">Years of experience: {years_of_experience}</small>
                                </Card.Text>
                                <Card.Text >
                                    <small className="text-muted">Number of recipes: {number_of_recipes}</small>
                                </Card.Text>
                                <Card.Text >
                                    <AiOutlineLike size={20} className="text-danger" /> <span className="text-danger">{likes}</span>
                                </Card.Text>
                            </div>
                            <div>
                                <Card.Text className="text-center mb-2 fw-bold">
                                    Bio: <small className="text-muted">{description}</small>
                                </Card.Text>
                            </div>
                            <Button
                                variant="danger"
                                className="mt-3 w-100 d-flex align-items-center justify-content-center button-transition"
                                style={{
                                    transition: "opacity .2s ease-in-out",
                                    opacity: 1,
                                }}
                                onMouseOver={(e) => e.target.style.opacity = 1}
                                onMouseOut={(e) => e.target.style.opacity = 0.8}
                            >
                                <Link to='/'><span className='text-white'>Return Home</span></Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>

            <Container>
                <Row xs={1} md={2} lg={3} className="g-4 mx-auto">
                    {recipes.map(recipe => <Recipe
                        key={recipe._id}
                        recipe={recipe}
                    ></Recipe>)}
                </Row>
            </Container>


        </div>
    );
};

export default ChefDetails;