import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Bienvenida = () => {
    const [ingreso, setIngreso] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const Iniciar = () => {
        setIsLoading(true); 
        setTimeout(() => {
            setIngreso(!ingreso);
            setIsLoading(false); 
            navigate("/ItemListContainer");
        }, 2000); 
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginTop: "10px",
            borderRadius: "10px",
            padding: "5px",
            background: "aquamarine",
        }}>
            <h1>Ohana Aromas</h1>
            <button
                style={{ margin: "10px" }}
                className="botonMostrarPartidos"
                onClick={Iniciar}
            >
                {"Conócenos"}
            </button>
            {isLoading && <Loading />} 
        </div>
    );
}

const Loading = () => {
    return <h2>Loading...</h2>;
}

export default Bienvenida;

