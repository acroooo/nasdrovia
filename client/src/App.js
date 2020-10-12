import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import menu from "./componentes/SearchBar/menu.jsx";
import Producto from "./componentes/Producto/Producto.jsx";
import FormularioCrud from "./componentes/FormularioCrud/FormularioCrud.jsx";
import Categoria from "./componentes/Categoria/Categoria";
import CrudCategoria from "./componentes/CrudCategorias/CrudCategoria";
//React Router

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={menu} />
        <Route exact path="/productos" component={Categoria} />
        <Route exact path="/formulario-categoria" component={CrudCategoria} />
        <Route exact path="/producto/:id" component={Producto} />
        <Route exact path="/formulario-crud" component={FormularioCrud} />
      </Router>
    </div>
  );
}
