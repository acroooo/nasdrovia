import React from "react";
import "./App.css";
import Producto from "./componentes/Producto/Producto";
import SearchBar from "./componentes/SearchBar/SearchBar.jsx";

//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categoria from "./componentes/Categoria/Categoria";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Categoria />
        <Route path="/" component={SearchBar} />
        <Producto />
      </Router>
    </div>
  );
}
