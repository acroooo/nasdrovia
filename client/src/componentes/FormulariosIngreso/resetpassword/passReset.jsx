import React, { useState } from 'react';
import './passReset.css';

const Login = ({ setFormulario, setLogueado }) => {

    const [contr1, setContr1] = useState();
    const [contr2, setContr2] = useState();
    const [error, setError] = useState(false);

    const handleChange1 = e => {
        setContr1(e.target.value)
    }
    const handleChange2 = e => {
        setContr2(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (contr1 === contr2) {
            setError(false);
            setFormulario('inactivo')
            setLogueado(true);
        } else {
            setError(true)
        }
    }

    return (
        <form className='formulario-login' onSubmit={handleSubmit}>
            <div className="mensaje-bienvenida mb-5">
                <h2 className='mb-4'>Resetear Contraseña</h2>
                {error && <p className='error-login text-white'>Las contraseñas no coinciden</p>}
            </div>

            <div className="grupo-formulario">
                <input type="password" name='contraseña' required onChange={handleChange1} />
                <label className='etiqueta'>Contraseña nueva</label>
                <i className="fas fa-unlock"></i>
            </div>

            <div className="grupo-formulario">
                <input type="password" name='contraseña' required onChange={handleChange2} />
                <label className='etiqueta'>repetir Contraseña</label>
                <i className="fas fa-unlock"></i>
            </div>

            <button className='mt-3'>Confirmar</button>
        </form>
    )
};

export default Login;