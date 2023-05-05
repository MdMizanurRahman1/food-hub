import React, { useState } from 'react';
import { Button, Card, Col, Toast } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';

const Recipe = ({ recipe, favorite, handleClick }) => {
    const stars = [];
    const [isFavorite, setIsFavorite] = useState(favorite);
    const [showToast, setShowToast] = useState(false);

    // for rating according to rating numbers
    for (let i = 0; i < recipe.rating; i++) {
        stars.push(<AiFillStar key={i} />);
    }

    const handleClickFavorite = () => {
        setIsFavorite(true);
        setShowToast(true);
        handleClick(recipe);
    };

    return (
        <div>
            <Col className="d-flex align-items-stretch">
                <Card style={{ backgroundColor: '#ffe6e6', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}>
                    <Card.Body style={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <Card.Title className="text-center mb-4">Recipe: {recipe.recipe_name}</Card.Title>
                            <Card.Text>
                                <span>Ingredients:</span> {recipe.ingredients.map((ingredient, index) => (
                                    <p className="m-0" key={index}>{`${index + 1}. ${ingredient.trim()}`}</p>
                                ))}
                            </Card.Text>
                            <Card.Text className="mb-3">Method: {recipe.cooking_method}</Card.Text>
                        </div>

                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>
                                    {stars}
                                    <span className="ml-2">({recipe.rating})</span>
                                </span>
                                <Button
                                    style={{ backgroundColor: '#ff6b6b' }}
                                    disabled={isFavorite}
                                    onClick={handleClickFavorite}
                                >
                                    {isFavorite ? "Favorite" : "Favorite"}
                                </Button>
                            </div>
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
