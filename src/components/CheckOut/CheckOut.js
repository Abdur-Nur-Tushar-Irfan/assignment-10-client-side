import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../UserContext/UserContext';

const CheckOut = () => {
    const {user}=useContext(AuthContext)
    const handleCheckOut=()=>{
        toast.success('Your Order place succefully')
    }
    return (
        <div>
            <Card className='mx-auto mt-5 bg-dark text-white' style={{ width: '18rem' }}>
                <Form className='p-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="email" value={user?.displayName} name='Name' readOnly placeholder="Enter your Email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={user?.email} name='email' placeholder="Your Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" name='password' placeholder="Your Phone Number" required />
                    </Form.Group>
                    

                    

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className='w-100' variant="primary" onClick={handleCheckOut} type="submit">
                        Check Out Your Order
                    </Button>
                    
                </Form>




            </Card>

        </div>
    );
};

export default CheckOut;