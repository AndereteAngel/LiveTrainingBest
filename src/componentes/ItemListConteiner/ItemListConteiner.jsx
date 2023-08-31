import React from "react";
import Button from "react-bootstrap/Button";
import "./itemListConteiner.css";
import Cardproducto from "../cardproducto/CardProducto";


export const ItemListContainer = ({ greeting }) => {
	return (
		<div className="container--ItemListContainer">
			<div className="container--ItemListContainer--text">
				<div style={{ display: "flex" }}>
					<Cardproducto />
				</div>
				<div className="botonesInf">
				<Button variant="outline-success">Lista de precios</Button>{" "}
				<Button variant="outline-success">Nuestros aromas</Button>{" "}
				<Button variant="outline-success">Ubicacion</Button>{" "}
				<Button variant="outline-success">Contacto</Button>{" "}
				</div>
			</div>
			<div className="container--ItemListContainer--text">
				<a className="conocenos" href="https://www.instagram.com/">Conocenos</a>
			</div>
			<div className="itemListcontainer--prop"> {greeting} </div>
		</div>
	);
};
