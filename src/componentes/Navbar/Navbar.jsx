import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function barraDeNavegacion() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <img style={{ width:"40px", height:"40px", marginRight: "10px"}} src="https://i.pinimg.com/236x/1b/f1/3b/1bf13b28b79a2f3d1c4b1f4eb09f0ce4.jpg" alt="" />
                    <Navbar.Brand href="#home">OhanaAromas</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Productos</Nav.Link>
                        <Nav.Link href="#features">Calcula tu entrega</Nav.Link>
                        <Nav.Link href="#pricing">Contactanos</Nav.Link>
                    </Nav>
                    <img style={{ width:"30px", height:"30px"}} src="https://i.pinimg.com/236x/db/9f/06/db9f063dca6904b2c01cb33571cb65b1.jpg" alt="" />
                </Container>
            </Navbar>
        </>
    );
}

export default barraDeNavegacion;