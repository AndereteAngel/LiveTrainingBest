import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarCategory from "./componentes/Navbar/Navbar"
import Home from "./componentes/Home/Home"
import ItemListContainer from "./componentes/ItemListConteiner/ItemListConteiner"
import ItemListDetail from "./componentes/ItemListDetail/ItemListDetail"
import { ClasesProvider } from "./componentes/clasesContext"
import ItemDetail from "./componentes/ItemListDetail/ItemDetail"
import Categorias from './componentes/Navbar/ListProfesionales/Categorias';

function App() {
  return (
    <BrowserRouter>
      <ClasesProvider>
        <NavbarCategory />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemListDetail />} />
          <Route path="/CalendarioSemanal" element={<ItemDetail />} />
          <Route path="/Categorias" element={<Categorias />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ClasesProvider>
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
