import "./itemListDetail.css"

import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

import { useClases } from "../clasesContext";
import { useParams } from "react-router-dom";

const ItemListDetail = () => {
  const { setClasesConfirmadas } = useClases();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [cantidadClases, setCantidadClases] = useState(1);
  const [user, setUser] = useState(null); // Almacenar información del usuario autenticado
  const [isSpinning, setIsSpinning] = useState(false); // Agrega el estado para la animación

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const loadItem = async () => {
      const db = getFirestore();
      const itemRef = doc(db, "items", id);
      try {
        const itemSnapshot = await getDoc(itemRef);
        if (itemSnapshot.exists()) {
          setItem(itemSnapshot.data());
        } else {
          console.log("No se encontró la tarjeta seleccionada");
        }
      } catch (error) {
        console.error("Error al obtener la tarjeta:", error);
      }
    };

    loadItem();
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  const aumentarCantidad = () => {
    setCantidadClases(cantidadClases + 1);
  };

  const restarCantidad = () => {
    if (cantidadClases > 1) {
      setCantidadClases(cantidadClases - 1);
    }
  };

  const confirmarClases = async () => {
    if (!user) {
      console.log("El usuario no está autenticado");
      return;
    }

    const claseConfirmada = {
      id: item.id,
      estiloDeClase: item.estiloDeClase,
      profesional: item.profesional || "Valor predeterminado",
      lugar: item.lugar || "Valor predeterminado",
      valorClase: item.valor || 0,
      cantidad: cantidadClases,
      fecha: serverTimestamp(),
      usuario: user.email,
    };

    const db = getFirestore();
    const carritoRef = collection(db, "carrito");
    await addDoc(carritoRef, claseConfirmada);

    setClasesConfirmadas((prevClases) => [...prevClases, claseConfirmada]);
  };

  const agregarClase = () => {
    setIsSpinning(true);


    setTimeout(() => {
      setIsSpinning(false);
      confirmarClases();
    }, 1000);
  };

 return (
   <div className="card">
     {" "}
     <h1>{item.estiloDeClase}</h1>
     <p>Profesional: {item.profesional}</p>
     <p>Lugar: {item.lugar}</p>
     <p>Valor: ${item.valor}</p>
     <img
       src={item.img}
       alt={`Clase de ${item.estiloDeClase} con ${item.profesional}`}
       className={isSpinning ? "card-spinning" : ""} 
     />
     <div>
       <button onClick={restarCantidad}>-</button>
       <span>Cantidad de Clases: {cantidadClases}</span>
       <button onClick={aumentarCantidad}>+</button>
     </div>
     <button onClick={agregarClase} className="btn-agregar">
       Agregar
     </button>
   </div>
 );

};
export default ItemListDetail;
