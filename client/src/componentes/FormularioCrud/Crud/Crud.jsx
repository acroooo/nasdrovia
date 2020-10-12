import React, { useState } from 'react'
import './Crud.css';

import Spinner from './Spinner';
import axios from 'axios';

const Crud = ({ accion, setAccion, setProductoEditar, productoEditar, setProductoCrear, productoCrear, setSolicitud, n, categorias }) => {

    const [error, setError] = useState(false);
    const [exito, setExito] = useState(false);
    const [spinner, setSpinner] = useState(false);
    console.log(categorias.res)
    //Datos del producto que se va a editar
    const { id, nombre, descripcion, precio, stock, imagen } = productoEditar;
   
 
    //Guarda el producto editado o creado en el state según sea el caso
    const almacenarProductoEditado = e => {
        accion === 'editar' && setProductoEditar({ ...productoEditar, [e.target.name]: e.target.value });
        accion === 'crear' && setProductoCrear({ ...productoCrear, [e.target.name]: e.target.value });
    }
    

    //Cierra el formulario y borrar el producto editado O creado del state
    const cerrarFormulario = () => {
        setProductoEditar({}); setProductoCrear({});
        setAccion(''); setError(false); setSpinner(false);
    }

    //Enviar el formulario para crear o editar un producto
    const handleSubmit = e => {
        e.preventDefault();
        //Obtener los datos del producto del state dependiendo de la accion a ejecutar
        const { id, nombre, descripcion, precio, stock, imagen } = accion === 'editar' ? productoEditar : productoCrear;

        //Validar si los campos están vacios
         if (!nombre || !descripcion || !precio || !stock || !imagen) {
            setError(true);
            return;
        }
        setError(false); 

        //Ejecutar  axios
        switch (accion) {
           case 'crear': axios.post('http://localhost:3001/producto', { nombre, descripcion, precio, stock, imagen })
                .then(() => console.log('publicado')).catch(() => console.log('error'))
            break; 
            
            case 'editar': axios.put(`http://localhost:3001/producto/${id}`, { nombre, descripcion, precio, stock, imagen})
                 .then(() => console.log('editado')).catch(() => console.log('error'))
              break;
        } 

        //Mostrar spinner de carga
        setSpinner(true);

        //Mostrar mensaje de exito, eliminar spinner, cerrar y ressetear el formulario y el state.
        setTimeout(() => {
            setSpinner(false);
            setExito(true);
            setTimeout(() => { setExito(false);setAccion('')}, 3000)
            setTimeout(() => setSolicitud(true), 3100)
        
        }, 2000)

    }
    

    return accion === 'editar' || accion === 'crear' ? (
        <form className="formulario-producto-crud  flex-column mx-auto" id='form-crud' onSubmit={handleSubmit}>
            <h4 className="d-flex align-items-center justify-content-between mb-3">
                {accion === 'editar' ? 'Crear' : 'Editar'} Producto <small id="cerrar" className="font-weight-bold" onClick={cerrarFormulario}>X</small> </h4>
            {error && <p className="error-producto text-white text-center" id='error-producto'> Todos los campos son obligatorios </p>}
            <label className="mb-1" >Código</label>
            <input
                name='id'
                type="number"
                value={accion === 'editar' ? id : n + 1}
                disabled
            />
            <label className="mb-1">Nombre</label>
            <input
                name='nombre'
                type="text"
                id='nombre'
                onChange={almacenarProductoEditado}
                value={nombre}

            />
            <label className="mb-1">Descripción</label>
            <textarea
                name='descripcion'
                id='descripcion'
                onChange={almacenarProductoEditado}
                value={descripcion}
            >
            </textarea>
            <label className="mb-1">Imagen</label>
            <input
                name='imagen'
                type="text"
                id='imagen'
                onChange={almacenarProductoEditado}
                value={imagen}

            />
            <label className="mb-1">Stock</label>
            <input
                name='stock'
                type="number"
                id='stock'
                onChange={almacenarProductoEditado}
                value={stock}

            />
            <label className="mb-1">Categoria </label>
            <select
                id="select-categorias"
            >
                <option value="" id="primer">
                    
                Selecciona una categoria
            </option>
                    { categorias.res.map((el,i)=>
                        <option 
                        value={el.nombre}
                        key={`categorias${i}`}
                        >
                        {el.nombre}
                        </option>
                    )}
            </select>
            <div className="categorias d-flex flex-wrap" id='cont-categorias'>
                {/*  {categorias.length>0 && categorias.map(categoria => <small className="cat-btn mr-1 text-white mb-1 mt-2" key={Math.random()}>{categoria}<i className="fas fa-times ml-1" onClick={() => eliminarCategoria(categoria)}></i></small>)}  */}
            </div>
            <label className="mb-1" >Precio</label>
            <input name='precio' name='precio' type="number" id='precio' onChange={almacenarProductoEditado} value={precio} />
            {exito && <p className="exito-categoria  text-center mt-1 mb-0" id='exito-categoria'>{accion === 'editar'
                ? (<span>El produco se ha modificado  <i className="fas fa-check"></i></span>)
                : (<span>El producto se ha guardado  <i className="fas fa-check"></i></span>)} </p>}
            {spinner && <Spinner />}
            <button className='btn-gproducto text-white mt-2' >Guardar</button>


        </form>

    ) : null;
}

export default Crud;
