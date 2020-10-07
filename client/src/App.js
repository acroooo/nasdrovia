import React from "react";
import "./App.css";
import SearchBar from "./componentes/SearchBar/SearchBar.jsx";
import Producto from './componentes/Producto/Producto.jsx';

//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categoria from "./componentes/Categoria/Categoria";

export default function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" component={SearchBar} />
        <Categoria />
        <Route path="/producto" component={Producto} />
      </Router>
    </div>
  );
}
