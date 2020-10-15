import React from "react";
import "./card.css"
import { cartButton } from "../../Multimedia/Svgs";
import { Carousel } from 'react-bootstrap';


const Card = (props) => {

    return (
        <div class="card">
            <a class="botoncontainer">
                <button class="btn btn-danger">{cartButton}</button>
            </a>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={props.imagen}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={props.imagen}
                            alt="second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={props.imagen}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="card-body">
                <div class="boton">
                    <div class="titulo">
                        <h2>{props.nombre}</h2>
                    </div>
                </div>
                <h2>{props.precio}</h2>
                <p></p>
                <h5></h5>
            </div>
        </div>
    )
}

export default Card