import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../assets/Brand1.jpg';

const Home = () => {
    return (
        <div className='m-3 '>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="w-100 h-50"
                        src={Brand1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="outline-primary">Primary</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                
                
              
            </Carousel>

        </div>
    );
};

export default Home;