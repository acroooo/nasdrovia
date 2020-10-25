import React from 'react';
import './Preferencias.css';
import prefe from '../../../Multimedia/preferencias.jpg';
import {drag} from './preferencias';

const Preferencias = () => {


   
    return (  
        <section>
            <h2 className='tit-preferencias mt-3'>MIS PREFERENCIAS</h2>
            <div className="list contenedor-preferencias" id='pre' onClick={drag} >
            </div>
            <h2 className='tit-preferencias mt-3 '>CATEGORIAS</h2>

            <div className="list contenedor-opciones" id='opc'   onMouseEnter={drag} >
                <div class="list-item " draggable="true" >Artesanal</div>
				<div class="list-item" draggable="true" onClick={drag}>Europea</div>
				<div class="list-item" draggable="true" onClick={drag}>Negra</div> 
				<div class="list-item" draggable="true" onClick={drag}>Latína</div> 
				<div class="list-item" draggable="true" onClick={drag}>Clasica</div> 
				<div class="list-item" draggable="true" onClick={drag}>Amarga</div> 
            </div>
            <button className='btn-preferencias'>GUARDAR <i className="fas fa-long-arrow-alt-right ml-2 flecha-larga"></i></button>
        </section>
    );
}
 
export default Preferencias;