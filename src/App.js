import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Navbar from "./componentes/Navbar/Navbar"; 
import {ItemListContainer} from "./componentes/ItemListConteiner/ItemListConteiner";
import Home from "./componentes/home/Home"
import Catalogo from "./componentes/catalogo/Catalogo"
import ProductosVenta from "./componentes/poductosVenta/PoductosVenta";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ItemListContainer" element={<ItemListContainer />} />
        <Route path="/registro" element={<Catalogo />} />
        <Route path="/productos" element={<ProductosVenta />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return <h1>404 - Página no encontrada</h1>;
}

export default App;
