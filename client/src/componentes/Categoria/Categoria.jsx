import React, { useState, useEffect } from "react";
import Producto from "../ProductCard/card";
import Axios from 'axios';
import "./Categoria.css";
import Loader from "../Loader/Loader";



export default function Categoria() {
  const [productos, setProductos] = useState({res:null, isLoaded:false})
  const [cat, setCat] = useState({res:null, onLoad:false});
  const [filtrar, setFiltrar] = useState(false);
  useEffect(() => {
    Axios.get('http://localhost:3001/producto').then(data =>{
      setProductos({
        res:data.data,
        isLoaded:true,
      })
        }).catch(error => 
        console.log(error));
      Axios.get('http://localhost:3001/categorias').then(data=>{
        setCat({
          res:data.data.map(e=>{
            e.select=false;
            return e
          }),
          isLoaded:true,
        })
      })
  }, []);
  function handleChange(event) {
    let checked = event.target.checked;
    setCat({res:cat.res.map((e) => {
      if (e.nombre.toLowerCase() === event.target.value.toLowerCase()) {
        e.select = checked;
      }
      return e;
    }),isLoaded:true})
  }

  function handleClick(){
    let arr = [];
    cat.res.forEach(e => {
      if (e.select){
        productos.res.forEach(prod => {
          if(prod.categories[0].nombre === e.nombre){
            arr.push(prod)
          }
        });
      }
    });
    if(arr.length!==0){
    setProductos({res:arr, onLoad:true})
    console.log({res:arr, onLoad:true})
    }
    
  }
  return (
      <div className="Categorias">
      {filtrar ? 
        <div className="categoriasFilter">
          { cat.isLoaded ?
            cat.res.map((categoria, i) => {
            return (
              <div className="" key={i + "f"}>
                <label className="check">
                  <input
                    className="checkboxes"
                    type="checkbox"
                    key={categoria.nombre + i}
                    value={categoria.nombre}
                    id={i}
                    checked={categoria.select}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  {categoria.nombre}
                </label>
              </div>
            );
          }):<Loader/> }
          <div className="x" onClick={handleClick}>Aplicar</div>
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


