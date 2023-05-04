import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { useState } from "react";

const TopRated = () => {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <h3 className='text-center mt-5 mb-1 text-danger' style={{ fontWeight: 'bold' }}>Our Top Rated Dishes</h3>
            <p className='text-center text-muted'>Who are in extremely love with eco friendly system.</p>
            <Carousel className="mt-4 mb-5" style={{ width: '70%', height: '70%' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="../../../public/section1.jpg"
                        alt="Chicken cutlen with chili"
                    />
                    <Carousel.Caption>
                        <h3>Chicken cutlen with chili</h3>
                        <p>The dish is known for its unique flavor, which comes from the combination of the crispy breaded chicken and the spicy chili peppers.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="../../../public/section2.jpg"
                        alt="Fish fry with onions"
                    />
                    <Carousel.Caption>
                        <h3>Fish fry with onions</h3>
                        <p>Fish fry with onions is a delicious and flavorful dish that is loved by seafood enthusiasts. Typically made by frying marinated fish pieces.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src="../../../public/section3.jpg"
                        alt="Noodles with winter onion"
                    />
                    <Carousel.Caption>
                        <h3>Noodles with winter onion</h3>
                        <p>The combination of chewy noodles and savory winter onions creates a deliciously satisfying meal that is easy to prepare.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default TopRated;
