import React from 'react';
import Titulos from './Titulos';
import Encabezado from './Encabezado';
import Listado from './Listado';
import './Ordenes.css';


const Ordenes = () => {
    return (  
        <div className="container general">
            <Encabezado/>
             <Titulos/>
             <Listado/>
             
        </div>
    );
}
 
export default Ordenes;