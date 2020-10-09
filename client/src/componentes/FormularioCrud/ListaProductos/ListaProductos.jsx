import React, { useState, useEffect } from 'react';
import {editarProducto}from '../formulario';


export default function ListaProducto({ lista, isLoaded,setProductoEditar,setAccion }) {
    /* setProductoEditar,producto,setCategorias,setAccion */
    return (
        lista.data.map(element => {
            const { nombre, stock, imagen, precio, descripcion, id } = element
            return (
                <section className="productos row py-1 py-md-2 mb-1" key={id}>
                    <div className="col-4 col-md-1 text-center text-md-left">{id}</div>
                    <div className="col-4 col-md-1 text-center text-md-left">{nombre}</div>
                    <div className="d-none d-md-block col-md-3">{descripcion}</div>
                    <div className="d-none d-md-block col-md-2">{imagen}</div>
                    <div className="d-none d-md-block col-md-1">{stock}</div>
                    <div className="d-none d-md-flex col-md-2 align-items-center flex-wrap">
                        {/* {producto.categorias.map(categoria => <small className="mr-1 text-center" key={Math.random()}>{categoria}</small>)} */}
                    </div>
                    <div className="d-none d-md-block col-md-1">$ {precio.toString()[0] + '.' + precio.toString().slice(1)} </div>
                    <div className="col-4 col-md-1 text-center text-md-left">
                        <i className="fas fa-pencil-alt p-1 mr-1 text-white" onClick={()=>editarProducto(setProductoEditar,element,setAccion)}></i>
                        <i className="fas fa-trash p-1 text-white"></i>
                    </div>
                </section>
            )
        }
        )
    )
}