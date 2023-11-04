import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import Carrito from "../CajaDatos/CajaDatos";
import Icons from "./icons";
import { Link } from "react-router-dom";
import React from "react";

function NavbarCategory(props) {
  return (
    <Navbar style={{ backgroundColor: "var(--color-primario)" }} expand="lg">
      <Container>
        <Navbar.Brand href="/">Live Training</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Staff" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Categorias">Profes</NavDropdown.Item>
              <NavDropdown.Item href="/CalendarioSemanal">
                Dias y Horarios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/YourComponent">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
            <Carrito />
          </Nav>
          <Nav className="ms-auto">
            <span style={{ color: "white", marginRight: "10px" }}>
              {props.user && props.user.email}
            </span>
            <Icons />
            Calendario
            <Link to="/ItemListContainer">
              <button
                style={{
                  backgroundColor: "var(--color-secundario)",
                  marginLeft: "20px",
                  borderRadius: "10px",
                }}
              >
                Volver
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCategory;
