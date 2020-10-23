import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import Axios from "axios";
import allActions from "../../../redux/actions/allActions.js";

const Login = ({ setTipo, setUsuario, setFormulario, setLogueado }) => {
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({});
  const [error, setError] = useState(false);
  const [logeado, setLogeado] = useState("");

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  // const{email,contraseña}=datosAdmin;
  // if(email==='admin@nasdrovia.com' && contraseña==='nasdrovia'){
  //     setError(false);
  //     setUsuario('admin');
  //     e.target.reset();
  //     setFormulario('inactivo')
  //     setLogueado(true);
  // }else{
  //       setError(true)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValues.email || !inputValues.password) {
      return setError(true);
    }
    // setError(false);
    try {
      const usuario = await Axios.post(
        "http://localhost:3001/auth/login",
        inputValues
      );
      dispatch(allActions.login(usuario.data));
      setLogeado("Su sesión se ha iniciado con exito!");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form className="formulario-login" onSubmit={handleSubmit}>
      <div className="mensaje-bienvenida mb-5">
        <h2 className="mb-4">Iniciar Sesión</h2>
        <p>
          ¿Eres nuevo en este sitio?{" "}
          <span onClick={() => setTipo("registrar")}>Regístrate</span>
        </p>
        <button class="btn-alternativo btn-fac d-flex align-items-center">
          <i className="fab fa-facebook-f mr-3 pl-3"></i>Continuar con Facebook
          <div className="sombra-facebook"></div>
        </button>
        <button class="btn-alternativo btn-goo d-flex align-items-center">
          <i className="fab fa-google mr-3 pl-3"></i>
          Continuar con Google
          <div className="sombra-facebook"></div>
        </button>
        {error && <p className="error-login text-white">Datos incorrectos</p>}
      </div>

      <div className="grupo-formulario mt-0">
        <input type="text" name="email" required onChange={handleChange} />
        <label className="etiqueta">Email</label>
        <i className="fas fa-envelope"></i>
      </div>

      <div className="grupo-formulario">
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <label className="etiqueta">Contraseña</label>
        <i className="fas fa-unlock"></i>
      </div>

      <small>¿Olvidaste la contraseña?</small>

      <button className="mt-3">Iniciar sesión</button>
    </form>
  );
};

export default Login;
