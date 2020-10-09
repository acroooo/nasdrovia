import React, {useState, useEffect} from 'react';
import AgregarEditarProducto from './ListaProductos';

export default function  ListaProducto({lista, isLoaded}) {
   
    // if(isLoaded){
        console.log(lista, isLoaded)
    return(
        <div>
            
<div className="total">

    <div className="container general ">

        <div className="row align-items-center ">
            <div
                className="encabezado col-12  d-flex justify-content-between m-0  align-items-center py-2 mb-1 mx-auto">
                <h4 className="titulo-lista text-white m-0 pb-1">Listado de productos</h4>
                <button className="btn-nuevo text-white" ><i className="fas fa-plus bg-white mr-1 mr-1 mr-md-2"></i>Nuevo Producto</button>
            </div>

            <div className="encabezado col-12 d-flex align-items-center py-2 mb-1 mx-auto">
                <div className="grupo-header d-flex align-items-center mr-2 mr-md-4">
                    <p className="titulo-pro m-0 text-white mr-2">Código:</p>
                    <input type="text" placeholder="Código" />
                </div>
                <div className="grupo-header d-flex align-items-center  mr-2 mr-md-4">
                    <p className="titulo-pro m-0 text-white mr-2">Nombre:</p>
                    <input type="text" placeholder="Nombre" />
                </div>
                <button className="btn-buscar text-white py-0 py-md-1 px-2  px-md-2"><i className="fas fa-search mr-1 mr-md-2"></i>Buscar</button>
            </div>
        </div>

        <section className="titulos row py-1 py-md-2 text-white font-weight-bold mb-1">
            <div className="col-4 col-md-1 text-center text-md-left">Código</div>
            <div className="col-4 col-md-1 text-center text-md-left">Nombre</div>
            <div className="d-none d-md-block col-md-3">Descripción</div>
            <div className="d-none d-md-block col-md-2">Imagen</div>
            <div className="d-none d-md-block col-md-1">Stock</div>
            <div className="d-none d-md-block col-md-2 ">Categorias</div>
            <div className="d-none d-md-block col-md-1 ">Precio</div>
            <div className="col-4 col-md-1 text-center text-md-left">Acciones</div>
        </section>
            {lista.data.map(element =>{
                const{nombre, stock,imagen,precio,descripcion, id}=element
                return( 
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
                        <i className="fas fa-pencil-alt p-1 mr-1 text-white" ></i>
                        <i className="fas fa-trash p-1 text-white"></i>
                    </div>
                </section>
                    )
            }
            )}
        {AgregarEditarProducto}      
        </div>
        </div>
       </div>
    )

}