import React from 'react'
import "./carroBoton.css";

export default function CarroBoton({handleClick, nombreR}){
    return (
        <div onClick={handleClick} className="carroBoton">
            <i class="fas fa-cart-plus" id={`icono${nombreR}`}></i>
        </div>
    )
}