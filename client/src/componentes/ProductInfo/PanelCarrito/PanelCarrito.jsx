import React from "react";
import "./PanelCarrito.css";
import hei from "../../../Multimedia/hei.png";

const PanelCarrito = () => {
  return (
    <div className="contenedor-panel" id='panel-carrito'>
      <div>
        <div className="ocultar">
          <p className="titulo-pc">
            <i class="fas fa-angle-right mr-5 ml-3"onClick={()=>document.getElementById('panel-carrito').classList.toggle('mostrar-carritopanel')}></i>
            <span className="carr">Carrito</span>
          </p>
        </div>

        <div className="item-panel ">
          <img className='img-panelc' src={hei} alt="cerveza" />
          <div className="subitem-panel">
            <p>Corona</p>
            <p className="precio-subitem">$ 34.456</p>

            <div className="cantidad-productInfo">
              <i className="fas fa-minus"></i>
              <small>3</small>
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="item-panel ">
          <img className='img-panelc' src={hei} alt="cerveza" />
          <div className="subitem-panel">
            <p>Corona</p>
            <p className="precio-subitem">$ 34.456</p>

            <div className="cantidad-productInfo">
              <i className="fas fa-minus"></i>
              <small>3</small>
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="item-panel ">
          <img className='img-panelc' src={hei} alt="cerveza" />
          <div className="subitem-panel">
            <p>Corona</p>
            <p className="precio-subitem">$ 34.456</p>

            <div className="cantidad-productInfo">
              <i className="fas fa-minus"></i>
              <small>3</small>
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>


      </div>

      <div >
        <div className="subtotal-panel"> 
         <h4>Subtotal</h4>
         <p>$12.567</p>
         </div>
        <div className="ver-carrito">
          <button>Ver carrito</button>
        </div>
      </div>
    </div>
  );
};

export default PanelCarrito;
