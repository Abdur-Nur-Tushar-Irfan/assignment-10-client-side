import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaCopyright, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import CardGroup from 'react-bootstrap/CardGroup';

const Footer = () => {
    return (
        <Card className='text-center bg-dark text-white'>
       
        <Card.Body>
          <Card.Title>All right reserved 	&copy; 2022</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
         
        </Card.Body>
      </Card>
    );
};

export default Footer;