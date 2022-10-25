import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ErrorPage = (error) => {
    return (
        <div>
            <div className='text-center'  id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occured.</p>
                <Link to='/home'><Button variant="outline-primary" >Go to Home Page</Button></Link>
            </div>

        </div>
    );
};

export default ErrorPage;