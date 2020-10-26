import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions/allActions";
import "./miniprod.css";
import CarritoBoton from "../CarritoBoton/CarritoBoton";

// ============== YA LLEGA TODO SOLO HAY QUE ACOMODAR ================== //

export default function Miniproduct(props) {
  const productos = useSelector((state) => state.productos.TodosLosProductos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.getProductoDetalle(props.productoId));
  }, []);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-3 col-md-2 col-lg-2 col-xl-2">
          <div className="product-image">
            <img
              className="img-fluid d-block mx-auto image"
              src={productos.images.map((item, index) => {
                return item[index];
              })}
            />
          </div>
        </div>
        <div className="col-sm-3 col-md-4 col-lg-4 col-xl-4 product-info">
          <div className="product-specs">
            <div>
              <span className="nombre">{productos.nombre}</span>
            </div>
            <div>
              <span className="value">Stock: {productos.stock}</span>
            </div>
            <div className="price">
              <span>Precio: {productos.precio}</span>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-2 col-lg-2 col-xl-2 quantity">
          <span>{productos.cantidad}</span>
          <CarritoBoton />
          <label className="cantidad" for="quantity">
            Cantidad
          </label>
          <input
            type="number"
            id="cantidad"
            className="form-control quantity-input"
            value="1"
          />
        </div>
      </div>
    </div>
  );
}   