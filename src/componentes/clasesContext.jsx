import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";

import { getFirestore } from "firebase/firestore";

const ClasesContext = createContext();

export function ClasesProvider({ children }) {
  const [clasesConfirmadas, setClasesConfirmadas] = useState([]);

  const loadFirebaseData = async () => {
    const db = getFirestore();
    const q = query(collection(db, "clasesConfirmadas"));

    try {
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setClasesConfirmadas(data);
    } catch (error) {
      console.error("Error al cargar datos de Firebase:", error);
    }
  };

  const eliminarClaseDelCarrito = (claseId) => {
    const nuevasClasesCarrito = clasesConfirmadas.filter(
      (clase) => clase.id !== claseId
    );
    setClasesConfirmadas(nuevasClasesCarrito);
  };

  useEffect(() => {
    loadFirebaseData();
  }, []);

  return (
    <ClasesContext.Provider
      value={{
        clasesConfirmadas,
        setClasesConfirmadas,
        eliminarClaseDelCarrito,
        loadFirebaseData,
      }}
    >
      {children}
    </ClasesContext.Provider>
  );
}

export function useClases() {
  const context = useContext(ClasesContext);
  if (!context) {
    throw new Error("useClases debe utilizarse dentro de un ClasesProvider");
  }
  return context;
}
