import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import "./icons.css";
import FormulariosIngreso from "../FormulariosIngreso/FormulariosIngreso";
import PanelAdmin from "../PanelAdmin/PanelAdmin";
import { Link } from "react-router-dom";

export default function Icons() {
  const [formulario, setFormulario] = useState("inactivo"); //mostrar u ocultar formulario
  const [tipo, setTipo] = useState(""); //acción registro o inicio de sesión
  const [usuario, setUsuario] = useState("Ingresar"); //tipo de usuario que ingresa, admin,user etc,cambia al momento de activar login
  const [logueado, setLogueado] = useState(false); //determinar si el usuario está logueado

  const cerrarSesion = () => {
    setLogueado(false);
    setUsuario("Ingresar"); //para mostrar mensaje de ingresar
    setFormulario("inactivo");
    setTipo("");
  };

  return (
    <div className="ui-css">
      <Link to="/carrito">
        <div className="carrito ">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </Link>
      <div className="contenedor-login">
        {logueado ? (
          <i className="fas fa-user login-user"></i>
        ) : (
          <i
            className="fas fa-user-circle login-user"
            onClick={() => {
              setFormulario("activo");
              setTipo("registrar");
            }}
          ></i>
        )}
        <small>{usuario}</small>
      </div>

      <div className="admin" id="a">
        {logueado && (
          <i
            className="fas fa-tools"
            onClick={() =>
              document.getElementById("panel").classList.toggle("mostrar")
            }
          ></i>
        )}
        {logueado && <small className="ml-1">Panel</small>}
      </div>
      {logueado && (
        <div className="contenedor-salir">
          <i className="fas fa-sign-out-alt" onClick={cerrarSesion}></i>
          <small className="ml-1">Salir</small>
        </div>
      )}

      <PanelAdmin />

      <FormulariosIngreso
        setLogueado={setLogueado}
        setUsuario={setUsuario}
        setTipo={setTipo}
        tipo={tipo}
        formulario={formulario}
        setFormulario={setFormulario}
      />
    </div>
  );
}
