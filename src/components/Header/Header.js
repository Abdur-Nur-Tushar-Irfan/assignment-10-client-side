import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaReadme, FaToggleOn, FaUserAlt, FaUserGraduate } from 'react-icons/fa';
import userEvent from '@testing-library/user-event';
import { AuthContext } from '../../UserContext/UserContext';

const Header = () => {
    const handleToggle = (e) => {
        if(e.target.checked === false){
            document.body.style = "background: none;";
        }
        else{
            
            document.body.style = "background: black;";
        }

    }
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><FaUserGraduate className='text-white me-3 '></FaUserGraduate> Educate and Online Course</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mx-auto">
                            <NavLink to='/home' className='text-white align-center me-3 text-decoration-none'>Home</NavLink>
                            <NavLink to='/courses' className='text-white align-center me-3 text-decoration-none'>Courses</NavLink>
                            <NavLink to='/faq' className='text-white align-center me-3 text-decoration-none'>FAQ</NavLink>
                            <NavLink to='/blog' className='text-white align-center me-3 text-decoration-none'>Blog</NavLink>

                        </Nav>
                        <Nav>

                            <Nav.Link href="#deets"></Nav.Link>

                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user?.uid ?

                                        <>

                                            <Link onClick={handleLogOut} to='/login' className='text-white align-center me-2 text-decoration-none'>Log out</Link>
                                            <span className='text-white '>{user?.displayName}</span>
                                            <Image
                                                data-bs-toggle="tooltip" data-bs-placement="top" title={user?.displayName}
                                                roundedCircle
                                                className='ms-3'
                                                src={user?.photoURL}
                                                style={{ height: '40px' }}

                                            >

                                            </Image>


                                        </>

                                        :
                                        <>
                                            <Link to='/login' className='text-white align-center me-2 text-decoration-none'>Log in</Link>
                                            <FaUserAlt></FaUserAlt>

                                        </>
                                }





                            </Nav.Link>

                        </Nav>

                        <div onClick={handleToggle} class="btn-group-toggle" data-toggle="buttons">
                            <label className='btn btn-secondary active'> 
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="dark"/> 
                            </label>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;