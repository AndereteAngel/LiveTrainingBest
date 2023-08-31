import React, { useState } from "react";
import "./cardproducto.css";
import Card from "react-bootstrap/Card";
import productos from "../data/productos.json";
import Swal from "sweetalert2";

const CardProducto = () => {
    const [filtro, setFiltro] = useState("");
    const [carrito, setCarrito] = useState([]); // Estado para almacenar el carrito de compras

    const buscaProducto = event => {
        setFiltro(event.target.value);
    };

    const mostrarDetalles = producto => {
        Swal.fire({
            title: producto.nombre,
            html: `
                <p>Precio: $${producto.precio}</p>
                <label for="fragancia">Selecciona una fragancia:</label>
                <select id="fragancia">
                    ${producto.fragancias.map(fragancia => `<option value="${fragancia}">${fragancia}</option>`).join("")}
                </select>
                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" value="1" min="1">
            `,
            showCancelButton: true,
            confirmButtonText: "Agregar al carrito",
            cancelButtonText: "Cerrar",
        }).then(result => {
            if (result.isConfirmed) {
                const fraganciaSeleccionada = document.getElementById("fragancia").value;
                const cantidad = parseInt(document.getElementById("cantidad").value);
                const valorTotal = producto.precio * cantidad;
                // Aquí puedes agregar lógica para agregar al carrito con la fragancia y cantidad seleccionadas
                agregarAlCarrito(producto, fraganciaSeleccionada, cantidad);
            }
        });
    };

    const agregarAlCarrito = (producto, fraganciaSeleccionada, cantidad) => {
        const nuevoItem = {
            producto,
            fragancia: fraganciaSeleccionada,
            cantidad,
            subtotal: producto.precio * cantidad
        };
        setCarrito([...carrito, nuevoItem]);
        Swal.fire({
            title: "Agregado al carrito",
            text: `Has agregado ${cantidad} unidades de ${fraganciaSeleccionada} al carrito.`,
            icon: "success",
        });
    };

    const finalizarCompra = () => {
        Swal.fire({
            title: "Confirmar compra",
            html: `
                <ul>
                    ${carrito.map(item => `
                        <li>${item.producto.nombre} - Fragancia: ${item.fragancia} - Cantidad: ${item.cantidad} - Subtotal: $${item.subtotal}</li>
                    `).join("")}
                </ul>
                <p>Total: $${carrito.reduce((total, item) => total + item.subtotal, 0)}</p>
            `,
            showCancelButton: true,
            confirmButtonText: "Confirmar compra",
            cancelButtonText: "Cancelar",
        }).then(result => {
            if (result.isConfirmed) {
                
                setCarrito([]); 
                Swal.fire({
                    title: "¡Compra confirmada!",
                    text: "Gracias por tu compra.",
                    icon: "success",
                });
            }
        });
    };

    const productosFiltrados = productos.filter(producto => {
        return producto.nombre.toLowerCase().includes(filtro.toLowerCase());
    });

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginTop: "10px",
            borderRadius: "10px",
            padding: "5px",
            background: "aquamarine",
        }}>
            <h2>Qué estás buscando?</h2>
            <input
                type="text"
                placeholder="Buscar productos"
                value={filtro}
                onChange={buscaProducto}
            />
            {productosFiltrados.map(producto => (
                <Card className="cardproducto" style={{
                    width: "18rem",
                    margin: "10px",
                    textAlign: "center",
                    padding: "5px"
                }}
                    key={producto.id}>
                    <Card.Body>
                        <Card.Title>Ohana Aromas</Card.Title>
                        <Card.Text>{producto.nombre}</Card.Text>
                        <button className="botonMostrarPartidos" onClick={() => mostrarDetalles(producto)}>Ver</button>
                    </Card.Body>
                </Card>
            ))}
            <div>
                <h2>Carrito de compras</h2>
                <ul>
                    {carrito.map(item => (
                        <li key={item.producto.id}>{item.producto.nombre} - Cantidad: {item.cantidad} - Subtotal: ${item.subtotal}</li>
                    ))}
                </ul>
                <button onClick={finalizarCompra}>Finalizar compra</button>
            </div>
        </div>
    );
};

export default CardProducto;
