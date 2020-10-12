import React, {useEffect} from "react";
import { SimpleImg } from 'react-simple-img';
import "./card.css"
import anime from 'animejs/lib/anime.es.js';

export default function Card ({producto, importance}) {
    const {nombre, precio, imagen, stock}=producto;
    const nombreR=nombre.replace(" ", "_");

    useEffect(() => {
            anime({
                targets: '.card',
                opacity:1 ,
                duration: 200,
                delay: anime.stagger(250),          
            })   
            
    }, [])
    function mouseEnterHandle(){
        const tl = anime.timeline();
        tl.add({
            targets:`#${nombreR}`,
            translateY:150,
            translateX:-95,
            opacity:1,
        })
        tl.add({
            targets:`#img${nombreR}`,
            rotate:-5,            
        })
    }
    function mouseLeaveHandle(){
        const tl = anime.timeline({
            duration:1000,
        })
        tl.add({
            targets:`#${nombreR}`,
            translateX:0,
            translateY: 0,
            opacity:0,
        })
        tl.add({
            targets:`#img${nombreR}`,
            rotate:0,
        })
    }
    return (
        
        <div  className="card" onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}>

            <button id={`carro${nombreR}`} className="carro">
            <i className="fas fa-shopping-bag icono-carro"/>
            </button>

            <div>
            <SimpleImg className="img"
            id={`img${nombreR}`}
            placeholder={false}
            animationDuration={0.25}
            importance={importance}
            src={imagen}
            alt={nombre}
            />
            
            </div>
            
            <div id={nombreR} className= {`decorativa ${nombreR}`}
            ></div>
            <div className="card-body">
            <div className="boton">

            

            <div className="info">
            <h2 
            className={`${nombreR} cerveza_nombre`}
            >{nombre}</h2>
            </div>
            </div>

            <h4 className="precio_nombre">precio:</h4>
            <h3 className="precio">${precio}</h3>
            <h5 className="stock">Stock:{stock}</h5>

            </div>
        </div>
    )
}
