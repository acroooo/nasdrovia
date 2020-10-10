import React from 'react';
import './SubformularioCategoria.css';


const SubformularioCategoria = () => {
    return (
        <form className="formulario-categorias-crud  flex-column mx-auto" id='form-crud'>
            <h4 className="d-flex align-items-center justify-content-between mb-3">
                Agregar Categoría <small id="cerrar" className="font-weight-bold">X</small> </h4>
            <label className="mb-1" >Código</label>
            <input
                name='id'
                type="number"
                id='id-categoria'
            />
            <label className="mb-1">Nombre</label>
            <input
              name='nombre'
                type="text"
                id='nombre-categoria'
            />
            <label className="mb-1">Descripción</label>
            <textarea name='descripcion'id='descripcion-categoria'>
            </textarea>
    
            <button className='btn-gproducto text-white mt-2' >Guardar</button>


        </form>

    );
}

export default SubformularioCategoria;