import React, { useEffect, useState } from 'react'
import Axios from "axios";
import Loader from "../Loader/Loader";
import Reviews from "./reviews";
import Stars from "./stars/stars";
import { useSelector } from "react-redux";
import PostReview from "./postReview";


export default function AllReviews({ id }) {
    const [reviews, setReviews] = useState({ res: null, isLoaded: false })
    const [promedio, setPromedio] = useState({ res: null, isLoaded: false })
    const usuarioLogin = useSelector((state) => state.usuario);
    const [comentario, setComentario] = useState({ text: "" });
    const [rating, setRating] = useState({ number: "0" });
    const [checkedUsuario, setCheckedUsuario]=useState({res:null, isSet:false})
    useEffect(async() => {
        const revs= await Axios.get(`http://localhost:3001/producto/${id}/review`)
        try{
            console.log(revs)
            setReviews({res:revs.data, isLoaded:true})
        } catch(error){
            console.log(error);
        }
        Axios.get(`http://localhost:3001/producto/${id}/reviewprom`).then((respuesta) => {
            setPromedio({ res: respuesta.data, isLoaded: true })

        })
    }, [])
    useEffect(()=>{
        if(reviews.isLoaded){
        const check=checkUsuarioPost()
        console.log(check)
        setCheckedUsuario({res:check, isSet:true})}
    },[reviews])
    const handleCick = () => {
        let review = {
            commentary: comentario.text,
            qualification: rating.number,
            usuarioId: usuarioLogin.id.id,
        }
        Axios.post(`http://localhost:3001/producto/${id}/review`, review)

    }
    const onStarClick = (nextValue, prevValue, name) => {
        setRating({ number: nextValue.toString() })
    }
    const checkUsuarioPost=()=>{
        let res;
        if (reviews.isLoaded){
        reviews.res.forEach((review)=>{
            console.log("acá esoty usuario Check-----------------"+review.usuarioId.toString()+usuarioLogin.id.id.toString())
            if(review.usuarioId.toString() ===usuarioLogin.id.id.toString() ){
                res= true;
            }else{
                res= false;
            }
        })   
        return !!res;
    }
    }
    return (
        <div className="allReviews">
          {usuarioLogin.id === 0 && checkedUsuario.isSet || checkedUsuario.res? <></> :
                <PostReview
                    handleCick={handleCick}
                    setComentario={setComentario}
                    onStarClick={onStarClick}
                    rating={rating}
                />}
            <div className="promedio">
                {promedio.isLoaded && ~~promedio.res!==0?
                    <div>
                    
                        <h3>Opiniones sobre Este producto</h3>
                        <h1>{~~promedio.res+1} estrellas</h1>
                        <Stars
                            calificacion={~~promedio.res+1}
                            size={35}
                        />
                    </div> :<></>
                }
                {reviews.isLoaded && ~~promedio!==0 ?
                    <p>Promedio entre {reviews.res.length} </p> : <></>
                }
            </div>
            {reviews.isLoaded ?
                <div>
                    {reviews.res.map((review, i) => {
                        return (
                            <Reviews
                                review={review}
                                key={i}
                            />
                        )
                    })
                    }
                </div>
                : <></>}

          
        </div>
    )
}

