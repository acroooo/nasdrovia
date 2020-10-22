import React from 'react';
import axios from 'axios';


export default function ListaProducto({lista,setAccion,setProductoEditar,setSolicitud,setCats}) {
 
    //Almacena el producto que toca editar en el state
    const editadoEnState = producto=>{
        const { nombre, stock, images, precio, descripcion, id,categories } = producto
         setAccion('editar');
         let imagen1 = producto.images['0']['0'];
         let imagen2 = producto.images['0']['1'];
         let imagen3 = producto.images['0']['2'];
         let objeto;
       
        
         if(imagen1){objeto ={nombre, stock, precio, descripcion, id,categories,imagen1};  }
         if(imagen1 && imagen2){objeto ={nombre, stock, precio, descripcion, id,categories,imagen1,imagen2}; }
         if(imagen1 && imagen2 && imagen3){ objeto ={nombre, stock, precio, descripcion, id,categories,imagen1,imagen2,imagen3}; }

         console.log(objeto)
         setProductoEditar(objeto);
         let categorias=[];
         let categoriasProducto =categories && categories.forEach(cat=>categorias.push({id:cat.id,categoria:cat.nombre}));
         setCats(categorias);
      
    }
    
    //Almacena el id del producto que toca eliminar en el state
    const eliminarProducto = id=>{
        setAccion('eliminar');
        axios.delete(`http://localhost:3001/producto/${id}`)
        .then(()=>setSolicitud(true)).catch((err)=>console.log(err))
        setSolicitud(false);
    }
 
     //Función que convierte la primera letra de una palabra en mayuscula
      const mayusc=palabra=>palabra[0].toUpperCase()+palabra.slice(1);
  /* console.log(lista[0].images['0']['2']);//5 -2 imagen // 6-2imagnes // 7-3 imagenes */
    
  console.log(lista[0])


    return lista.length ?(
        lista.map(element => {
            const { nombre, stock, precio, descripcion, id } = element
            return (
                <section className="productos row py-1 py-md-2 mb-1" key={id}>
                    <div className="col-4 col-md-1 text-center text-md-left">{id}</div>
                    <div className="col-4 col-md-1 text-center text-md-left">{mayusc(nombre)}</div>
                    <div className="d-none d-md-block col-md-4">{mayusc(descripcion)}</div>
                    <div className="d-none d-md-block col-md-1 pl-5">1</div>
                    <div className="d-none d-md-block col-md-1 pl-4">{stock}</div>
                    <div className="d-none d-md-flex col-md-2 align-items-center flex-wrap">
                          {element.categories && element.categories.map(cat => <small className="mr-1 text-center" key={Math.random()}>{cat.nombre}</small>)}  
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