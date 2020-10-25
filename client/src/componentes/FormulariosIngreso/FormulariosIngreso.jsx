import React,{useState} from 'react';
import './FormulariosIngreso.css';
import Login from './Login/Login';
import Registro from './Registro/Registro';

const FormulariosIngreso = ({formulario,setFormulario,setTipo,tipo,setUsuario,setLogueado,setRol})=>{
   
     

    return formulario==='activo'&&(
          <div className="contenedor-formularios">
            <p className='salir text-white' onClick={()=>setFormulario('inactivo')}>X</p>
               {tipo === 'registrar' && <Registro  setTipo={setTipo}/>}
               {tipo === 'ingresar' &&  <Login setLogueado={setLogueado} setTipo={setTipo} setUsuario={setUsuario} setFormulario={setFormulario} setRol={setRol}/>}
            
         </div>
       
    )
}

export default FormulariosIngreso;