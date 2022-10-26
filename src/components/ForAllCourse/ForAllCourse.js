import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const ForAllCourse = ({ course }) => {
    const { image_url,title,details } = course
    return (
        <div>
            
                <Card className='bg-dark text-white' >
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {details.slice(0,100) + '...'}
                        </Card.Text>
                    </Card.Body>
                </Card>

        







        </div>
    );
};

export default ForAllCourse;