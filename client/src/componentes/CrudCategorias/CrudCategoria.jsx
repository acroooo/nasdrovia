import React,
{useState} from 'react'
import './CrudCategoria.css';
import EncabezadoCategoria from './EncabezadoCategorias/EncabezadoCategoria';
import SubformularioCategorias from './Subformularioategorias/SubformularioCategorias';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import TitulosCategorias from './TitulosCategorias/TitulosCategorias';




const CrudCategoria = () => {

    const [listadoCategorias,setListadoCategorias]=useState([]);
    const [accionCategorias,setAccionCategorias]=useState('');
    const [categoriaEditar,setCategoriaEditar]=useState({});
    const [categoriaCrear,setCategoriaCrear]=useState({});
    const [categoriaEliminar,setCategoriaEliminar]=useState(0);

    return (  
        <div className='total'>
             <div className='container general'>
                 <EncabezadoCategoria setAccion={setAccionCategorias}/>
                 <TitulosCategorias/>
                 <ListaCategorias accion={setAccionCategorias} categorias={listadoCategorias} editar={setCategoriaEditar} eliminar={setCategoriaEliminar}/>
                 <SubformularioCategorias catCrear={categoriaCrear} catEditar={categoriaEditar} accion={accionCategorias} setAccion={setAccionCategorias} editar={setCategoriaEditar} crear={setCategoriaCrear} eliminar={setCategoriaEliminar}/>
             </div>
         </div>
    );
}
 
export default CrudCategoria;