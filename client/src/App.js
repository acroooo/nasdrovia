import React from 'react';
import './App.css';

import Categoria from './componentes/Categoria/Categoria'

function App() {

  const src = 'https://cdn.pastemagazine.com/www/articles/ballast%20point%20sculpin.png';
  const productos = [{ nombre: 'producto1', id: 0, photo: src, asd: "agreguen más cosas", categoria: "lager" }, { nombre: 'producto2', id: 1, photo: src, asd: "agreguen más cosas", categoria: "stout" }];
  const categorias = ['Lager', 'Stout'];
  return (
    <div className="App">
      <Categoria productosArr={productos} categorias={categorias} />
    </div>
  );
}

export default App;
