import React, { useState,useEffect } from 'react'
import "./FormularioCrud.css"
import { productos, ocultarFormulario, motrarFormulario, editarProducto } from './formulario';
import Axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import ListaProductos from './ListaProductos/ListaProductos'

const FormularioCrud = () => {

    const [productoActual, setProductoActual] = useState({res:null, isLoaded:false});//producto que se va a postear
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
    Axios.get('http://localhost:3001/producto')
        .then(data =>{setProductoActual({res:data, isLoaded:true});
        })
        .catch(error => 
        console.log(error.respuesta.data));
    },[]);



    //Crear nuevo producto o editar
    const handleChange = e => { 
        accion ==='crear'&& setProductoActual({ ...productoActual, [e.target.name]: e.target.value,categorias:categorias }) //Crear producto y almacenarlo en el state
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

     return (

         <div>
         <SearchBar/>
         <ListaProductos lista={productoActual.res} isLoaded={productoActual.isLoaded} />
         </div>

                    )

}
export default FormularioCrud;


