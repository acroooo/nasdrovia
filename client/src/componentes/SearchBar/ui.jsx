import React,{useState} from "react";
import {
    NavDropdown,
} from "react-bootstrap";
import "./icons.css"
import FormulariosIngreso from '../FormulariosIngreso/FormulariosIngreso';

export default function Icons() {

    const [formulario,setFormulario]=useState('inactivo');//mostrar u ocultar formulario
    const [tipo,setTipo]=useState('');//acción registro o inicio de sesión
    const [usuario,setUsuario]=useState('Ingresar');//tipo de usuario que ingresa, admin,user etc,cambia al momento de activar login
    const [logueado,setLogueado]=useState(false);//determinar si el usuario está logueado

    const cerrarSesion = ()=>{
        setLogueado(false);
        setUsuario('Ingresar');//para mostrar mensaje de ingresar 
        setFormulario('inactivo');
        setTipo('');
    }

    return (
        <div className="ui-css">
        <div className="carrito ">
            <i class="fas fa-shopping-cart"></i>
            
            </div>
        {/* <NavDropdown className='bg-dark p-0' title={<i className="fas fa-user-cog"></i>} id="basic-nav-dropdown">
        <NavDropdown.Item href="/formulario-categoria">Formulario Categoria</NavDropdown.Item>
        <NavDropdown.Item href="/formulario-crud">Formulario Producto</NavDropdown.Item>
        </NavDropdown>   */}  
        <div className="contenedor-login">
            {logueado ?  <i class="fas fa-user login-user"></i>:<i class="fas fa-user-circle login-user"  onClick={()=>{setFormulario('activo');setTipo('registrar')}}></i>}
            <small>{usuario}</small>
        </div>

        {logueado &&
        <div className="contenedor-salir">
        <i class="fas fa-sign-out-alt" onClick={cerrarSesion}></i>
            <small className='ml-1'>Salir</small>
        </div>
        }
        

       <FormulariosIngreso setLogueado={setLogueado} setUsuario={setUsuario} setTipo={setTipo} tipo={tipo} formulario={formulario}setFormulario={setFormulario}/>

        </div>
    )
}