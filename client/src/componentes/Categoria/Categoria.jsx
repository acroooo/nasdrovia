import React, { useState, useEffect } from "react";
import Producto from "../ProductCard/card";
import { categorias } from "./menu_producto";
import Axios from 'axios';
import "./Categoria.css";
import Loader from "../Loader/Loader";

export default function Categoria() {
  const [productos, setProductos] = useState({res:null, isLoaded:false})
  const [cat, setCat] = useState([]);
  const [filtrar, setFiltrar] = useState(false);
  useEffect(() => {
    Axios.get('http://localhost:3001/producto').then(data =>{
      setProductos({
        res:data.data,
        isLoaded:true,
      });
        }).catch(error => 
        console.log(error));
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
      } 
      if (arr.length !== 0) {
        setProductos(arr);
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
      {filtrar ? 
        <div className="categoriasFilter">
          {cat.map((categoria, i) => {
            return (
              <div className="" key={i + "f"}>
                <label className="check">
                  <input
                    className="checkboxes"
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
          }) }
          <div className="x" onClick={() => setFiltrar(!filtrar)}>
          <i className="fas fa-window-close"></i>
          </div>
        </div> : <div className="categoriasFilter">
        <div className="botonFiltro" onClick={() => setFiltrar(!filtrar)}>
          Filtros
        </div>
      </div>
      }
        <div className="listaProductos">
          {productos.isLoaded ? productos.res.map((producto, i) => {
            return <Producto producto={producto} key={i + "k"} importance={i}/>;
          }):<Loader/>}
        </div>
      </div>
    );
  }


