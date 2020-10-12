import React, { useState, useEffect } from 'react'
import "./FormularioCrud.css"
import Axios from 'axios';
import EncabezadoCrud from './EncabezadoCrud/EncabezadoCrud';
import ListaProductos from './ListaProductos/ListaProductos';
import TitulosFiltros from './TitulosFiltros/TitulosFiltros';
import Crud from './Crud/Crud';

const FormularioCrud = () => {

    const [listadoProductos, setListadoProductos] = useState({ res: null, isLoaded: false });//Listado de productos (propiedad res)
    const [productoCrear, setProductoCrear] = useState({})//Producto que se va a crear
    const [productoEditar, setProductoEditar] = useState({});//producto que se va a editar
    const [productoEliminar, setProductoEliminar] = useState(0)//producto que se va a eliminar, almacena el id
    const [accion, setAccion] = useState('');//acción que realiza el crud
    const [categorias, setCategorias] = useState([]);//categorias del producto que se está creando o editando
    const [solicitud, setSolicitud] = useState(false);//Dependencia que activa recarga el componente con los productos cada vez que cambia
    const [n,setN]=useState(0)//Id del proximo producto creado
 
    

    //Trae4 todo el listado de productos
    const consultarProductos = () => {
        Axios.get('http://localhost:3001/producto').then(data => {
            setListadoProductos({ res: data, isLoaded: true });
            setN(data.data.length)
        }).catch(error => console.log(error));
    }
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
                    <ListaProductos setSolicitud={setSolicitud} lista={listadoProductos.res} isLoaded={listadoProductos.isLoaded} setAccion={setAccion} setProductoEditar={setProductoEditar} setProductoEliminar={setProductoEliminar} />
                    <Crud n={n} accion={accion} setAccion={setAccion} setProductoEditar={setProductoEditar} productoEditar={productoEditar} setProductoCrear={setProductoCrear} productoCrear={productoCrear} setSolicitud={setSolicitud} />
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
}
export default FormularioCrud;


