import React, { createContext, useContext, useState } from "react";

const ClasesContext = createContext();

export function ClasesProvider({ children }) {
  const [clasesConfirmadas, setClasesConfirmadas] = useState([]);
  const [cantidadClases, setCantidadClases] = useState(0); 

  return (
    <ClasesContext.Provider
      value={{ clasesConfirmadas, setClasesConfirmadas, cantidadClases, setCantidadClases }}
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
