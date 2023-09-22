import React from 'react';
import "./listaProfesionales.css"

function ListaProfesionales({ profesionales }) {
    return (
        <div className="ListaProfesionales">
            <h2>Lista de Profesionales</h2>
            <ul>
                {profesionales.map((profesional) => (
                    <li key={profesional.id} className="ProfesionalItem"> 
                        <div>
                            <h3 className="ProfesionalNombre">{profesional.profesional}</h3>
                            <p className="EstiloClase">Estilo de Clase: {profesional.estiloDeClase}</p>
                            <p className="Categoria">Categoría: {profesional.categoria}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaProfesionales;


