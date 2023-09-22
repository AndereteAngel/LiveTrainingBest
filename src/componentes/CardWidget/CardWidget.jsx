import React from "react";
import clases from "../Data/clases.json";
import "./cardWidget.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


function BasicExample() {
  return (
    <div className="card-container">
      {clases.map((clase) => (
        <Card key={clase.id} style={{ width: "18rem" }} className="text-center">
          <Card.Img
            variant="top"
            src={clase.img}
            alt={`Clase de ${clase.estiloDeClase} con ${clase.profesional}`}
          />
          <Card.Body>
            <Card.Title>{`Clase de ${clase.estiloDeClase}`}</Card.Title>
            <Card.Text>
              <strong>Profesional:</strong> {clase.profesional}
            </Card.Text>
            <Card.Text>
              <strong>Lugar:</strong> {clase.lugar}
            </Card.Text>
            <Card.Text>
              <strong>Categoría:</strong> {clase.categoria}
            </Card.Text>
            <Card.Text>
              <strong>Horario:</strong> {clase.horario.dias.join(", ")} a las{" "}
              {clase.horario.horas.join(", ")}
            </Card.Text>
            <Link to={`/item/${clase.id}`}>
              <Button variant="primary">Agregar a tu rutina</Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">LiveTrainig</Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default BasicExample;
