import React,{useState} from 'react'
import "./FormularioCrud.css"
import {productos,toggleModal,editar,nuevoProducto} from './formulario';

const FormularioCrud = () => {
   
   const[productoActual,setProductoActual]=useState({});
   const handleChange = e=>{setProductoActual({...productoActual,[e.target.name]:e.target.value})}
    return (
        <div>
            <div className="container">
                <div className="encabezado">
                    <h1 className="lista_productos">Listado de productos</h1>
                    <button className="btn-agregar" id="agregar-producto" onClick={nuevoProducto}><i className="fas fa-plus"></i> Nuevo Producto </button>
                </div>
                <div className="header-crud">
                    <div className="codigo-crud">
                        <p className="codigo">Código:</p>
                        <input className="input_codigo" type="text" placeholder="Código" />
                    </div>
                    <div className="codigo-crud">
                        <p className="nombre">Nombre:</p>
                        <input className="input_nombre" type="text" placeholder="Nombre" />
                    </div>
                    <button className="btn-buscar">Buscar</button>
                </div>

                <div className="sub-header">
                    <div className="titulo">Código</div>
                    <div className="titulo">Nombre</div>
                    <div className="titulo">Descripción</div>
                    <div className="titulo">Imagen</div>
                    <div className="titulo">Stock</div>
                    <div className="titulo">Precio</div>
                    <div className="titulo">Acciones</div>
                </div>

                {productos.map(producto =>
                    <div key={producto.id} className='fila-tabla'>
                        <div className="titulo">{producto.id}</div>
                        <div className="nombre">{producto.nombre}</div>
                        <div className="descripcion">{producto.descripcion} </div>
                        <div className="imagen">{producto.imagen}</div>
                        <div className="stock">{producto.stock}</div>
                        <div className="precio">$ {producto.precio.toString()[0]+'.'+producto.precio.toString().slice(1)}</div>
                        <div className="titulo">
                            <span><i className="fas" onClick={()=>editar(setProductoActual,producto)}></i></span>
                            <span><i className="fas"></i></span>
                        </div>
                    </div>
                )}
            </div>
            <div className="modal ">
                <div className=""></div>

                <div className="modal-container">

                    <div className="modal-close">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" onClick={toggleModal}>
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                        <span className="texto">(Esc)</span>
                    </div>

                    <div className="modal-contenido">

                        <div className="">
                            <p className="agregar_producto" >Agregar Producto</p>
                            <div className="modal-close">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" onClick={toggleModal}>
                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </div>
                        </div>
                        <form className="grid">
                            <label className="">Código</label>
                            <input name='id' className="" type="text" id='id' onChange={handleChange}/>
                            <label className="">Nombre</label>
                            <input name='nombre' className="" type="text" id='nombre' onChange={handleChange}/>
                            <label className="">Descripción</label>
                            <input name='descripcion' className="" type="text" id='descripcion' onChange={handleChange} />
                            <label className="">Imagen</label>
                            <input name='imagen' className="" type="text" id='imagen' onChange={handleChange}/>
                            <label className="">Stock</label>
                            <input name='stock' className="" type="text" id='stock'  onChange={handleChange}/>
                            <label className="">Precio</label>
                            <input name='precio' className="" type="text" id='precio' onChange={handleChange} />
                        </form>

                        <div className="">
                            <button className="btn-nuevo">Agregar</button>
                            <button className="btn-cancelar" onClick={toggleModal}>Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default FormularioCrud;