import React from 'react';
import './Login.css';

const Login = ({setTipo})=>{
    return(
        <form className='formulario-login'>
               <div className="mensaje-bienvenida mb-5">
                <h2 className='mb-4'>Iniciar Sesión</h2>
                <p>¿Eres nuevo en este sitio? <span onClick={()=>setTipo('registrar')}>Regístrate</span></p>
                </div>

                <div className="grupo-formulario">
                    <input type="text" required/>
                    <label className='etiqueta' >Email</label>
                    <i className="fas fa-envelope"></i>
                </div>
                
                <div className="grupo-formulario">                 
                    <input type="password" required/>
                    <label className='etiqueta'>Contraseña</label>
                    <i className="fas fa-unlock"></i>
                </div>

                <div className="grupo-formulario">
                    <input type="password"  required/>
                    <label className='etiqueta' >Repetir contraseña</label>
                    <i className="fas fa-lock"></i>
                </div>
                <small>¿Olvidaste la contraseña?</small>

                <button className='mt-3'>Iniciar sesión</button>
        </form>
    )
};

export default Login;