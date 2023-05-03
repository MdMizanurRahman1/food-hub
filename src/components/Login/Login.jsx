import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';




const Login = () => {

    return (
        <Container className='mx-auto w-25 my-5'>
            <h3>Please Login</h3>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-2'>
                    Login
                </Button>
                <br></br>
                <Form.Text className="text-secondary">
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <div className="d-flex flex-column mt-3 text-primary-emphasis">
                    <a href="#" className="btn btn-light btn-lg mb-3">
                        <FaGithub className="mr-2" /> Sign in with GitHub
                    </a>

                    <a href="#" className="btn btn-light text-primary-emphasis btn-lg">
                        <FcGoogle className="mr-2" /> Sign in with Google
                    </a>
                </div>

            </Form>
        </Container>
    );
};

export default Login;
