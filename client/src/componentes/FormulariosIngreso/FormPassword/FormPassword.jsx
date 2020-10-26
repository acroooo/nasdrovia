import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Axios from "axios";

export default function FormPassword() {
  //--------------------- Hooks-----------------------
  const [inputValues, setInputValues] = useState({ email: null });
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    if (error) setError(false);
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValues.email) return setError(true);

    Axios.post("http://localhost:3000/cambioPassword", inputValues)
      .then((respuesta) => setToken(respuesta.data))
      .catch((err) => setError(err));
  };

  return (
    <form className="formulario-login" onSubmit={handleSubmit}>
      <div className="mensaje-bienvenida mb-5">
        <h3 className="mb-4">Cambio de Password</h3>
      </div>

      <div className="grupo-formulario mt-0">
        <input type="text" name="email" required onChange={handleChange} />
        <label className="etiqueta">Email</label>
        <i className="fas fa-envelope"></i>
      </div>

      <button className="mt-3">Enviar</button>
    </form>
  );
}
