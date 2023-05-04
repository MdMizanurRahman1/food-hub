import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Blog = () => {
    const cardStyle = {
        width: '70%',
        margin: '20px auto',
        padding: '20px',
    };

    return (
        <Container>
            <h3 className='text-center text-danger my-4'>Blog</h3>
            <Col>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title>
                            <span>Question 1 .</span> Tell us the differences between uncontrolled and controlled components.
                        </Card.Title>
                        <Card.Text>
                            Controlled components in React are components whose state and behavior are managed by the parent component.
                            These components rely on props handed down from the parent component to update their state and behavior.
                            Uncontrolled components are those that maintain their own state internally.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title>
                            <span>Question 2 .</span> How to validate React props using PropTypes.
                        </Card.Title>
                        <Card.Text>
                            PropTypes is a React package that allows the type and shape of props supplied to a component to be validated.
                            It is used to guarantee that the data being supplied to a component is of the required type and format,
                            limiting the possibility of bugs and errors.

                            <br />
                            <span>To use PropTypes, import it from the 'prop-types' package and provide the intended data type for each prop
                                in your component. This may be accomplished by utilizing the PropTypes object and its methods such as'string,'
                                'number,' 'array,' 'object,' and so on.</span>

                            <br />
                            For instance, if you have a component that requires a prop called 'name' to be a string, you may validate it
                            using PropTypes.string. A warning will be printed in the console if the prop is not a string.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title>
                            <span>Question 3.</span> What is a custom hook, and why will you create a custom hook?
                        </Card.Title>
                        <Card.Text>
                            A custom hook is a reusable function that contains stateful logic and can be shared across multiple
                            components. We create custom hooks to abstract complex logic and make it reusable across the application.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='mb-5' style={cardStyle}>
                    <Card.Body>
                        <Card.Title>
                            <span>Question 4 .</span> What is a custom hook, and why will you create a custom hook?
                        </Card.Title>
                        <Card.Text>
                            A custom hook is a reusable function that contains stateful logic and can be shared across multiple
                            components. We create custom hooks to abstract complex logic and make it reusable across the application.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};

export default Blog;
