import "./home.css"

import Autenticacion from '../Auth/auth';
import React from 'react';

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
           
            <Autenticacion/>
        </div>
    );
}

export default Home;


