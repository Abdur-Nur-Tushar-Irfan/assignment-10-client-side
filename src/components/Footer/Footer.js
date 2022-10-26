import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaCopyright, FaFacebook, FaGithub, FaGoogle, FaInstagram } from 'react-icons/fa';
import CardGroup from 'react-bootstrap/CardGroup';

const Footer = () => {
    return (
        <Card className='text-center bg-dark text-white'>
       
        <Card.Body>
          <Card.Title>All right reserved 	&copy; 2022</Card.Title>
          <Card.Text>
            <FaFacebook className='m-2'></FaFacebook>
            <FaGithub className='m-2'></FaGithub>
            <FaInstagram className='m-2'></FaInstagram>
          </Card.Text>
         
        </Card.Body>
      </Card>
    );
};

export default Footer;