import React, { useState, useEffect } from 'react'
import "./FormularioCrud.css"
<<<<<<< HEAD
import { productos, ocultarFormulario, motrarFormulario, editarProducto } from './formulario';
import Axios from 'axios';

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
    Axios.get('http://localhost:3001/producto').then(data =>{setProductoActual({res:data, isLoaded:true});
        }).catch(error => 
        console.log(error));
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
if(productoActual.isLoaded){
     return (

         <div>
        
         <ListaProductos lista={productoActual.res} isLoaded={productoActual.isLoaded}/>
         </div>

                    )
                }else {
                    return (
                        <div>
                            Cargando
                        </div>
                    )
                }

=======
import Axios from 'axios';
import EncabezadoCrud from './EncabezadoCrud/EncabezadoCrud';
import ListaProductos from './ListaProductos/ListaProductos';
import TitulosFiltros from './TitulosFiltros/TitulosFiltros';
import Crud from './Crud/Crud';

const FormularioCrud = () => {

    const [listadoProductos, setListadoProductos] = useState({ res: null, isLoaded: false });//Listado de productos (propiedad res)
    const [productoCrear, setProductoCrear] = useState({})//Producto que se va a crear
    const [productoEditar, setProductoEditar] = useState({});//producto que se va a editar
    const [accion, setAccion] = useState('');//acción que realiza el crud
    const [categorias, setCategorias] = useState({res:null, onLoad:false});//categorias del producto que se está creando o editando que vienen de la base de datos
    const [cats,setCats]=useState([]); //Categorías que se asignan a un elemento al editar o crear
    const [solicitud, setSolicitud] = useState(false);//Dependencia que  recarga el componente con los productos cada vez que cambia
    const [n,setN]=useState(0)//Id del proximo producto creado
   
   
    //Trae todo el listado de productos

    const consultarProductos = () => {
        Axios.get('http://localhost:3001/producto').then(data => {
            //listado de productos ordenado de forma ascedente por id
            const ordenado = data.data.sort((a,b)=>{
                if(a.id<b.id){return -1;}
                if(a.id>b.id){return 1;}
                return 0;
            })
            setListadoProductos({ res: ordenado, isLoaded: true });//Guardar el listado de productos en el state
            //determina el producto de mayor id
            let nuevo=0;
            for(let i=0;i<ordenado.length;i++){
                nuevo =ordenado[i].id>nuevo && ordenado[i].id;
            }
            //Almacena el producto con mayor id en localstorage porque apesar de eliminar un producto el id sigue aumentando en la base de datos
            const mayorLS=localStorage['mayor']; 
            nuevo>mayorLS && localStorage.setItem('mayor',nuevo);
            setN(parseInt(mayorLS));
        })
        .catch(error => console.log(error));
        Axios.get('http://localhost:3001/categorias').then(data=>{
            setCategorias({res:data.data, onLoad: true})
        }).catch(error => console.log(error));
    }

    //Recarga el componente que contiene los productos cada vez que se ejecuta un método axios
    useEffect(() => {
      consultarProductos();
      setSolicitud(false);
       }, [solicitud]);
   

    if (listadoProductos.isLoaded) {
        return (
            <div className='total'>
                <div className='container general'>
                    <EncabezadoCrud setAccion={setAccion} />
                    <TitulosFiltros />
                    <ListaProductos setSolicitud={setSolicitud} lista={listadoProductos.res} setAccion={setAccion} setProductoEditar={setProductoEditar} setCats={setCats}/>
                    <Crud cats={cats} setCats={setCats} n={n} accion={accion} setAccion={setAccion} setProductoEditar={setProductoEditar} productoEditar={productoEditar} setProductoCrear={setProductoCrear} productoCrear={productoCrear} setSolicitud={setSolicitud} categorias={categorias}/>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                Cargando
            </div>
        )
    }
>>>>>>> e3e28816082eb23bec8664f2d67bf11aa956e718
}
export default FormularioCrud;


