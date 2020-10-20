import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchBar from "./componentes/SearchBar/navBar.jsx";
import Shop from "./componentes/Categoria/Shop";
import Producto from "./componentes/Producto/Producto.jsx";
import FormularioCrud from "./componentes/FormularioCrud/FormularioCrud.jsx";
import Carrito from "./componentes/carrito/carrito";
import Home from "./componentes/Home/Home.jsx";
import CrudCategoria from "./componentes/CrudCategorias/CrudCategoria";
import CheckOut from "./componentes/carrito/checkOut";
import OrdenesAdmin from "./componentes/ListaDeOrdenesAdmin/ListaOrdenes";
import PanelAdmin from "./componentes/PanelAdmin/PanelAdmin";
import ListaOrdenes2 from "./componentes/ListaOrdenes2/LineaOrdenes2";
//React Router
//Faltan actions
//Pasar todo mediante un UseEffect

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={SearchBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={PanelAdmin} />
        <Route exact path="/ordenes" component={ListaOrdenes2} />
      
        <Switch>
          <Route exact path="/productos" component={Shop} />
          <Route exact path="/formulario-categoria" component={CrudCategoria} />
          <Route exact path="/producto/:id" component={Producto} />
          <Route exact path="/formulario-crud" component={FormularioCrud} />
          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/listaordenes" component={OrdenesAdmin} />

        </Switch>
      </Router>
    </div>
  );
}

