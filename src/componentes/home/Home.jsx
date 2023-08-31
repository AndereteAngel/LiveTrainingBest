import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Bienvenida = () => {
    const [ingreso, setIngreso] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const Iniciar = () => {
        setIsLoading(true); // Activar el estado de carga
        setTimeout(() => {
            setIngreso(!ingreso);
            setIsLoading(false); // Desactivar el estado de carga después de un tiempo simulado
            navigate("/ItemListContainer");
        }, 2000); // Simular un tiempo de carga de 2 segundos
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
            {isLoading && <Loading />} {/* Mostrar el componente Loading si isLoading es true */}
        </div>
    );
}

const Loading = () => {
    return <h2>Loading...</h2>;
}

export default Bienvenida;

