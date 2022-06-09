import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assests/logo.jpg';
import './Header.css';


const Header = () => {


    return (


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header-container'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='w-50 rounded-circle' src={Logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto link-items">

                        <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                        
                        <NavDropdown title="DEPARTMENTS" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/dms"> D.M.S </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to ="/chcn"> C.H.C.N </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to ="/ldms"> L.D.M.S </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>

                        <Nav.Link as={Link} to="/admission"> ADMISSION </Nav.Link>
                        <Nav.Link as={Link} to="/student-result"> STUDENT RESULT </Nav.Link>
                        <Nav.Link as={Link} to="/about-us"> ABOUT US </Nav.Link> 
                        
                    </Nav>
                    <Nav>
                         <Nav.Link as={Link} to="/"> <Spinner animation="grow" variant="primary" /> </Nav.Link>
                    </Nav>
        
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default Header;