import React, { useState } from "react";
import "./icons.css";
import FormulariosIngreso from "../FormulariosIngreso/FormulariosIngreso";
import PanelAdmin from "../PanelAdmin/PanelAdmin";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import allActions from "../../redux/actions/allActions";
import { useSelector, useDispatch } from "react-redux";

export default function Icons() {
  //-----------State Redux ------------------
  const usuarioLogin = useSelector((state) => state.usuario);
  const rol = usuarioLogin.rol.rol;
  const dispatch = useDispatch();

  //-------------Hooks------------
  const [formulario, setFormulario] = useState("inactivo"); //mostrar u ocultar formulario
  const [tipo, setTipo] = useState(""); //acción registro o inicio de sesión
  const [usuario, setUsuario] = useState("Ingresar"); //tipo de usuario que ingresa, admin,user etc,cambia al momento de activar login
  const [logueado, setLogueado] = useState(false); //determinar si el usuario está logueado

  const cerrarSesion = () => {
    Axios.post("http://localhost:3001/auth/logout")
      .then(() => {
        dispatch(allActions.logout());
        // <Redirect to="/productos" />;
        // dispatch(allActions.deleteCarrito());
      })
      .catch((err) => err);
  };

  return (
    <div className="ui-css">
      <Link to="/carrito">
        <div className="carrito ">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </Link>
      <div className="contenedor-login">
        {rol === "admin" || rol === "Client" ? (
          <Link to="perfil">
            {" "}
            <i className="fas fa-user login-user"></i>
          </Link>
        ) : (
          <i
            className="fas fa-user-circle login-user"
            onClick={() => {
              if (rol !== "admin" && rol !== "Client") {
                setFormulario("activo");
                setTipo("registrar");
              }
            }}
          ></i>
        )}
        <Link to={rol === "admin" || rol === "Client" ? "perfil" : null}>
          <small
            className={rol === "Client" || rol === "admin" ? "ml-1" : "null"}
            id="loguser"
          >
            {rol === "admin" || rol === "Client" ? "Perfil" : "Ingresar"}
          </small>
        </Link>
      </div>

      <div className="admin" id="a">
        {rol === "admin" && (
          <i
            className="fas fa-tools"
            onClick={() =>
              document.getElementById("panel").classList.toggle("mostrar")
            }
          ></i>
        )}
        {rol === "admin" && <small className="ml-1">Panel</small>}
      </div>
      {rol === "admin" || rol === "Client" ? (
        <div
          className={
            rol === "Client"
              ? "contenedor-salir salir-client"
              : "contenedor-salir"
          }
        >
          <i className="fas fa-sign-out-alt" onClick={cerrarSesion}></i>
          <small className="ml-1">Salir</small>
        </div>
      ) : null}

      {rol === "admin" && <PanelAdmin />}

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
