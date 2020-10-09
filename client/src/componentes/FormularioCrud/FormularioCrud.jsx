import React, { useState,useEffect } from 'react'
import "./FormularioCrud.css"
import Axios from 'axios';
import EncabezadoCrud from './EncabezadoCrud/EncabezadoCrud';
import ListaProductos from './ListaProductos/ListaProductos';
import TitulosFiltros from './TitulosFiltros/TitulosFiltros';
import Crud from './Crud/Crud';

const FormularioCrud = () => {

    const [listadoProductos, setListadoProductos] = useState({res:null, isLoaded:false});//Listado de productos (propiedad res)
    const [productoCrear,setProductoCrear] = useState({})//Producto que se va a crear
    const [productoEditar, setProductoEditar] = useState({});//producto que se va a editar
    const [productoEliminar,setProductoEliminar] = useState(0)//producto que se va a eliminar, almacena el id
    const [accion,setAccion]=useState('');//acción que realiza el crud
    const [categorias,setCategorias]=useState([]);//categorias del producto que se está creando o editando
    
  
    useEffect(()=>{
    Axios.get('http://localhost:3001/producto').then(data =>{setListadoProductos({res:data, isLoaded:true});
        }).catch(error => 
        console.log(error));
    },[]);
  
    //insertar las categorias del producto
    const changeCategories = (e)=>{ 
        let buscar = categorias.find(categoria=>categoria===e.target.value);
        e.target.value && !buscar && setCategorias([...categorias,e.target.value]);
    }
    //eliminar categoria de un producto
    const eliminarCategoria = (nombre)=>{
     let nuevas = categorias.filter(categoria=>categoria!==nombre);
     setCategorias(nuevas);
    }
    
if(listadoProductos.isLoaded){
     return (
         <div className='total'>
             <div className='container general'>
               <EncabezadoCrud setAccion={setAccion}/>
               <TitulosFiltros/>
               <ListaProductos lista={listadoProductos.res} isLoaded={listadoProductos.isLoaded} setAccion={setAccion} setProductoEditar={setProductoEditar} setProductoEliminar={setProductoEliminar}/>
               <Crud accion={accion} setAccion={setAccion} setProductoEditar={setProductoEditar} productoEditar={productoEditar} setProductoCrear={setProductoCrear} productoCrear={productoCrear}/>
             </div>
         </div>
)
                }else {
                    return (
                        <div>
                            Cargando
                        </div>
                    )
                }

}
export default FormularioCrud;


