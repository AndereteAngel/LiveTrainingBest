import React from 'react';
import clasesData from '../Data/clases.json';
import "./itemDetail.css"

const CalendarioSemanal = () => {
    const clasesPorDia = {};

    clasesData.forEach((clase) => {
        clase.horario.dias.forEach((dia) => {
            if (!clasesPorDia[dia]) {
                clasesPorDia[dia] = [];
            }
            clasesPorDia[dia].push(clase);
        });
    });

    return (
        <div className="calendario-container">
            <div className="calendario-semanal">
                <table>
                    <thead>
                        <tr>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miércoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                            <th>Sábado</th>
                            <th>Domingo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((dia) => (
                                <td key={dia}>
                                    {clasesPorDia[dia] && (
                                        <ul>
                                            {clasesPorDia[dia].map((clase) => (
                                                <li key={clase.id}>
                                                    {clase.estiloDeClase}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CalendarioSemanal;
