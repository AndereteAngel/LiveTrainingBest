import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Home from './componentes/home/Home';
import ItemListContainer from './componentes/ItemListConteiner/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailConteiner/ItemDetailContainer"; 
import ProductosVenta from './componentes/poductosVenta/PoductosVenta';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryType" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/catalogo" element={<ProductosVenta />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
}

export default App;
