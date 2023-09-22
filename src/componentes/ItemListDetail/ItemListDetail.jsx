import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import clasesData from "../Data/clases.json";
import { useClases } from "../clasesContext";
import "./itemListDetail.css"

const ItemListDetail = () => {
  const { id } = useParams();
  const { cantidadClases, setCantidadClases, clasesConfirmadas, setClasesConfirmadas } = useClases();
  const claseSeleccionada = clasesData.find((clase) => clase.id === parseInt(id, 10));

  if (!claseSeleccionada) {
    return <div>No se encontró la tarjeta seleccionada.</div>;
  }

  const { img, profesional, lugar, estiloDeClase, categoria, horario, valorClase } = claseSeleccionada;

  const aumentarCantidad = () => {
    setCantidadClases(cantidadClases + 1);
  };

  const restarCantidad = () => {
    if (cantidadClases > 0) {
      setCantidadClases(cantidadClases - 1);
    }
  };

  const confirmarClase = () => {
    const claseConfirmada = {
      id: claseSeleccionada.id,
      nombre: `Clase de ${estiloDeClase} con ${profesional}`,
      cantidad: cantidadClases,
      valor: valorClase,
    };
    setClasesConfirmadas([...clasesConfirmadas, claseConfirmada]);
  };

  return (
    <div className="cardContainer">
      <Card key={claseSeleccionada.id} style={{ width: "18rem" }} className="text-center">
        <Card.Img
          variant="top"
          src={img}
          alt={`Clase de ${estiloDeClase} con ${profesional}`}
        />
        <Card.Body>
          <Card.Title>{`Clase de ${estiloDeClase}`}</Card.Title>
          <Card.Text>
            <strong>Profesional:</strong> {profesional}
          </Card.Text>
          <Card.Text>
            <strong>Lugar:</strong> {lugar}
          </Card.Text>
          <Card.Text>
            <strong>Categoría:</strong> {categoria}
          </Card.Text>
          <Card.Text>
            <strong>Horario:</strong> {horario.dias.join(", ")} a las{" "}
            {horario.horas.join(", ")}
          </Card.Text>
          <Card.Text>
            <strong>Valor Clase:</strong> ${valorClase}
          </Card.Text>
          <div className="cantidadClases">
            <Button variant="secondary" onClick={restarCantidad}>
              -
            </Button>
            <span>Cantidad de Clases: {cantidadClases}</span>
            <Button variant="secondary" onClick={aumentarCantidad}>
              +
            </Button>
          </div>
          <Button variant="primary" onClick={confirmarClase} className="confirmar-button">
            Confirmar
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">LiveTraining</Card.Footer>
      </Card>
    </div>
  );
};

export default ItemListDetail;
