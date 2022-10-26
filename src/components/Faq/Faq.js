import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
            <h4 className='text-center mt-2'>Frequently Ask Question</h4>
            <Row xs={1} md={2} className="g-4 mt-2 mb-2">

                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>01. Who should take an Online Course? </Accordion.Header>
                            <Accordion.Body>
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>02. Are there prerequisites or language requirements?</Accordion.Header>
                            <Accordion.Body>
                            Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. (We don't recommend rewriting your existing components overnight but you can start using Hooks in the new ones if you'd like.)
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>03. Can I take more than one course at a time?</Accordion.Header>
                            <Accordion.Body>
                            The AuthContext provides the implementation for authenticating users. A typical caller instantiates this class and starts the login process. The caller then obtains an array of Callback objects, which contains the information required by the authentication plug-in module. The caller requests information from the user.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>04.What should I do if I need to start the course late? </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>03. Can I take more than one course at a time?</Accordion.Header>
                            <Accordion.Body>
                            The AuthContext provides the implementation for authenticating users. A typical caller instantiates this class and starts the login process. The caller then obtains an array of Callback objects, which contains the information required by the authentication plug-in module. The caller requests information from the user.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>04.What should I do if I need to start the course late? </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>07. What are your Terms and Conditions?</Accordion.Header>
                            <Accordion.Body>
                            The AuthContext provides the implementation for authenticating users. A typical caller instantiates this class and starts the login process. The caller then obtains an array of Callback objects, which contains the information required by the authentication plug-in module. The caller requests information from the user.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>08.What should I do if I need to start the course late? </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>09. I am a high school student, can I join?</Accordion.Header>
                            <Accordion.Body>
                            The AuthContext provides the implementation for authenticating users. A typical caller instantiates this class and starts the login process. The caller then obtains an array of Callback objects, which contains the information required by the authentication plug-in module. The caller requests information from the user.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>10.What should I do if I need to start the course late? </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>11. My payment did not go through. What do I do?</Accordion.Header>
                            <Accordion.Body>
                            The AuthContext provides the implementation for authenticating users. A typical caller instantiates this class and starts the login process. The caller then obtains an array of Callback objects, which contains the information required by the authentication plug-in module. The caller requests information from the user.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>12 .What should I do if I need to start the course late? </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>
                

            </Row>
        </div>
    );
};

export default Faq;