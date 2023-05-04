import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Providers/AuthProvider';




const Login = () => {

    const { signIn, signInWithGithub, signInWithGoogle } = useContext(AuthContext);

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);

    const from = location.state?.from?.pathname || "/";


    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })

            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    }

    const handleGithubLogIn = () => {
        signInWithGithub()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    }

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    }

    return (
        <Container className='mx-auto w-25 my-5'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogIn}>
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
                    <p>{error}</p>
                </Form.Text>

                <div className="d-flex flex-column mt-3 text-primary-emphasis">
                    <Button variant="light" className="btn-lg mb-3" onClick={handleGithubLogIn}>
                        <FaGithub className="mr-2" /> Sign in with GitHub
                    </Button>

                    <Button variant="light" className="btn-lg" onClick={handleGoogleLogIn}>
                        <FcGoogle className="mr-2" /> Sign in with Google
                    </Button>
                </div>

            </Form>
        </Container>
    );
};

export default Login;
