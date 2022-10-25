import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Register = () => {
    const {createUser,updateUserProfile}=useContext(AuthContext)
    const handleUpdateUserProfile=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL

        }
        updateUserProfile(profile)
        .then(()=>{})
        .then(error=>console.error(error))
    }
    const [error,setError]=useState('')
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.PhotoURL.value
        const email=form.email.value;
        const password=form.password.value;
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            setError('');
            console.log(user)
            handleUpdateUserProfile(name, photoURL)
            
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)

        })
    }
    return (
        <div>
            <Card className='mx-auto mt-5' style={{ width: '18rem' }}>
                <Form onSubmit={handleSubmit} className='p-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="name" name='name' placeholder="Your Full Name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your PhotoURL</Form.Label>
                        <Form.Control type="text" name='PhotoURL' placeholder="PhotoURL" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <p>already Log in? <Link to='/login'>Log in</Link></p>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                       Register
                    </Button>
                </Form>

            </Card>

        </div>
    );
};

export default Register;