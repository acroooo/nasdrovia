import React, {useState} from 'react'
import Stars from "./stars/stars";
import Comentarios from "./comentario/comentario";
import Axios from "axios";
import EditAlert from "./editAlert";

export default function ({review, usuarioLoginId, productoId, setReviews, setPromedio}){
    const[displayEdit, setDisplayEdit]=useState(false);
    const handleDelete=()=>{
        ///:id/review/:idReview
        Axios.delete(`http://localhost:3001/producto/${productoId}/review/${review.id}`).then(()=>{
            Axios.get(`http://localhost:3001/producto/${productoId}/review`).then((respuesta)=>{
                setReviews({res:respuesta.data, isLoaded:true})
            })
            Axios.get(`http://localhost:3001/producto/${productoId}/reviewprom`).then((respuesta) => {
                setPromedio({ res: respuesta.data, isLoaded: true })
            })
        })
    }
    const handleEdit=(e)=>{
        setDisplayEdit(true);
    }
    const {commentary, qualification, usuarioId}=review;
    return (
        <div className="Reviews-Component">
        <Stars calificacion={qualification} size={35}/>
        <Comentarios comentario={commentary}/>
        {usuarioLoginId === usuarioId?
        <div>
        <div className="delete-review-css" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
        </div>
        <div className="edit-review-css" onClick={handleEdit}>
        <i className="fas fa-edit"></i>
        </div>
        </div>
        :<></>}

        {
            displayEdit?
            <EditAlert 
            setDisplayEdit={setDisplayEdit}
            comentario={commentary}
            calificacion={qualification}
            reviewId={review.id}
            productoId={productoId}
            setReviews={setReviews}
            setPromedio={setPromedio}
            />:
            <></>
            
        }
        </div>
    )
}