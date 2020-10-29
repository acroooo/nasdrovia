import React from 'react'
import Stars from "./stars/stars";
import Comentarios from "./comentario/comentario";

export default function ({review, usuarioLoginId}){
    console.log(review)
    const {commentary, qualification, usuarioId}=review;
    return (
        <div className="Reviews-Component">
        <Stars calificacion={qualification} size={35}/>
        <Comentarios comentario={commentary}/>
        <div className="delete-review-css">
            
        </div>
        <div className="edit-review-css"></div>
        </div>
    )
}