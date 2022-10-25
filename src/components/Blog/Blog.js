import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>01. What is Cors??</Accordion.Header>
                    <Accordion.Body>
                        CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>02. Why are you using Firebase?What Other Options do you have to implement??</Accordion.Header>
                    <Accordion.Body>
                        Firebase:The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>03. How Does The Provate Route Work?</Accordion.Header>
                    <Accordion.Body>
                        PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>03. What is Node? How Does Node Work?</Accordion.Header>
                    <Accordion.Body>
                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;