import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AllCourses from '../components/AllCourses/AllCourses';
import CourseList from '../components/CourseList/CourseList';
import Header from '../components/Header/Header';

const Courses = () => {
    return (
        <div>
            <Header></Header>
            
                <Row>
                <Col className='mt-5 ' sm={4}>
                        
                        <CourseList></CourseList>
                        
                        </Col>
                    <Col sm={8}>
                        this is for all courses
                        <AllCourses></AllCourses>
                        
                        
                        
                        </Col>
                   
                </Row>
                
            



        </div>
    );
};

export default Courses;