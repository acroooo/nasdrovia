import React from "react";
import {
    NavDropdown,
} from "react-bootstrap";
import "./icons.css"

export default function Icons() {
    return (
        <div className="ui-css">
        <div className="carrito"><i class="fas fa-shopping-cart"></i></div>
        <NavDropdown title={<i className="fas fa-user-circle"></i>} id="basic-nav-dropdown">
        <NavDropdown.Item href="/formulario-categoria">Formulario Categoria</NavDropdown.Item>
        <NavDropdown.Item href="/formulario-crud">Formulario Producto</NavDropdown.Item>
        </NavDropdown>
        <div className="usuario"></div>
        </div>
    )
}