import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import productos from "../data/productos.json"
import "./productosVenta.css"

function ProductosVenta() {
    return (
        <Row xs={1} md={2} className="g-4">
    {productos.map((producto) => (
        <Col key={producto.id}>
            <Card className='card-productos'> 
                <Card.Img
                    style={{
                        width: "250px",
                        height: "150px",
                        margin: "auto",
                        marginTop: "10px"
                    }}
                    variant="top" src={producto.img} alt={producto.nombre} />
                <Card.Body>
                    <Card.Title><h1>{producto.nombre}</h1></Card.Title>
                    <Card.Text>
                        <h2>Precio: ${producto.precio}</h2>
                        Fragancias: {producto.fragancias.join(', ')}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ))}
</Row>
    );
}

export default ProductosVenta;