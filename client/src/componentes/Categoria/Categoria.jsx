import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import Producto from "../Product-Card/Product-Card";
import { categorias, productos } from "./menu_producto";
=======
import Producto from "../ProductCard/ProductCard";
>>>>>>> a2cfe3dcf79eef2ea5ae545c5a92878ae7702762

export default function Categoria() {
  const [categoriasDisplay, setCategoriasDisplay] = useState(productos);
  const [cat, setCat] = useState([]);
  useEffect(() => {
    setCat(
      categorias.map((elemento) => {
        return {
          value: elemento,
          select: false,
        };
      })
    );
  }, []);
  useEffect(() => {
    let arr = [];
    cat.forEach((element) => {
      if (element.select) {
        productos.forEach((e) => {
          if (e.categoria.toLowerCase() === element.value.toLowerCase()) {
            arr.push(e);
          }
        });
      } else {
        setCategoriasDisplay(productos);
      }
      if (arr.length !== 0) {
        setCategoriasDisplay(arr);
      }
    });
  }, [cat]);

  function handleChange(event) {
    let checked = event.target.checked;
    setCat(
      cat.map((e) => {
        if (e.value.toLowerCase() === event.target.value.toLowerCase()) {
          e.select = checked;
        }
        return e;
      })
    );
  }

  return (
    <div className="Categorias">
      <div className="categoriaFilter bg-gray-400  flex justify-evenly">
        {cat.map((categoria, i) => {
          return (
            <div className=" f">
              <label className=" block shadow-md bg-gray-200 transition duration-300 hover:bg-gray-100 cursor-pointer  rounded-full px-3 py-1 text-sm font-bold text-gray-700 mt-4 p-2 mb-4 font-thin">
                <input
                  type="checkbox"
                  key={categoria.value + i}
                  value={categoria.value}
                  id={i}
                  checked={categoria.select}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {categoria.value}
              </label>
            </div>
          );
        })}
      </div>
      <div className="w-screen flex mt-5 justify-evenly h-auto">
        {categoriasDisplay.map((producto, i) => {
          return <Producto producto={producto} key={i + "k"} />;
        })}
      </div>
    </div>
  );
}
