import React, {useState, useEffect} from 'react'
import "./carroBoton.css";
import anime from 'animejs/lib/anime.es.js';

export default function CarroBoton({nombreR}){
    const [cantidad, setCantidad]= useState(0);
    useEffect(()=>{
        if(cantidad===0){
            const tl = anime.timeline();
            tl.add({
                targets:`#carroBotonMin${nombreR}`,
                opacity:0,
                delay:-200,
                duration:100,
            })
            tl.add({
                targets:`#cantidadCarro${nombreR}`,
                opacity:0,
                delay:-200,
                duration:100
            })
            tl.add({
                targets:`#carro${nombreR}`,
                marginLeft:-12,
                delay:-200,
                duration:0,
            })
            tl.add({
                targets:`#carro-full${nombreR}`,
                width:80,
                duration:0,
            })        
        }
        if(cantidad>0){
            const tl2= anime.timeline();
            tl2.add({
                targets:`#carro-full${nombreR}`,
                width:150,
                duration:200,
            })
            tl2.add({
                targets:`#carro${nombreR}`,
                marginLeft:55,
                delay:200,
            })
            tl2.add({
                targets:`#carroBotonMin${nombreR}`,
                opacity:1,
                duration:100
            })
            tl2.add({
                targets:`#cantidadCarro${nombreR}`,
                opacity:1,
                duration:100,
                
            })
        }
        if(cantidad<0){
            setCantidad(0)
        }
    },[cantidad])
    function handleClick(){
        setCantidad(cantidad+1);
        const tl = anime.timeline();
            tl.add(
                {
                targets:`#carro${nombreR}`,
                scale: [{value: 1}, {value: 1.4}, {value: 0.6, delay: 250}],
                rotateY: 1080,
                translateY:-50,
                opacity:[{value:1},{value:0, delay:250}],
                easing: 'easeInOutSine',
                duration: 250,
            }
            );
            tl.add({
            targets:`#carro${nombreR}`,
            rotateY:0,
            translateY:0,
            scale:1,
            opacity:{value:1,delay:200},
            easing: 'easeInOutSine',
            duration:100,
        })
        }
        function handleClickMin(){
            setCantidad(cantidad-1);
        }
    return (
        <div className="carroBoton-Container">
        <div onClick={handleClickMin}
        className="carroBotonMin"
        id={`carroBotonMin${nombreR}`}>
        <i className="fas fa-minus-circle"></i>
        </div>
        <div id={`cantidadCarro${nombreR}`} className="cantidad-carro">{cantidad}</div>
        <div onClick={handleClick} className="carroBoton" id={`carro${nombreR}`}>
            <i className="fas fa-cart-plus" id={`icono${nombreR}`}></i>
        </div>
        </div>
    )
}