import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CourseCard = ({ element }) => {
    console.log(element)
    const { image_url,title,details } = element
    return (
        <div>
          
            <Card className='m-2'>
            <Link> <button type="button" class="btn btn-outline-primary w-100">Download pdf <FaDownload></FaDownload></button></Link>
               
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                        
                    </Card.Text>
                    <Link to='/courseCheckout'><Button variant="primary">Get premium Access</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseCard;