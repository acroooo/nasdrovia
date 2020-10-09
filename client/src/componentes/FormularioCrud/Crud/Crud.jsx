import React,{useState} from 'react'
import './Crud.css';
import Spinner from './Spinner';

const Crud = ({accion,setAccion,setProductoEditar,productoEditar,setProductoCrear,productoCrear}) => {

    const [error,setError]=useState(false);
    //Datos del producto que se va a editar
    const{id,nombre,descripcion,precio,stock,imagen} = productoEditar;

    //Guarda el producto editado o creado en el state según sea el caso
    const almacenarProductoEditado = e=>{
      accion === 'editar' &&  setProductoEditar({...productoEditar,[e.target.name]:e.target.value});
      accion === 'crear' &&  setProductoCrear({...productoCrear,[e.target.name]:e.target.value});
    }

    //Cierra el formulario y borrar el producto editado O creado del state
    const cerrarFormulario = ()=>{
        setProductoEditar({});
        setProductoCrear({});
        setAccion('');
        setError(false);
    }
    
    //Enviar el formulario para crear o editar un producto
    const handleSubmit = e=>{
        e.preventDefault();
        //Obtener los datos del producto del state dependiendo de la accion a ejecutar
         const{id,nombre,descripcion,precio,stock,imagen} = accion==='editar' ? productoEditar : productoCrear; 
    
        //Validar si los campos están vacios
        if(!id || !nombre || !descripcion || !precio || !stock || !imagen){
            setError(true);
            return;
        }
        setError(false);

        //Ejecutar acción con el método axios


        //Mostrar spinner de carga
         document.getElementById('spinner').style.display='block';

        //Mostrar mensaje de exito, eliminar spinner, cerrar y ressetear el formulario y el state.
         setTimeout(()=>{
            document.getElementById('spinner').style.display='none';
            document.getElementById('mensaje-exito').style.display='block';
            setTimeout(()=> {document.getElementById('mensaje-exito').style.display='none';cerrarFormulario()},3000)
         },2000)
   
    }
   

    return accion ==='editar' || accion==='crear' ?(  
       <form className="formulario-producto-crud  flex-column mx-auto" id='form-crud' onSubmit={handleSubmit}>
           <h4 className="d-flex align-items-center justify-content-between mb-3">
            Agregar producto <small id="cerrar" className="font-weight-bold" onClick={cerrarFormulario}>X</small> </h4>
             {error && <p className="error-producto text-white text-center" id='error-producto'> Todos los campos son obligatorios </p>} 
           <label className="mb-1" >Código</label>
           <input
            name='id'
            type="number"
            id='id'
            onChange={almacenarProductoEditado}
            value={id}
            disabled={accion==='editar' && true}
            
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
                {/* {categorias.length ? 'Selecciona otra categoria' : 'Selecciona una categoria'} */}
                Selecciona una categoria
            </option>

            <option value="artesanal">Artesanal</option>
            <option value="argentina">Argentina</option>
            <option value="colombiana">Colombiana</option>
            <option value="chilena">Chilena</option>
        </select>
        <div className="categorias d-flex flex-wrap" id='cont-categorias'>
           {/*  {categorias.length>0 && categorias.map(categoria => <small className="cat-btn mr-1 text-white mb-1 mt-2" key={Math.random()}>{categoria}<i className="fas fa-times ml-1" onClick={() => eliminarCategoria(categoria)}></i></small>)}  */}
        </div>
        <label className="mb-1" >Precio</label>
        <input name='precio' name='precio' type="number" id='precio' onChange={almacenarProductoEditado} value={precio}/>
        <p className="exito-producto text-white text-center mt-1 mb-0" id='mensaje-exito'> {accion==='editar' ? 'Producto modificado con exito' :'El producto se ha guardado correctamente'} </p>
        <Spinner id='spinner'/>
        <button className='btn-gproducto text-white mt-2' >Guardar</button>
        
      
    </form> 
        
    ):null;
}
 
export default Crud;
