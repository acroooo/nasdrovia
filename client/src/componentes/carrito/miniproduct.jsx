import React, { useState, useEffect } from "react";
import "./miniprod.css"

export default function Miniproduct(props) {
    const { nombre, precio, imagen, stock, cantidad } = props.producto;
    const { setListaProductos, listaproductos, index } = props;

    useEffect(() => {
        if (cantidad === 0) {
            setListaProductos({ res: listaproductos.res.splice(index, 1), isLoaded: true })
        }
    }, [cantidad])

    function handleClickMas() {
        setListaProductos({
            res: listaproductos.res.map(e => {
                if (e.nombre === nombre) {
                    e.cantidad++;
                }
                return e;
            }), isLoaded: true
        })
    }
    function handleClickMenos() {
        setListaProductos({
            res: listaproductos.res.map(e => {
                if (e.nombre === nombre) {
                    e.cantidad--;
                }
                return e;
            }), isLoaded: true
        })
    }
    return (
        <div className="container-fluid" >
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-3 col-md-2 col-lg-2 col-xl-2">
                    <div className="product-image">
                        <img className="img-fluid d-block mx-auto image" src={imagen} />
                    </div>
                </div>
                <div className="col-sm-3 col-md-4 col-lg-4 col-xl-4 product-info">
                    <div className="product-specs">
                        <div><span className="nombre">{nombre}</span>
                        </div>
                        <div><span className="value">Stock: {stock}</span>
                        </div>
                        <div className="price">
                            <span>Precio: {precio}</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 col-md-2 col-lg-2 col-xl-2 quantity">
                    <span>{cantidad}</span>
                    <button onClick={handleClickMas}>+</button>
                    <button onClick={handleClickMenos}>-</button>
                    {/* <label className="cantidad" for="quantity">Cantidad</label><input type="number" id="cantidad" className="form-control quantity-input" value="1" /> */}
                </div>
            </div>
        </div>
    );
}