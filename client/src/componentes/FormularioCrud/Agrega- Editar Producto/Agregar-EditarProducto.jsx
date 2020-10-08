import React from 'React'

export default function Agregar-EditarProducto(){

    return(
        
<form className="formulario-producto  flex-column mx-auto" id='form-crud'>

                <h4 className="d-flex align-items-center justify-content-between mb-3">Agregar producto <small id="cerrar" className="font-weight-bold" onClick={()=>ocultarFormulario(setCategorias,setProductoEditar,setAccion,setProductoActual)}>X</small> </h4>
                {error && <p className="error-producto text-white text-center" id='error-producto'> Todos los campos son obligatorios </p>}
                <label className="mb-1" >Código</label>
                <input name='id' type="number" id='id'  onChange={handleChange} />
                <label className="mb-1">Nombre</label>
                <input name='nombre' type="text" id='nombre' value={inputValues.nombre} onChange={handleChange}/>
                <label className="mb-1">Descripción</label>
                <textarea name='descripcion' id='descripcion' value={inputValues.descripcion} onChange={handleChange}></textarea>
                <label className="mb-1">Imagen</label>
                <input name='imagen' type="text" id='imagen' value={inputValues.imagen} onChange={handleChange} />
                <label className="mb-1">Stock</label>
                <input name='stock' type="number" id='stock' value={inputValues.stock} onChange={handleChange}/>
                <label className="mb-1">Categoria</label>
                <select id="select-categorias"  onChange={changeCategories}>
                    <option value="" id="primer">{categorias.length ? 'Selecciona otra categoria' : 'Selecciona una categoria'}</option>
                    <option value="artesanal">Artesanal</option>
                    <option value="argentina">Argentina</option>
                    <option value="colombiana">Colombiana</option>
                    <option value="chilena">Chilena</option>

                </select>
                <div className="categorias d-flex flex-wrap" id='cont-categorias'>
                
                     {categorias.map(categoria=><small className="cat-btn mr-1 text-white mb-1" key={Math.random()}>{categoria}<i className="fas fa-times ml-1" onClick={()=>eliminarCategoria(categoria)}></i></small>)} 
                </div>
                <label  className="mb-1" >Precio</label>
                <input name='precio'name='precio' type="number"id='precio' value={inputValues.precio} />
                <button className='btn-gproducto text-white' >Guardar</button>

        </form>
        )
}