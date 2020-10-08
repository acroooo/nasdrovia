import React from "react";
import "./card.css"
import { cartButton } from "../../Multimedia/Svgs";
import { Carousel } from 'react-bootstrap';

const card = (props) => {
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
                            src="https://cdn.shopify.com/s/files/1/1103/5152/products/cerveza-oettinger-schwarz_1024x1024.png?v=1553101014"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/1103/5152/products/cerveza-oettinger-schwarz_1024x1024.png?v=1553101014"
                            alt="second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/1103/5152/products/cerveza-oettinger-schwarz_1024x1024.png?v=1553101014"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="card-body">
                <div class="boton">
                    <div class="titulo">
                        <h2>IMPERIAL AMBER LAGER</h2>
                    </div>
                </div>
                <h2>$150</h2>
                <p></p>
                <h5></h5>
            </div>
        </div>
    )
}

export default card