import React from "react";
import "./ProductInfo.css";
import Panel from './PanelCarrito/PanelCarrito';
import PanelCarrito from "./PanelCarrito/PanelCarrito";
import AllReviews from "../reviews/allReviews";
// import { useSelector, useDispatch } from "react-redux";

const ProductInfo = () => {
  let productoPrueba = {
    id: 2,
    nombre: "Corona",
    precio: "2200",
    imagen1:
      "https://andresconrapidez.com/wp-content/uploads/2019/04/Corona-710ml-1.jpg",
    imagen2:
      "https://andresconrapidez.com/wp-content/uploads/2019/04/Corona-710ml-1.jpg",
    imagen3:
      "https://andresconrapidez.com/wp-content/uploads/2019/04/Corona-710ml-1.jpg",
    cantidad: 2,
    descripcion:
      "Es de las mejores chelas del mercado, ¿Que esperas para disfrutarla?",
  };

 

  return (
    <div className="general-product-info ">
      <p className="texto-nombre-seccion">
        Inicio / <span>{productoPrueba.nombre}</span>{" "}
      </p>
      <section className="container general-product-info">
        <div className="row">
          <aside className="col-2 text-center mt-3">
            <img src={productoPrueba.imagen1} />
            <img src={productoPrueba.imagen2} />
            <img src={productoPrueba.imagen3} />
          </aside>
          <main className="col-6  text-center">
            <img src={productoPrueba.imagen1} />
          </main>
          <section className="col-4 ">
            <p className="nombre">{productoPrueba.nombre}</p>
            <h3>${productoPrueba.precio}</h3>
            <p className="descripcion">{productoPrueba.descripcion}</p>

            <div className="cantidad-productInfo">
              <i className="fas fa-minus"></i>
              <small>3</small>
              <i className="fas fa-plus"></i>
            </div>


            <button onClick={()=>document.getElementById('panel-carrito').classList.toggle('mostrar-carritopanel')}>Agregar al carrito</button>
          </section>
        </div>
      </section>
      <PanelCarrito />
      <div className="allReviews-css">
  {/*       <AllReviews  /> */}
      </div>
    </div>
  );
};

export default ProductInfo;
