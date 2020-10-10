import React from 'react';


const ListaCategorias = ({accion,categorias,editar,eliminar}) => {

    const cas = [{id:1,nombre:'Heineken',descripcion:'Cerveza para hombres'},
    {id:2,nombre:'Heineken',descripcion:'Cerveza para hombres'},
    {id:3,nombre:'Heineken',descripcion:'Cerveza para hombres'},
    {id:4,nombre:'Heineken',descripcion:'Cerveza para hombres'},
    {id:5,nombre:'Heineken',descripcion:'Cerveza para hombres'},
 ]

    //Alamacena la categoria que toca editar en el state
    const editarCategoria = (categoria)=>{
        editar(categoria);
        accion('editar');
    }
    //Almacena lacategoria que toca alamacenar en el state
    const eliminarCategoria = (id)=>{
        eliminar(id);
        accion('eliminar');
    }

    return (
        cas.length && cas.map(categoria=>
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
    );
}

export default ListaCategorias;

 /*  //Almacena el producto que toca editar en el state
  const editadoEnState = (element)=>{
    const { nombre, stock, imagen, precio, descripcion, id } = element
     setAccion('editar');
     setProductoEditar({id,nombre,imagen,descripcion,stock,precio});
}
//Almacena el id del producto que toca eliminar en el state
const eliminarProducto = id=>{
    setAccion('eliminar');
    setProductoEliminar(id);
}

<i className="fas fa-pencil-alt p-1 mr-1 text-white" onClick={()=>editadoEnState(element)} ></i>
<i className="fas fa-trash p-1 text-white" onClick={()=>eliminarProducto(id)}></i> */