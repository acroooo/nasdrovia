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
      <div className="categoriaFilter">
        {categorias.map((categoria, i) => {
          return (
            <label><input
              type="checkbox"
              key={i}
              value={categoria}

              id={i}
              onChange={(e) => { handleChange(e) }}
            /> {categoria}</label>
          );
        })}
      </div>
      {categoriasDisplay.map((producto, i) => {
        return <Producto producto={producto} key={i} />;
      })}
    </div>
  );
}
