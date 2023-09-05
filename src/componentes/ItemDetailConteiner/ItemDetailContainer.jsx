import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegar a la página de inicio
import productos from '../data/productos.json';
import './itemDetailContainer.css';

const ItemDetailContainer = () => {
    const fragancias = new Set(
        productos
            .flatMap((producto) => producto.fragancias)
    );

    return (
        <div className="item-detail-container">
            <h1>Fragancias Disponibles</h1>
            <ul className="fragancias-list">
                {[...fragancias].map((fragancia, index) => (
                    <li key={index} className="fragancia-item">{fragancia}</li>
                ))}
            </ul>
            <Link to="/" className="volver-btn">Volver al Inicio</Link>
        </div>
    );
};

export default ItemDetailContainer;
