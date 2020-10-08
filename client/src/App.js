import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./componentes/SearchBar/SearchBar.jsx";
import Producto from "./componentes/Producto/Producto.jsx";
import FormularioCrud from "./componentes/FormularioCrud/FormularioCrud.jsx";
import Categoria from "./componentes/Categoria/Categoria";
//React Router

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={SearchBar} />
        <Route exact path="/productos" component={Categoria} />
        <Route exact path="/producto/:id" component={Producto} />
        <Route exact path="/formulario-crud" component={FormularioCrud} />
      </Router>
    </div>
  );
}
