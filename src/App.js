import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Auth from './componentes/Auth/auth.jsx';
import Categorias from './componentes/Navbar/ListProfesionales/Categorias';
import { ClasesProvider } from "./componentes/clasesContext"
import Home from "./componentes/Home/Home"
import ItemDetail from "./componentes/ItemListDetail/ItemDetail"
import ItemListContainer from "./componentes/ItemListConteiner/ItemListConteiner"
import ItemListDetail from "./componentes/ItemListDetail/ItemListDetail"
import NavbarCategory from "./componentes/Navbar/Navbar"
import React from 'react';
import YourComponent from './componentes/baseDeDatos';

function App() {
  return (
    <BrowserRouter>
      <ClasesProvider>
        <NavbarCategory />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/items" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemListDetail />} />
          <Route path="/CalendarioSemanal" element={<ItemDetail />} />
          <Route path="/Categorias" element={<Categorias />} />
          <Route path="/ItemListContainer" element={<ItemListContainer />} />
          <Route path="/YourComponent" element={<YourComponent />} />
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
