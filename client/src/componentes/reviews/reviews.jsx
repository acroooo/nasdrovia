import React from 'react'
import Usuario from "./usuario/usuario";
import Stars from "./stars/stars";
import Comentarios from "./comentario/comentario";

export default function (){
    return (
        <div className="Reviews-Component">
        <Usuario/>
        <Stars/>
        <Comentarios/>
        </div>
    )
}