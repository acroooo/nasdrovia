import React from 'react';
import './LineaOrdenes.css';
import Encabezado from './Encabezado/Encabezado';
import Ordenes from './TitulosOrdenes/TitulosOrdenes';
import Listado from './Listado/Listado';


const LineaOrdenes = () => {
    return (  
        <div className='total'>
        <div className='container general'>
           <Encabezado/>
           <Ordenes/>
           <Listado/>
        </div>
    </div>
    );
}
 
export default LineaOrdenes;