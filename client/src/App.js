import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./componentes/SearchBar/SearchBar.jsx";
import Categoria from "./componentes/Categoria/Categoria.jsx";
import Producto from "./componentes/Producto/Producto.jsx";
import FormularioCrud from "./componentes/FormularioCrud/FormularioCrud.jsx";
import Home from "./componentes/Home/Home.jsx";
import CrudCategoria from "./componentes/CrudCategorias/CrudCategoria";
import Carrito from "./componentes/carrito/carrito";
//React Router

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={SearchBar} />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/productos" component={Categoria} />
          <Route exact path="/formulario-categoria" component={CrudCategoria} />
          <Route exact path="/producto/:id" component={Producto} />
          <Route exact path="/formulario-crud" component={FormularioCrud} />
          <Route exact path="/carrito" component={Carrito} />
        </Switch>
      </Router>
    </div>
  );
}
