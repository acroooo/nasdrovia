import React, { useState, useEffect } from "react";
import "./carroBoton.css";
import anime from "animejs/lib/anime.es.js";
import Axios from "axios";
import {useSelector} from "react-redux";

export default function CarroBoton({ nombreR, stock, productoId, precio }) {
  // estado redux
  const usuarioLogin = useSelector((state) => state.usuario);
  const idCarrito = useSelector((state) => state.carrito.CarritoCompleto.id)
  const [error, setError] = useState("")
  // estado hook
  const [cantidad, setCantidad] = useState(0);
  //effects
 useEffect( () => {
  const {id,carroId}= usuarioLogin;
      let list=[];
      
      if(cantidad===1){
      let producto={id:id, cantidad:cantidad, precio:precio}
      list.push(producto);
      console.log(list)
      const send={list};
      Axios.post(`http://localhost:3001/ordenes/${idCarrito}/cart`, send ).then((respuesta)=>{
        const asd = respuesta.data.lineaDeOrdens.map((item, index) => {
          let producto = {
            productoId: item.productoId,
            carritoId: idCarrito,
            cantidad: item.cantidad,
            precio: item.precio,
          }
        })
        setError(asd)

      })
    }
  },[cantidad]);

  useEffect(() => {
    if (cantidad === 0) {
      const tl = anime.timeline();
      anime.remove(`#carroBotonMin${nombreR}`);
      tl.add({
        targets: `#carroBotonMin${nombreR}`,
        opacity: 0,
        delay: -200,
        duration: 100,
      });
      anime.remove(`#cantidadCarro${nombreR}`);
      tl.add({
        targets: `#cantidadCarro${nombreR}`,
        opacity: 0,
        delay: -200,
        duration: 100,
      });
      anime.remove(`#carro${nombreR}`);
      tl.add({
        targets: `#carro${nombreR}`,
        marginLeft: -12,
        delay: -200,
        duration: 0,
      });
      anime.remove(`#carro-full${nombreR}`);
      tl.add({
        targets: `#carro-full${nombreR}`,
        width: 80,
        duration: 0,
      });
    }
    if (cantidad > 0) {
      const tl2 = anime.timeline();
      tl2.add({
        targets: `#carro-full${nombreR}`,
        width: 150,
        duration: 200,
      });
      tl2.add({
        targets: `#carro${nombreR}`,
        marginLeft: 55,
        delay: 200,
      });
      tl2.add({
        targets: `#carroBotonMin${nombreR}`,
        opacity: 1,
        duration: 100,
        delay: -25,
      });
      tl2.add({
        targets: `#cantidadCarro${nombreR}`,
        opacity: 1,
        duration: 100,
        delay: -25,
      });
    }
    if (cantidad < 0) {
      setCantidad(0);
    }
  }, [cantidad, stock]);
  function handleClick() {
    setCantidad(cantidad + 1);
    const tl = anime.timeline();
    tl.add({
      targets: `#carro${nombreR}`,
      scale: [{ value: 1 }, { value: 1.4 }, { value: 0.6, delay: 250 }],
      rotateY: 1080,
      translateY: -50,
      opacity: [{ value: 1 }, { value: 0, delay: 250 }],
      easing: "easeInOutSine",
      duration: 250,
    });
    tl.add({
      targets: `#carro${nombreR}`,
      rotateY: 0,
      translateY: 0,
      scale: 1,
      opacity: { value: 1, delay: 200 },
      easing: "easeInOutSine",
      duration: 100,
    });
  }
  function handleClickMin() {
    setCantidad(cantidad - 1);
  }
  return (
    <div className="carroBoton-Container">
      <div
        onClick={handleClickMin}
        className="carroBotonMin"
        id={`carroBotonMin${nombreR}`}
      >
        <i className="fas fa-minus-circle"></i>
      </div>
      <div id={`cantidadCarro${nombreR}`} className="cantidad-carro">
        {cantidad}
      </div>
      <div onClick={handleClick} className="carroBoton" id={`carro${nombreR}`}>
        <i
          className="fas fa-cart-plus"
          style={{ fontSize: 28, marginTop: 6 }}
          id={`icono${nombreR}`}
        ></i>
      </div>
    </div>
  );
}