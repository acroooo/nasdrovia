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
    useEffect(() => {
        Axios.get(`http://localhost:3001/producto/${id}/review`).then((response) => {
            setReviews({ res: response.data, isLoaded: true });
        });
        Axios.get(`http://localhost:3001/producto/${id}/reviewprom`).then((respuesta) => {
            setPromedio({ res: respuesta.data, isLoaded: true })

        })
    
    }, [])
    const handleCick = () => {
        let review = {
            commentary: comentario.text,
            qualification: rating.number,
            usuarioId: usuarioLogin.id.id,
        }
        Axios.post(`http://localhost:3001/producto/${id}/review`, review)

    }

    const handleChange = (e) => {
        setComentario({ text: e.target.value })
    }
    const onStarClick = (nextValue, prevValue, name) => {
        setRating({ number: nextValue.toString() })
    }

    return (
        <div className="allReviews">
            <div className="promedio">
                {promedio.isLoaded ?
                    <div>
                        <h3>Opiniones sobre Este producto</h3>
                        <h1>{~~promedio.res+1} estrellas</h1>
                        <Stars
                            calificacion={~~promedio.res+1}
                            size={35}
                        />
                    </div> : <Loader />
                }
                {reviews.isLoaded ?
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
                : <Loader />}

            {usuarioLogin.id === 0 ? <></> :
                <PostReview
                    handleCick={handleCick}
                    handleChange={handleChange}
                    onStarClick={onStarClick}
                    rating={rating}
                />}
        </div>
    )
}

