import React, { useState } from "react";
import "./icons.css";
import FormulariosIngreso from "../FormulariosIngreso/FormulariosIngreso";
import PanelAdmin from "../PanelAdmin/PanelAdmin";
import { Link } from "react-router-dom";
import Axios from "axios";
import allActions from "../../redux/actions/allActions";
import { useSelector, useDispatch } from "react-redux";

export default function Icons() {
  //-----------State Redux ------------------
  const usuarioLogin = useSelector((state) => state.usuario);
  const rol = usuarioLogin.rol;
  const dispatch = useDispatch();

  //-------------Hooks------------
  const [formulario, setFormulario] = useState("inactivo"); //mostrar u ocultar formulario
  const [tipo, setTipo] = useState(""); //acción registro o inicio de sesión

  const cerrarSesion = () => {
   
    // {"list":[
    //   { "id": 7, "cantidad": 10, "precio": 10000},
    //   { "id": 6, "cantidad": 20, "precio": 20000},
    //   { "id": 5, "cantidad": 30, "precio": 300005}
    // ]}
    const carrito = JSON.parse(localStorage['carrito']);
    let productos ={};
    productos.list=carrito;
    /* console.log(productos)
    console.log({productos}) */
    let parseado = JSON.stringify(productos);
    let objeto = {
      productos:productos
    }
    console.log(objeto)
    

    
   Axios.post(`http://localhost:3001/ordenes/${usuarioLogin.carroId}/cart`,JSON.stringify(objeto))
   .then((res)=>{
     console.log(res)
   })
   .catch((err)=>{
     console.log(err)
   })

    Axios.post("http://localhost:3001/auth/logout")
      .then(() => {
        dispatch(allActions.logout());
      })
      .catch((err) => err);

      //limpiar carrito de local storage
      localStorage.removeItem('carrito');
  };

  return (
    <div className="ui-css">
      <Link to="/carrito">
        <div className="contenedor-salir">
          <i className="fas fa-shopping-cart"></i>
          <small className="ml-1">Carrito</small>
        </div>
      </Link>

      {usuarioLogin.rol === "Guest" && (
        <div className="contenedor-salir">
          <i
            className="fas fa-user-circle "
            onClick={() => {
              setFormulario("activo");
              setTipo("registrar");
            }}
          ></i>
          <small className="ml-1">Entrar</small>
        </div>
      )}

      {rol === "Client" && (
        <Link to="/perfil">
          <div className="contenedor-salir">
            <i className="fas fa-user login-user"></i>
            <small className="ml-1">Perfil</small>
          </div>
        </Link>
      )}

      {rol === "admin" && (
        <div className="contenedor-salir">
          <i
            className="fas fa-tools"
            onClick={() =>
              document.getElementById("panel").classList.toggle("mostrar")
            }
          ></i>
          <small className="ml-1">Panel</small>
        </div>
      )}

      {usuarioLogin.rol !== "Guest" && (
        <div className="contenedor-salir">
          <Link to="/productos">
            <i className="fas fa-sign-out-alt" onClick={cerrarSesion}></i>
          </Link>
          <small className="ml-1">Salir</small>
        </div>
      )}

      {rol === "admin" && <PanelAdmin />}

      <FormulariosIngreso
        setTipo={setTipo}
        tipo={tipo}
        formulario={formulario}
        setFormulario={setFormulario}
      />
    </div>
  );
}
