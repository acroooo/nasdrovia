import React from 'react'
import { useState, useEffect } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Axios from "axios";

export default function EditAlert({setDisplayEdit, comentario, calificacion, reviewId, productoId, setReviews, setPromedio}){
    const[editedComment, setEditedComment]= useState('');
    const[editedStars, setEditedStars]= useState(calificacion)

    useEffect(()=>{
        setEditedComment(comentario)
    },[])

    const onStarClick = (nextValue, prevValue, name) => {
        setEditedStars(nextValue.toString())
    }

    const handleChange = (e) => {
        setEditedComment({ text: e.target.value })
    }

    const submitFunction=()=>{
        let review = {
            commentary: editedComment.text,
            qualification: editedStars,
    }
    Axios.put(`http://localhost:3001/producto/${productoId}/review/${reviewId}`, review).then(res=>{
    setDisplayEdit(false)
    console.log(res)
    Axios.get(`http://localhost:3001/producto/${productoId}/review`).then((respuesta)=>{
        setReviews({res:respuesta.data, isLoaded:true})
    })
    Axios.get(`http://localhost:3001/producto/${productoId}/reviewprom`).then((respuesta) => {
        setPromedio({ res: respuesta.data, isLoaded: true })
    })

    })
}
    return (
        <div>
        <div className="closeWindow-css" onClick={()=>setDisplayEdit(false)}>
        <i className="fas fa-window-close"></i>
        </div>
        <div className="star-container-css" style={{fontSize: 35}}>
        <StarRatingComponent 
                name="submit"
                onStarClick={onStarClick}
                value={editedStars}
                starColor={"#ff0000"}
            />
        </div>
        <textarea type="text" onChange={handleChange} style={{width:"80vw", height:"12vh", size:200}} maxlength="12000">
        {comentario}
        </textarea>
        <div>
            <button onClick={submitFunction}>
                Editar comentario
            </button>
        </div>
        </div>
    )
}