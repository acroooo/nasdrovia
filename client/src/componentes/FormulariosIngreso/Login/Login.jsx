import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Login.css";
import Axios from "axios";
import allActions from "../../../redux/actions/allActions.js";

const Login = ({ setTipo, cerrar }) => {
  const dispatch = useDispatch();
  // const usuarioLogin = useSelector((state) => state.usuario);
  const usuarioLogin = useSelector((state) => state.usuario);
  const rol = usuarioLogin.rol;
  console.log(usuarioLogin.rol);

  const [inputValues, setInputValues] = useState({});
  const [error, setError] = useState(false);
  const [sac, setSac] = useState("as");

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id;

    try {
      const usuario = await Axios.post(
        "http://localhost:3001/auth/login",
        inputValues
      );
      if (usuario.status === 201) dispatch(allActions.login(usuario.data));
      localStorage.setItem("idUsuario", JSON.stringify(usuario.data));
      if (!error) cerrar("inactivo");

      const carrito = await Axios.post(
        `http://localhost:3001/usuario/${usuario.data.id}/cart`
      );
      // if (carrito.status === 400) {
      //   const carritoCreado = await Axios.get(
      //     `http://localhost:3001/usuario/${usuario.data.id}/cart`
      //   );
      // }

      id = usuario.data.id;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="formulario-login" onSubmit={handleSubmit} id="cd">
      <div className="mensaje-bienvenida mb-5">
        <h2 className="mb-4">Iniciar Sesión</h2>
        <p>
          ¿Eres nuevo en este sitio?{" "}
          <span onClick={() => setTipo("registrar")}>Regístrate</span>
        </p>

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

      <Link to="/cambioPassword">
        <small>¿Olvidaste la contraseña?</small>
      </Link>

      <button className="mt-3 btn-ingresar" onClick={handleSubmit}>
        Iniciar sesión
      </button>

      <button class="btn-alternativo btn-fac d-flex align-items-center">
        <i className="fab fa-facebook-f mr-3 pl-3"></i>Continuar con Facebook
        <div className="sombra-facebook"></div>
      </button>

      <button class="btn-alternativo btn-goo d-flex align-items-center">
        <i className="fab fa-google mr-3 pl-3"></i>
        Continuar con Google
        <div className="sombra-facebook"></div>
      </button>
    </form>
  );
};

export default Login;
