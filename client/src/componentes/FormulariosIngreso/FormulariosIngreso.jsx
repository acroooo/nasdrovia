import React from "react";
import "./FormulariosIngreso.css";
import Login from "./Login/Login";
import Registro from "./Registro/Registro";

const FormulariosIngreso = ({ formulario, setFormulario, setTipo, tipo }) => {
  return (
    formulario === "activo" && (
      <div className="contenedor-formularios">
        <p
          className="salir text-white"
          onClick={() => setFormulario("inactivo")}
        >
          X
        </p>
        {tipo === "registrar" && <Registro setTipo={setTipo} />}
        {tipo === "ingresar" && (
          <Login setTipo={setTipo} cerrar={setFormulario} />
        )}
      </div>
    )
  );
};

export default FormulariosIngreso;
