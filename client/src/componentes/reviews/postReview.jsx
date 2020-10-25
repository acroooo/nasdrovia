import React, {useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Axios from "axios";

export default function PostReview({handleChange,handleCick, onStarClick, rating}){
 
    return (
        <div>
        <form action="Submit-Review" >
            <input type="text" onChange={handleChange} style={{width:"80vw", height:"12vh", size:200}}/>
            
        </form>
        <div className="star-container-css" style={{fontSize: 35}}>
        
            
        <StarRatingComponent 
                name="submit"
                onStarClick={onStarClick}
                value={rating.number}
                starColor={"#ff0000"}
                
            />
        </div>
        <button className="submitbtn-css" onClick={handleCick}>
            Recomendar
        </button>
        </div>
    )
} 