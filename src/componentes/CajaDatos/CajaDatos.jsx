import "./cajaDatos.css"

import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import clasesData from "../Data/clases.json";
import { useClases } from "../clasesContext";

function Example() {
    const [show, setShow] = useState(false);
    const { clasesConfirmadas, setClasesConfirmadas } = useClases();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sumaTotal = clasesConfirmadas.reduce((total, clase) => {
        const detallesClase = clasesData.find((item) => item.id === clase.id);
        if (!detallesClase) return total;
        return total + clase.cantidad * detallesClase.valorClase;
    }, 0);

    const eliminarClaseConfirmada = (claseId) => {
        const nuevasClasesConfirmadas = clasesConfirmadas.filter((clase) => clase.id !== claseId);
        setClasesConfirmadas(nuevasClasesConfirmadas);
    };

    return (
        <>
            <div style={{ position: 'relative' }}>
                <Button variant="primary" onClick={handleShow}>
                    Tus clases
                </Button>
                <div
                    style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px',
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '5px 10px',
                        fontSize: '12px',
                    }}
                >
                    {clasesConfirmadas.length}
                </div>
            </div>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Clases Confirmadas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {clasesConfirmadas.length === 0 ? (
                        <p>No has confirmado ninguna clase.</p>
                    ) : (
                        <div>
                            <p>Tus clases</p>
                            <ul>
                                {clasesConfirmadas.map((clase) => {
                                    const detallesClase = clasesData.find((item) => item.id === clase.id);
                                    if (!detallesClase) return null;
                                    return (
                                        <li key={clase.id}>
                                            {detallesClase.estiloDeClase} (Cantidad: {clase.cantidad})
                                            <div>
                                                <strong>Días y Horarios:</strong> {detallesClase.horario.dias.join(", ")} a las {detallesClase.horario.horas.join(", ")}
                                            </div>
                                            <div>
                                                <strong>Valor Clase:</strong> ${detallesClase.valorClase}
                                            </div>
                                            <Button
                                                variant="danger"
                                                onClick={() => eliminarClaseConfirmada(clase.id)}
                                                style={{ display: "list-item" }}
                                            >
                                                Eliminar
                                            </Button>
                                        </li>
                                    );
                                })}
                            </ul>
                            <p>Suma Total: ${sumaTotal}</p>
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Example;
