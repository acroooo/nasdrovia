import React, {useEffect, useState} from 'react'
import Axios from "axios";
import Loader from "../Loader/Loader";

export default function AllReviews({pId}){
const[reviews, setReviews] = useState({res:null, isLoaded:false})

useEffect(async()=>{
    const response = await Axios.get(`localhost:3001/producto/1/review`);
    setReviews({res:response, isLoaded:true});
},[])
    return (
        <div className="allReviews">
        asdada  
        </div>
    )
}

/*
            {reviews.isLoaded ?
            <div>

            </div>
            : <Loader/>}
            */