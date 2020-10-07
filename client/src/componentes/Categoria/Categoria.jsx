import React, { useState, useEffect } from "react";
import Producto from "../ProductCard/ProductCard";

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
              <label className=" block shadow-md bg-gray-200 transition duration-300 hover:bg-gray-100 cursor-pointer  rounded-full px-3 py-1 text-sm font-bold text-gray-700 mt-4 p-2 mb-4 font-thin"><input
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
      <div className="w-screen flex mt-5 justify-evenly h-auto">
        {categoriasDisplay.map((producto, i) => {
          return <Producto producto={producto} key={i} />;
        })}
      </div>
    </div>
  );
}
