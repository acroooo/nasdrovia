import React, { useState,useEffect } from 'react'
import "./FormularioCrud.css"
import { productos, ocultarFormulario, motrarFormulario, editarProducto } from './formulario';
import Axios from 'axios'

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

            <div className="total">

                <div className="container general ">

                    <div className="row align-items-center ">
                        <div
                            className="encabezado col-12  d-flex justify-content-between m-0  align-items-center py-2 mb-1 mx-auto">
                            <h4 className="titulo-lista text-white m-0 pb-1">Listado de productos</h4>
                            <button className="btn-nuevo text-white" onClick={()=>motrarFormulario(setCategorias,setAccion)}><i className="fas fa-plus bg-white mr-1 mr-1 mr-md-2"></i>Nuevo Producto</button>
                        </div>

                        <div className="encabezado col-12 d-flex align-items-center py-2 mb-1 mx-auto">
                            <div className="grupo-header d-flex align-items-center mr-2 mr-md-4">
                                <p className="titulo-pro m-0 text-white mr-2">Código:</p>
                                <input type="text" placeholder="Código" />
                            </div>
                            <div className="grupo-header d-flex align-items-center  mr-2 mr-md-4">
                                <p className="titulo-pro m-0 text-white mr-2">Nombre:</p>
                                <input type="text" placeholder="Nombre" />
                            </div>
                            <button className="btn-buscar text-white py-0 py-md-1 px-2  px-md-2"><i className="fas fa-search mr-1 mr-md-2"></i>Buscar</button>
                        </div>
                    </div>

                    <section className="titulos row py-1 py-md-2 text-white font-weight-bold mb-1">
                        <div className="col-4 col-md-1 text-center text-md-left">Código</div>
                        <div className="col-4 col-md-1 text-center text-md-left">Nombre</div>
                        <div className="d-none d-md-block col-md-3">Descripción</div>
                        <div className="d-none d-md-block col-md-2">Imagen</div>
                        <div className="d-none d-md-block col-md-1">Stock</div>
                        <div className="d-none d-md-block col-md-2 ">Categorias</div>
                        <div className="d-none d-md-block col-md-1 ">Precio</div>
                        <div className="col-4 col-md-1 text-center text-md-left">Acciones</div>
                    </section>
                    {productos.map(producto =>
                        <section className="productos row py-1 py-md-2 mb-1" key={producto.id}>
                            <div className="col-4 col-md-1 text-center text-md-left">{producto.id}</div>
                            <div className="col-4 col-md-1 text-center text-md-left">{producto.nombre}</div>
                            <div className="d-none d-md-block col-md-3">{producto.descripcion}</div>
                            <div className="d-none d-md-block col-md-2">{producto.imagen}</div>
                            <div className="d-none d-md-block col-md-1">{producto.stock}</div>
                            <div className="d-none d-md-flex col-md-2 align-items-center flex-wrap">
                                {producto.categorias.map(categoria => <small className="mr-1 text-center" key={Math.random()}>{categoria}</small>)}
                            </div>
                            <div className="d-none d-md-block col-md-1">$ {producto.precio.toString()[0] + '.' + producto.precio.toString().slice(1)} </div>
                            <div className="col-4 col-md-1 text-center text-md-left">
                                <i className="fas fa-pencil-alt p-1 mr-1 text-white" onClick={() => editarProducto(setProductoEditar, producto,setCategorias,setAccion)}></i>
                                <i className="fas fa-trash p-1 text-white"></i>
                            </div>
                        </section>
                    )}

                </div>
            </div>

            

        </div>
    );
}

export default FormularioCrud;


