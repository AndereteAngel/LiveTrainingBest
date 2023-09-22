import React, { useState, useEffect } from 'react';
import ListaProfesionales from "./ListaProfesionales"; 
import clasesData from '../../Data/clases.json'; 

function Categorias() {
  const [listaProfesionales, setListaProfesionales] = useState([]);

  useEffect(() => {
    const combinarDatos = () => {
      const profesionalesConCategorias = clasesData.map((profesional) => {
        const categoria = profesional.categoriaId;

        return {
          ...profesional,
          categoria: categoria ? categoria : 'Sin categoría',
        };
      });
      setListaProfesionales(profesionalesConCategorias);
    };

    combinarDatos();
  }, []);

  return (
    <div>
      <ListaProfesionales profesionales={listaProfesionales} />
    </div>
  );
}

export default Categorias;

