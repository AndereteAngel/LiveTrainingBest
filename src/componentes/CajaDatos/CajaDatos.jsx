import "./cajaDatos.css"

import React, { useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Swal from "sweetalert2";
import { useClases } from "../clasesContext";

function Carrito() {
  const [show, setShow] = useState(false);
  const { clasesConfirmadas, eliminarClaseDelCarrito, setClasesConfirmadas } = useClases();
  const db = getFirestore();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sumaTotal = clasesConfirmadas.reduce((total, clase) => {
    return total + clase.cantidad * clase.valorClase;
  }, 0);

  const confirmarClases = async () => {
    for (const clase of clasesConfirmadas) {
      try {
        const carritoRef = collection(db, "carrito");
        await addDoc(carritoRef, {
          ...clase,
          fecha: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error al guardar clase en Firestore:", error);
      }
    }

    setClasesConfirmadas([]);

    handleClose();
      Swal.fire({
      title: 'Clases confirmadas',
      html: `<p>Hora de entrenar, un representante se comunicara con usted.</p><p>Suma Total: $${sumaTotal}</p>`,
      icon: 'success',
    });
  };

 return (
   <div id="carrito-container">
     <Button id="carrito-button" variant="primary" onClick={handleShow}>
       Tu carrito
     </Button>
     <div id="carrito-counter" className="card-spinning">
       {clasesConfirmadas.length}
     </div>

     <Offcanvas show={show} onHide={handleClose}>
       <Offcanvas.Header closeButton>
         <Offcanvas.Title>Clases en tu carrito</Offcanvas.Title>
       </Offcanvas.Header>
       <Offcanvas.Body>
         {clasesConfirmadas.length === 0 ? (
           <p>No tienes clases en tu carrito.</p>
         ) : (
           <div>
             <p>Tus clases</p>
             <ul id="carrito-list">
               {clasesConfirmadas.map((clase) => (
                 <li key={clase.id}>
                   {clase.estiloDeClase} (Cantidad: {clase.cantidad})
                   <div>
                     <strong>Valor Clase:</strong> ${clase.valorClase}
                   </div>
                   <Button
                     id="eliminar-button"
                     variant="danger"
                     onClick={() => eliminarClaseDelCarrito(clase.id)}
                   >
                     Eliminar
                   </Button>
                 </li>
               ))}
             </ul>
             <p>Suma Total: ${sumaTotal}</p>
             <Button
               id="confirmar-button"
               variant="info"
               onClick={confirmarClases}
             >
               Confirmar clases
             </Button>
           </div>
         )}
       </Offcanvas.Body>
     </Offcanvas>
   </div>
 );
}

export default Carrito;
