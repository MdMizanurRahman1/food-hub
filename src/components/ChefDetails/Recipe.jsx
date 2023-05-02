import React, { useState } from 'react';
import { Button, Card, Col, Toast } from 'react-bootstrap';

const Recipe = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleClick = () => {
        setFavorite(true);
        setShowToast(true);
    }

    return (
        <div>
            <Col className="d-flex align-items-stretch">
                <Card style={{ backgroundColor: '#ffe6e6', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}>
                    <Card.Body style={{ height: '75vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <Card.Title className="text-center mb-4">Recipe: {recipe.recipe_name}</Card.Title>
                            <Card.Text>
                                <span>Ingredients:</span> {recipe.ingredients.map((ingredient, index) => (
                                    <p className="m-0" key={index}>{`${index + 1}. ${ingredient.trim()}`}</p>
                                ))}
                            </Card.Text>
                            <Card.Text className="mb-3">Method: {recipe.cooking_method}</Card.Text>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <span>Rating: {recipe.rating}</span>
                            <Button
                                style={{ backgroundColor: '#ff6b6b' }}
                                disabled={favorite}
                                onClick={handleClick}
                            >
                                {favorite ? "Favorite" : "Favorite"}
                            </Button>
                        </div>

                    </Card.Body>
                </Card>
            </Col>
            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
            >
                <Toast.Body>{`The recipe "${recipe.recipe_name}" is your favorite!`}</Toast.Body>
            </Toast>
        </div>
    );
};

export default Recipe;
