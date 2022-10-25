import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../Header/Header';

const Courses = () => {
    return (
        <div>
           
            <Row>
                {/* courses */}
                <Col sm={8}>

                    sm=8
                </Col>


                {/* all courses */}
                <Col sm={4}>
                    sm=4
                </Col>
            </Row>
        </div>
    );
};

export default Courses;