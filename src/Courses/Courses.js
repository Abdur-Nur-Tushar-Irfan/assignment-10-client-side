import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AllCourses from '../components/AllCourses/AllCourses';
import CourseList from '../components/CourseList/CourseList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Courses = () => {
   
    return (
        <div>
          
           <Header></Header>
            
                <Row className='mb-2'>
                <Col className='mt-5 ' sm={4}>
                        
                        <CourseList></CourseList>
                        
                        </Col>
                    <Col sm={8}>
                       
                       <Outlet></Outlet> 
                        
                        
                        </Col>
                   
                </Row>
                <Footer></Footer>
                
            



        </div>
    );
};

export default Courses;