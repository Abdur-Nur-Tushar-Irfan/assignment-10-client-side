import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'

const Home = () => {
    return (
        <div>
            <Carousel fade className='m-2'>
                <Carousel.Item>
                    <img
                        style={{ height: '460px', backgroundSize:'cover' }}
                        className="d-block h-70 w-100"
                        src={banner2}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '460px', backgroundSize:'cover' }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height:'460px', backgroundSize:'cover'}}
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;