import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icons from './icons';
import Example from "../CajaDatos/CajaDatos"

function NavbarCategory() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Live Training</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Staff" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Categorias">Profes</NavDropdown.Item>
                            <NavDropdown.Item href="/CalendarioSemanal">Dias y Horarios</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link to="javascript:history.go(-1)" className="nav-link">Volver</Link>
                        <Icons />
                        <Example/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarCategory;
