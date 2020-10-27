import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions/allActions";
import "./miniprod.css";
import CarritoBoton from "../CarritoBoton/CarritoBoton";

// ============== YA LLEGA TODO SOLO HAY QUE ACOMODAR ================== //

export default function Miniproduct({producto}) {
  const productos = useSelector((state) => state.productos.TodosLosProductos);
  const dispatch = useDispatch();
/*   useEffect(() => {
    dispatch(allActions.getProductoDetalle(props.productoId));
  }, []); */

  

  const aumentar = (id)=>{
    document.getElementById(id).value = parseInt(document.getElementById(id).value)+1;
  }
  const disminuir = (id)=>{
   
    if( document.getElementById(id).value>=1){
      document.getElementById(id).value = parseInt(document.getElementById(id).value)-1;
    }
    
  }



  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-3 col-md-2 col-lg-2 col-xl-2">
          <div className="product-image">
            <img
              className="img-fluid d-block mx-auto image"
              src={productos.images && productos.images.map((item, index) => {
                return item[index];
              })}
            />
          </div>
        </div>
        <div className="col-sm-3 col-md-4 col-lg-4 col-xl-4 product-info">
          <div className="product-specs">
            <div>
              <span className="nombre">Nombre: {producto.nombreR}</span>
            </div>
            <div>
              <span className="value">Stock: {producto.stock}</span>
            </div>
            <div className="price">
              <span>Precio: {producto.precio}</span>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-2 col-lg-2 col-xl-2 quantity">
          
      
      <div className="botones-aumentar d-flex">
          <p className='btn-accion' onClick={()=>aumentar(producto.nombreR)}>+</p>
          <p className='btn-accion' onClick={()=>disminuir(producto.nombreR)}>-</p>
      </div>
          <label className="cantidad" for="quantity">
            Cantidad
          </label>
          <input
            type="number"
            id="cantidad"
            className="form-control quantity-input"
            value={producto.cantidad}
            id={producto.nombreR}
        
          />
        </div>
      </div>
    </div>
  );
}