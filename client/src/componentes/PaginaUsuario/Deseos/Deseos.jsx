import React from 'react';
import './Deseos.css';


const Deseos = () => {
    return (  
         <section className='mt-4'>
             <h4 className='titulo-deseos'>LISTA DE DESEOS</h4>
             <p>No hay artículos en tu lista de deseos.</p>
             <button className='btn-deseos'>HAZ CLIC AQUÍ PARA EMPEZAR A AÑADIR ARTÍCULOS.<i class="fas fa-chevron-circle-right ml-2"></i> </button>
         </section>
    );
}
 
export default Deseos;