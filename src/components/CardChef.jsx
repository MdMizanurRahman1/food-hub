import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { AiOutlineLike, AiOutlineArrowRight } from 'react-icons/ai';

const CardChef = ({ chef }) => {
    const { chef_name, chef_picture, likes, number_of_recipes, years_of_experience } = chef;
    return (
        <>
            <Col md={4} className="mb-4">
                <Card className="h-100 shadow-lg rounded chef-card" style={{ backgroundColor: '#ffe5e5' }}>
                    <Card.Img
                        variant="top"
                        src={chef_picture}
                        className="rounded-top img-transition"
                        style={{
                            transition: "transform .2s ease-in-out",
                        }}
                        onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                    />
                    <Card.Body
                        className="d-flex flex-column justify-content-between card-transition"
                    >
                        <div>
                            <Card.Title className="text-center mb-0">{chef_name}</Card.Title>
                            <Card.Text className="text-center mb-2">
                                <small className="text-muted">Years of experience: {years_of_experience}</small>
                            </Card.Text>
                            <Card.Text className="text-center mb-2">
                                <small className="text-muted">Number of recipes: {number_of_recipes}</small>
                            </Card.Text>
                            <Card.Text className="text-center">
                                <AiOutlineLike size={20} className="text-danger" /> <span className="text-danger">{likes}</span>
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
                            <span>View Recipes</span>
                            <AiOutlineArrowRight size={20} className="ml-2" />
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardChef;