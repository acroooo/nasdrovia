import React,{useState} from 'react';
import './Login.css';

const Login = ({setTipo,setUsuario,setFormulario,setLogueado})=>{


    const [datosAdmin,setDatosAdmin]=useState({});
    const [error,setError]=useState(false);
  
    
    const handleChange = e=>{
        setDatosAdmin({...datosAdmin,[e.target.name]:e.target.value})
    }
    const handleSubmit = e=>{
        e.preventDefault();
        const{email,contraseña}=datosAdmin;
        if(email==='admin@nasdrovia.com' && contraseña==='nasdrovia'){
            setError(false);
            setUsuario('admin');
            e.target.reset();
            setFormulario('inactivo')
            setLogueado(true);
        }else{
              setError(true)
        }
    }

 



    return(
        <form className='formulario-login' onSubmit={handleSubmit}>
               <div className="mensaje-bienvenida mb-5">
                <h2 className='mb-4'>Iniciar Sesión</h2>
                 <p>¿Eres nuevo en este sitio? <span onClick={()=>setTipo('registrar')}>Regístrate</span></p>
                 {error &&  <p className='error-login text-white'>Datos incorrectos</p>}
                </div>

                <div className="grupo-formulario">
                    <input type="text" name='email' required onChange={handleChange}/>
                    <label className='etiqueta' >Email</label>
                    <i className="fas fa-envelope"></i>
                </div>
                
                <div className="grupo-formulario">                 
                    <input type="password" name='contraseña' required onChange={handleChange}/>
                    <label className='etiqueta'>Contraseña</label>
                    <i className="fas fa-unlock"></i>
                </div>

                <small>¿Olvidaste la contraseña?</small>

                <button className='mt-3'>Iniciar sesión</button>
        </form>
    )
};

export default Login;