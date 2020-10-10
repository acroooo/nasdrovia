import React from 'react'
import './CrudCategoria.css';
import EncabezadoCategoria from './EncabezadoCategorias/EncabezadoCategoria';
import SubformularioCategorias from './Subformularioategorias/SubformularioCategorias';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import TitulosCategorias from './TitulosCategorias/TitulosCategorias';



const CrudCategoria = () => {
    return (  
        <div className='total'>
             <div className='container general'>
                 <EncabezadoCategoria/>
                 <TitulosCategorias/>
                 <ListaCategorias/>
                 <SubformularioCategorias/>
             </div>
         </div>
    );
}
 
export default CrudCategoria;