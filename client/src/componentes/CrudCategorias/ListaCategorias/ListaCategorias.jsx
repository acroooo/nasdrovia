import React from 'react';
import axios from 'axios';


const ListaCategorias = ({accion,categorias,editar,eliminar}) => {


    //Alamacena la categoria que toca editar en el state
    const editarCategoria = (categoria)=>{
        const {nombre,descripcion,id} = categoria;
        editar({nombre,descripcion,id});
        accion('editar');
    }
    //Eliminar la categoria de la base de datos
    const eliminarCategoria = (id)=>{
        accion('eliminar');
        eliminar(id);
        axios.delete(`http://localhost:3001/categorias/${id}`)
        .then(() =>console.log('elimnada')).catch((err) =>console.log(err)) 
    }
    
    return categorias.length ? (
        categorias.map(categoria=>
            <section className='categorias-h row py-1 py-md-2 mb-1' key={categoria.id}>
                <div className="col-2">{categoria.id}</div>
                <div className="col-3">{categoria.nombre}</div>
                 <div className="col-5">{categoria.descripcion}</div>
                  <div className="col-2">
                    <i className="fas fa-pencil-alt p-1 mr-1 text-white" onClick={()=>editarCategoria(categoria)} ></i>
                    <i className="fas fa-trash p-1 text-white" onClick={()=>eliminarCategoria(categoria.id)}></i>
                  </div>
            </section>
         )  
    ):<div className='productos-vacios row justify-content-center py-2  align-items-center'>
    <i class="fas fa-exclamation-circle mx-2"></i>  No hay categorías <i class="fas fa-database mx-2"></i>
   </div>;
};

export default ListaCategorias;