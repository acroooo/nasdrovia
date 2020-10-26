import React from 'react'
import Stars from "./stars/stars";
import Comentarios from "./comentario/comentario";

export default function ({review}){
    const {commentary, qualification}=review;
    return (
        <div className="Reviews-Component">
        <Stars calificacion={qualification} size={35}/>
        <Comentarios comentario={commentary}/>
        </div>
    )
}