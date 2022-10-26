import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PDFDownloadLink } from "@react-pdf/renderer";
import Reactpdf from '../Reactpdf/Reactpdf';


const CourseCard = ({ element }) => {
    console.log(element)
    const { image_url, title, details } = element
    return (
        <div>

            <Card className='m-4 bg-dark text-white'>
            
                    <PDFDownloadLink 
                        className='text-decoration-none text-white'
                        document={<Reactpdf details={element} />}
                        filename="FORM"
                    >
                        {({ loading }) =>
                            loading ? (
                                <button>Loading Document...</button>
                            ) : (
                                <div className='text-center p-3'>Download pdf <FaDownload className='text-white'></FaDownload></div>
                            )
                        }
                    </PDFDownloadLink>

                    

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