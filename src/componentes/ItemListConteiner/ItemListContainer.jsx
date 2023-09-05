import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productos from '../data/productos.json';
import './itemListContainer.css';

const ItemListContainer = () => {
    const { categoryType } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = productos.filter((producto) => {
        if (categoryType === 'productos') {
            return true;
        } else if (categoryType === 'fragancias') {
            return false;
        }
        return false;
    });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredFragancias = new Set(
        productos
            .filter((producto) => categoryType === 'fragancias')
            .flatMap((producto) => producto.fragancias)
    );

    return (
        <div className="item-list-container">
            {categoryType === 'productos' && (
                <div>
                    <h1 className="fade-in">Lista de Productos</h1>
                    <input
                        type="text"
                        placeholder="Buscar productos"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <ul>
                        {filteredProducts
                            .filter((producto) =>
                                producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((producto) => (
                                <li key={producto.id}>
                                    {producto.nombre} - Precio: ${producto.precio}
                                    <Link to={`/item/${producto.id}`}>
                                        <button>Ver Detalles</button>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            )}

            {categoryType === 'fragancias' && (
                <div>
                    <h1>Fragancias Disponibles</h1>
                    <ul>
                        {[...filteredFragancias].map((fragancia) => (
                            <li key={fragancia}>{fragancia}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
		
    );
};

export default ItemListContainer;
