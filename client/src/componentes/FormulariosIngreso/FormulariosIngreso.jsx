import React,{useState} from 'react';
import './FormulariosIngreso.css';
import Login from './Login/Login';

const FormulariosIngreso = ({accion,setAccion})=>{
   
   

    return accion.estado==='activo'&&(
          <div className="contenedor-formularios">
            <p className='salir' onClick={()=>setAccion({...accion,estado:'inactivo'})}>X</p>
            <Login/>
         </div>
       
    )
}

export default FormulariosIngreso;