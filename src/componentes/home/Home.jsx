import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"

function Home() {
    return (
        <div className="home-container">
            <img
            style={{width:"300px", height:"300px"}}
                src="https://i.gifer.com/Q90.gif"
                alt="Persona ejercitándose"
                className="exercise-animation"
            />
            <h1 className="center-text">Bienvenido al Gimnasio Virtual</h1>
            <p className="center-text">¡No te canses de entrenar!</p>
            <Link to="/items" className="btn-ingresar">
                Ingresar
            </Link>
        </div>
    );
}

export default Home;


