import React from "react";
import { useSelector } from "react-redux";
import "./LineaOrdenes.css";
import Encabezado from "./Encabezado/Encabezado";
import Ordenes from "./TitulosOrdenes/TitulosOrdenes";
import Listado from "./Listado/Listado";
import Error404 from "../Error404/error404";

const LineaOrdenes = () => {
  //-------------------- State Redux------------
  //prettier-ignore
  const usuarioLogin = useSelector(state => state.usuario);

  if (usuarioLogin.rol.rol === "admin") {
    return (
      <div className="total-ordenes ">
        <div className="container general-ordenes ">
          <Encabezado />
          <Ordenes />
          <Listado />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Error404 />
    </div>
  );
};

export default LineaOrdenes;
