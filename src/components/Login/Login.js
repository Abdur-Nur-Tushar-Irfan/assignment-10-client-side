import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithitHub } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    //handle sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })

    }
    //handle github

    const handleGitHub = () => {
        signInWithitHub()
            .then((result) => {
               const user = result.user;
               navigate(from, { replace: true })
              
            }).catch((error) => {
                console.error(error)
            });

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset()
        signIn(email, password)

            .then(result => {
                const user = result.user;
                setError('');
                console.log(user)
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    return (
        <div>

            <Card className='mx-auto mt-5 shadow p-3 mb-5 bg-white rounded ' style={{ width: '18rem' }}>
                
                <Form onSubmit={handleSubmit} className='p-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>

                    <p>already register? <Link to='/register'>Register</Link></p>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                    <div className='mt-3 text-center'>
                        <Link> <FaGoogle className='me-3' onClick={handleGoogleSignIn}></FaGoogle></Link>
                        <Link onClick={handleGitHub}> <FaGithub></FaGithub></Link>

                    </div>
                </Form>




            </Card>
        </div>
    );
};

export default Login;