import React from 'react';
import axios from 'axios';


export default function ListaProducto({ lista, isLoaded,setAccion,setProductoEditar,setProductoEliminar,setSolicitud}) {
 
    //Almacena el producto que toca editar en el state
    const editadoEnState = (element)=>{
        const { nombre, stock, imagen, precio, descripcion, id } = element
         setAccion('editar');
         setProductoEditar({id,nombre,imagen,descripcion,stock,precio});
    }
    //Almacena el id del producto que toca eliminar en el state
    const eliminarProducto = (id)=>{
      
        setAccion('eliminar');setProductoEliminar(id); 
        axios.delete(`http://localhost:3001/producto/${id}`)
        .then(()=>setSolicitud(true)).catch((err)=>console.log(err))
        setSolicitud(false);
    }
    console.log(lista.data)
    
    return lista.data.length ?(
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
                          {element.categories.map(cat => <small className="mr-1 text-center" key={Math.random()}>{cat.nombre}</small>)}  
                    
                    </div>
                    <div className="d-none d-md-block col-md-1">$ {precio.toString()[0] + '.' + precio.toString().slice(1)} </div>
                    <div className="col-4 col-md-1 text-center text-md-left">
                        <i className="fas fa-pencil-alt p-1 mr-1 text-white" onClick={()=>editadoEnState(element)} ></i>
                        <i className="fas fa-trash p-1 text-white" onClick={()=>eliminarProducto(id)}></i>
                    </div>
                </section>)
        })
    ):<div className='productos-vacios row justify-content-center py-2  align-items-center'>
      <i className="fas fa-exclamation-circle mx-2"></i>  No hay productos <i className="fas fa-database mx-2"></i>
     </div>;
}