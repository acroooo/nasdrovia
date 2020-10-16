import React from 'react';
import './Login.css';

const Login = ()=>{
    return(
        <form className='formulario-login'>
               <div className="mensaje-bienvenida mb-5">
                <h2>Regístrate</h2>
                <p>¿Ya tienes un perfil personal? <span>Iniciar sesión</span></p>
                </div>

                <div className="grupo-formulario">
                    <input type="text" required/>
                    <label className='etiqueta'>Nombre</label>
                    <i className="fas fa-user"></i>
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

                <button className='mt-3'>Registrate</button>

        
        </form>
    )
};

export default Login;