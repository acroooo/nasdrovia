import React from "react";
import "./App.css";
import SearchBar from "./componentes/SearchBar/SearchBar.jsx";
import Producto from "./componentes/Producto/Producto.jsx";
import FormularioCrud from "./componentes/FormularioCrud/FormularioCrud.jsx";

//React Router
//Ruta producto
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categoria from "./componentes/Categoria/Categoria";

export default function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/" component={Categoria} />
=======
        <Route path="/" component={SearchBar} />
        <Route exact path="/productos" component={Categoria} />
>>>>>>> 2bf570959fd2f39c0a83fb2030521b5c6caedd0b
        <Route exact path="/producto" component={Producto} />
        <Route exact path="/formulario-crud" component={FormularioCrud} />
      </Router>
    </div>
  );
}
