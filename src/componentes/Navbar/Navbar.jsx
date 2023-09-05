import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import "./navbar.css"

function BarraDeNavegacion() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="navbar"> 
                <Container>
                    <img
                        style={{ width: '40px', height: '40px', marginRight: '10px' }}
                        src="https://i.pinimg.com/236x/1b/f1/3b/1bf13b28b79a2f3d1c4b1f4eb09f0ce4.jpg"
                        alt=""
                    />
                    <Navbar.Brand href="#home" className="navbar-brand">OhanaAromas</Navbar.Brand> 
                    <Nav className="me-auto">
                        <Nav.Link href="#features" className="nav-link">Calcula tu entrega</Nav.Link> 
                        <Link to="/catalogo" className="nav-link">Catalogo</Link> 
                    </Nav>
                    <img
                        style={{ width: '30px', height: '30px' }}
                        src="https://i.pinimg.com/236x/db/9f/06/db9f063dca6904b2c01cb33571cb65b1.jpg"
                        alt=""
                    />
                </Container>
            </Navbar>
        </>
    );
}

export default BarraDeNavegacion;
