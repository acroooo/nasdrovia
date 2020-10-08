import React, { useState } from 'react'
import "./FormularioCrud.css"
import { productos, ocultarFormulario, motrarFormulario,editarProducto } from './formulario';

const FormularioCrud = () => {

    const [productoActual, setProductoActual] = useState({});
    const [productoEditar,setProductoEditar] = useState({});
    const [error,setError]=useState(false);
    const handleChange = e => { setProductoActual({ ...productoActual, [e.target.name]: e.target.value }) }


    return (
        <div>
            <div className="container  mt-5 general p-4 p-md-5">

                <div className="row align-items-center ">
                    <div
                        className="encabezado col-12  d-flex justify-content-between m-0  align-items-center py-2 mb-1 mx-auto">
                        <h4 className="titulo-lista text-white m-0 pb-1">Listado de productos</h4>
                        <button className="btn-nuevo text-white" onClick={motrarFormulario}><i className="fas fa-plus bg-white mr-1 mr-1 mr-md-2"></i> Nuevo Producto</button>
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
                    <div className="d-none d-md-block col-md-4">Descripción</div>
                    <div className="d-none d-md-block col-md-3 ">Imagen</div>
                    <div className="d-none d-md-block col-md-1">Stock</div>
                    <div className="d-none d-md-block col-1">Precio</div>
                    <div className="col-4 col-md-1 text-center text-md-left">Acciones</div>
                </section>

                {productos.map(producto =>
                    <section className="productos row py-1 py-md-2 mb-1" key={producto.id}>
                        <div className="col-4 col-md-1 text-center text-md-left">{producto.id}</div>
                        <div className="col-4 col-md-1 text-center text-md-left">{producto.nombre}</div>
                        <div className="d-none d-md-block col-md-4">{producto.descripcion}</div>
                        <div className="d-none d-md-block col-md-3 pl-3">{producto.imagen}</div>
                        <div className="d-none d-md-block col-md-1">{producto.stock}</div>
                        <div className="d-none d-md-block col-1">$ {producto.precio.toString()[0] + '.' + producto.precio.toString().slice(1)}</div>
                        <div className="col-4 col-md-1 text-center text-md-left">
                            <i className="fas fa-pencil-alt p-1 mr-1 text-white" onClick={()=>editarProducto(setProductoEditar,producto)}></i>
                            <i className="fas fa-trash p-1 text-white"></i>
                        </div>
                    </section>)
                }

            </div>

            <form className="formulario-producto  flex-column mx-auto" id='form-crud'>

                <h4 className="d-flex align-items-center justify-content-between mb-3">Agregar producto <p id="cerrar" className="font-weight-bold" onClick={ocultarFormulario}>X</p> </h4>
               {error && <p class="error-producto text-white text-center" id='error-producto'> Todos los campos son obligatorios </p>}
                <label className="mb-1">Código</label>
                <input name='id' type="number" onChange={handleChange} id='id' />
                <label className="mb-1">Nombre</label>
                <input name='nombre' type="text" onChange={handleChange} id='nombre' />
                <label className="mb-1">Descripción</label>
                <textarea name='descripcion' onChange={handleChange} id='descripcion'></textarea>
                <label className="mb-1">Imagen</label>
                <input name='imagen' type="text" onChange={handleChange} id='imagen'/>
                <label className="mb-1">Stock</label>
                <input name='stock' type="number" onChange={handleChange} id='stock'/>
                <label className="mb-1">Precio</label>
                <input name='precio' type="number" onChange={handleChange} id='precio'/>
                <button className='btn-gproducto text-white'>Guardar</button>
            </form>
        </div>
    );
}

export default FormularioCrud;
