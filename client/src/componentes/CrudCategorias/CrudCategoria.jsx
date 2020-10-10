import React,{useState,useEffect} from 'react'
import './CrudCategoria.css';
import EncabezadoCategoria from './EncabezadoCategorias/EncabezadoCategoria';
import SubformularioCategorias from './Subformularioategorias/SubformularioCategorias';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import TitulosCategorias from './TitulosCategorias/TitulosCategorias';
import axios from 'axios';


const CrudCategoria = () => {

    const [listadoCategorias,setListadoCategorias]=useState([]);
    const [accionCategorias,setAccionCategorias]=useState('');
    const [categoriaEditar,setCategoriaEditar]=useState({});
    const [categoriaCrear,setCategoriaCrear]=useState({});
    const [categoriaEliminar,setCategoriaEliminar]=useState(0);
    const [solicitud,setSolicitud]=useState(false);

    const consultarCategorias = ()=>{
        axios.get('http://localhost:3001/categorias').
        then(data =>setListadoCategorias(data.data)).
        catch(error => console.log(error));
    }
   
    useEffect(()=>{
        consultarCategorias();
        setSolicitud(false);
    },[solicitud]);

    return (  
        <div className='total'>
             <div className='container general'>
                 <EncabezadoCategoria setAccion={setAccionCategorias}/>
                 <TitulosCategorias/>
                 <ListaCategorias setSolicitud={setSolicitud} accion={setAccionCategorias} categorias={listadoCategorias} editar={setCategoriaEditar} eliminar={setCategoriaEliminar}/>
                 <SubformularioCategorias catCrear={categoriaCrear} catEditar={categoriaEditar} setSolicitud={setSolicitud} n={listadoCategorias.length}
                 accion={accionCategorias} setAccion={setAccionCategorias} editar={setCategoriaEditar} crear={setCategoriaCrear} eliminar={setCategoriaEliminar
                 }/>
             </div>
         </div>
    );
}
 
export default CrudCategoria;