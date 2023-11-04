import "./cardWidget.css";

import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getFirestore } from "firebase/firestore";

const CardWidget = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "items"));

    getDocs(q)
      .then((querySnapshot) => {
        const productsData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          productsData.push({
            id: doc.id,
            profesional: data.profesional,
            lugar: data.lugar,
            estiloDeClase: data.estiloDeClase,
            valor: data.valor,
            img: data.img,
          });
        });
        setProducts(productsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="card-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img
            src={product.img}
            alt={`Clase de ${product.estiloDeClase} con ${product.profesional}`}
          />
          <div className="card-title">{`Clase de ${product.estiloDeClase}`}</div>
          <div className="card-text">
            <strong>Profesional:</strong> {product.profesional}
          </div>
          <div className="card-text">
            <strong>Lugar:</strong> {product.lugar}
          </div>
          <div className="card-text">
            <strong>Valor: ${product.valor}</strong>
          </div>
          <Link to={`/item/${product.id}`} className="btn-agregar">
            Agregar a tu rutina
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardWidget;
