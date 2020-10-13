import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchBar from "./componentes/SearchBar/SearchBar.jsx";
import Shop from "./componentes/Categoria/Shop";
import Producto from "./componentes/Producto/Producto.jsx";
import FormularioCrud from "./componentes/FormularioCrud/FormularioCrud.jsx";
import Home from "./componentes/Home/Home.jsx";
import CrudCategoria from "./componentes/CrudCategorias/CrudCategoria";
//React Router
//Faltan actions
//Pasar todo mediante un UseEffect

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={SearchBar} />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/productos" component={Shop} />
          <Route exact path="/formulario-categoria" component={CrudCategoria} />
          <Route exact path="/producto/:id" component={Producto} />
          <Route exact path="/formulario-crud" component={FormularioCrud} />
        </Switch>
      </Router>
    </div>
  );
}
