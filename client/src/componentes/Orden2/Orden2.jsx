import React from "react";
import "./Orden.css";
import Resumen from './Resumen';


const Orden2 = () => {
  const objeto = {
    cantidadProductos: 3,
    subtotal: 12000,
  };
  const productos = [
    {
      nombre: "Heineken",
      categoria: "Europea",
      cantidad: 1,
      precio: 1250,
      imagen:'https://i.pinimg.com/originals/35/c2/78/35c2787bbda4994398614730d8ffc61b.jpg'
    },
    {
      nombre: "Corona",
      categoria: "Latina",
      cantidad: 2,
      precio: 1250,
      imagen:'https://i.pinimg.com/originals/35/c2/78/35c2787bbda4994398614730d8ffc61b.jpg'
    },
  ];

  return (
    <section className="contenedor-resumen">
      <h6>RESUMEN DEL PEDIDO</h6>
      <Resumen productos={productos} objeto={objeto}/>
    </section>

  );
};

export default Orden2;
