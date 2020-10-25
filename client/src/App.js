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
import Checkout from "./componentes/Checkout/Checkout";
import Orden2 from "./componentes/Orden2/Orden2";
import Usuarios from "./componentes/ListaUsuarios/Usuarios";
import Perfil from "./componentes/PaginaUsuario/PaginaUsuario";
import ResetPassword from "./componentes/FormulariosIngreso/FormPassword/FormPassword.jsx";
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

        <Switch>
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/ordenes" component={ListaOrdenes2} />
          <Route exact path="/orden" component={Orden2} />
          {/*es temporal*/}
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/productos" component={Shop} />
          <Route exact path="/formulario-categoria" component={CrudCategoria} />
          <Route exact path="/producto/:id" component={Producto} />
          <Route exact path="/formulario-crud" component={FormularioCrud} />
          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/checkout2" component={Checkout} />
          <Route exact path="/listaordenes" component={OrdenesAdmin} />
          <Route exact path="/cambioPassword" component={ResetPassword} />
        </Switch>
      </Router>
    </div>
  );
}
