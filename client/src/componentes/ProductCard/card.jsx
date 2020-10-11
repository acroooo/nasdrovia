import React from "react";
import { SimpleImg } from 'react-simple-img';
import "./card.css"


const card = ({producto, importance}) => {
    const {nombre, precio, imagen, stock}=producto;
    return (
        
        <div class="card">
                <button class="carro"><i className="fas fa-shopping-bag icono-carro"></i></button>
            <div>
            <SimpleImg className="img"
            placeholder={false}
            animationDuration={0.25}
            importance={importance}
            src={imagen}
            alt={nombre}
            />
            </div>
            <div className= {`decorativa ${nombre.replace(" ", "_")}`}
            ></div>
            <div className="card-body">
                <div class="boton">
                    <div class="titulo">
                        <h2 className={`${nombre.replace(" ", "_")}`}
                        >{nombre}</h2>
                    </div>
                </div>
                <h4 className="precio">precio:</h4>
                <h3>${precio}</h3>
                <h5>Stock:{stock}</h5>
            </div>
        </div>
    )
}

export default card