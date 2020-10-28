import React from 'react';
import './Preferencias.css';
import prefe from '../../../Multimedia/preferencias.jpg';
import Drag from './preferencias.js';

const Preferencias = () => {


   
    return (  
        <section>
            <h2 className='tit-preferencias mt-3'>MIS PREFERENCIAS</h2>
            <div className="list contenedor-preferencias" id='pre' onClick={Drag} >
            </div>
            <h2 className='tit-preferencias mt-3 '>CATEGORIAS</h2>

            <div className="list contenedor-opciones" id='opc'   onMouseEnter={Drag} >
                <div class="list-item " draggable="true" >Artesanal</div>
				<div class="list-item" draggable="true" onClick={Drag}>Europea</div>
				<div class="list-item" draggable="true" onClick={Drag}>Negra</div> 
				<div class="list-item" draggable="true" onClick={Drag}>Latína</div> 
				<div class="list-item" draggable="true" onClick={Drag}>Clasica</div> 
				<div class="list-item" draggable="true" onClick={Drag}>Amarga</div> 
            </div>
            <button className='btn-preferencias'>GUARDAR <i className="fas fa-long-arrow-alt-right ml-2 flecha-larga"></i></button>
        </section>
    );
}
 
export default Preferencias;