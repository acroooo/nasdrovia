import React, { useState,useEffect } from 'react'
import "./FormularioCrud.css"
import { productos, ocultarFormulario, motrarFormulario, editarProducto } from './formulario';
import Axios from 'axios';
import EncabezadoCrud from './EncabezadoCrud/EncabezadoCrud';
import ListaProductos from './ListaProductos/ListaProductos';
import TitulosFiltros from './TitulosFiltros/TitulosFiltros';
import Crud from './Crud/Crud';

const FormularioCrud = () => {

    const [listadoProductos, setListadoProductos] = useState({res:null, isLoaded:false});//Listado de productos
    const [productoActual,setProductoActual] = useState({})//Producto que se va a crear
    const [productoEditar, setProductoEditar] = useState({});//producto que se va a editar
    const [accion,setAccion]=useState('');//acción que se realiza actualmente
    const [categorias,setCategorias]=useState([]);//categorias del producto que se está creando o editando
    const [error, setError] = useState(false);//error que se muestra al validar
    const [inputValues, setInputValues] =useState ({
        nombre: '',
        precio: '',
        stock: '',
        imagen: '',
        descripcion: ''
    });
     

    useEffect(()=>{
    Axios.get('http://localhost:3001/producto').then(data =>{setListadoProductos({res:data, isLoaded:true});
        }).catch(error => 
        console.log(error));
    },[]);
  

    //Crear nuevo producto o editar
    const handleChange = e => { 
        accion ==='crear'&& setListadoProductos({ ...listadoProductos, [e.target.name]: e.target.value,categorias:categorias }) //Crear producto y almacenarlo en el state
        accion ==='editar' && setProductoEditar({...productoEditar,[e.target.name]:e.target.value,categorias:categorias}) //editar producto actual y almacenarlo en el state
    };

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
    const datosCrearEditar = {
        setCategorias,setProductoEditar,setAccion,setProductoActual,error,handleChange,inputValues,
        categorias,eliminarCategoria,changeCategories
    } 
if(listadoProductos.isLoaded){
     return (
         <div className='total'>
             <div className='container general'>
               <EncabezadoCrud setCategorias={setCategorias}setAccion={setAccion}/>
               <TitulosFiltros/>
               <ListaProductos lista={listadoProductos.res} isLoaded={listadoProductos.isLoaded}setProductoEditar={setProductoEditar} setAccion={setAccion}/>
               <Crud datosCrearEditar={datosCrearEditar}/>
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


