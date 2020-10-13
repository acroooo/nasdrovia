import React, {useEffect} from "react";
import { SimpleImg } from 'react-simple-img';
import "./card.css"
import anime from 'animejs/lib/anime.es.js';


export default function Card ({producto, importance}) {
    const {nombre, precio, imagen, stock}=producto;
    const nombreR=nombre.replace(" ", "_");

    useEffect(() => {
            anime({
                targets: '.card-css',
                opacity:1 ,
                duration: 200,
                delay: anime.stagger(250),          
            })   
            
    }, [])
    function mouseEnterHandle(){
        const tl = anime.timeline({
            duration:600,
        });
        tl.add({
            targets:`#${nombreR}`,
            translateY:[-150, -55],
            translateX:-220,
            opacity:1,
        })
        tl.add({
            targets:`#img${nombreR}`,
            translateY:[55,-45],        
        })
    }
    function mouseLeaveHandle(){
        const tl = anime.timeline({
            duration:100,
        })
        tl.add({
            targets:`#${nombreR}`,
            translateX:0,
            translateY: 0,
            opacity:0,
        })
        tl.add({
            targets:`#img${nombreR}`,
            translateY:0,
            
        })
    }
    return (
        
        <div  className="card-css" onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}>

            <button id={`carro${nombreR}`} className="carro">
            <i className="fas fa-shopping-bag icono-carro"/>
            </button>

            <div>
            <SimpleImg className="img-product-card"
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
            <div className="card-body-css">
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

