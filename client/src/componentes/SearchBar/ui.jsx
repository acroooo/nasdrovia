import React,{useState} from "react";
import {
    NavDropdown,
} from "react-bootstrap";
import "./icons.css"
import FormulariosIngreso from '../FormulariosIngreso/FormulariosIngreso';

export default function Icons() {

    const [formulario,setFormulario]=useState('inactivo');
    const [tipo,setTipo]=useState('');
    const [usuario,setUsuario]=useState('');

    return (
        <div className="ui-css">
        <div className="carrito"><i class="fas fa-shopping-cart"></i></div>
        <NavDropdown title={<i className="fas fa-user-cog"></i>} id="basic-nav-dropdown">
        <NavDropdown.Item href="/formulario-categoria">Formulario Categoria</NavDropdown.Item>
        <NavDropdown.Item href="/formulario-crud">Formulario Producto</NavDropdown.Item>
        </NavDropdown>
       <div className='usuario-login d-flex align-items-center mt-1'>
           <i className="fas fa-user-circle pb-2 mr-2" onClick={()=>{setFormulario('activo');setTipo('registrar')}}></i>
           <p className='mr-5 text-white mb-2'>{usuario}</p>
       </div> 
       <FormulariosIngreso setUsuario={setUsuario} setTipo={setTipo} tipo={tipo} formulario={formulario}setFormulario={setFormulario}/>

        </div>
    )
}