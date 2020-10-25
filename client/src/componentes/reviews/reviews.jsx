import React from 'react'
import Usuario from "./usuario/usuario";
import Stars from "./stars/stars";
import Comentarios from "./comentario/comentario";

export default function ({review}){
    const {commentary, qualification}=review;
    return (
        <div className="Reviews-Component">
        <Usuario/>
        <Stars calificacion={qualification} size={35}/>
        <Comentarios comentario={commentary}/>
        </div>
    )
}