import React, { useState, useEffect } from "react";
import Producto from "../Producto/Producto";

export default function Categoria({ productosArr, categorias }) {
  const [categoriasDisplay, setCategoriasDisplay] = useState(productosArr);

  function handleChange(e) {

    setCategoriasDisplay(
      productosArr.filter((producto) => {
        console.log(producto.categoria)
        return producto.categoria === e.target.value.toLowerCase();
      })
    );
  }
  useEffect(() => {
    if (categoriasDisplay.length === 0) { setCategoriasDisplay(productosArr) }
    console.log(categoriasDisplay)

  }, [categoriasDisplay])
  return (
    <div className="Categorias">
      <div className="categoriaFilter bg-gray-400  flex justify-evenly">
        {categorias.map((categoria, i) => {
          return (
            <div className=" f">
              <label className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-3xl font-bold text-gray-700 m-5 p-5"><input
                type="checkbox"
                key={i}
                value={categoria}

                id={i}
                onChange={(e) => { handleChange(e) }}
              /> {categoria}</label>
            </div>
          );
        })}
      </div>
      <div className="m-screen flex">
        {categoriasDisplay.map((producto, i) => {
          return <Producto producto={producto} key={i} />;
        })}
      </div>
    </div>
  );
}
