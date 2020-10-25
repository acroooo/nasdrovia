import React from 'react';
import './Panel.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';


const Panel = ({setPagina}) => {

    const [activo,setActivo]=useState('cuenta')

    const actualizarPagina = (pagina)=>{
        setPagina(pagina);
        setActivo(pagina);
    }

    return (  
        <section className='general-panel'>
            <div className="seccion-titulos mt-3">
             <p className={activo === 'cuenta' ? 'item-panel-usuario item-activo':'item-panel-usuario'} onClick={()=>actualizarPagina('cuenta')}>Mi cuenta</p>
             <p className={activo === 'datos' ? 'item-panel-usuario item-activo':'item-panel-usuario'} onClick={()=>actualizarPagina('datos')}>Datos personales</p>
             <p className={activo === 'ordenes' ? 'item-panel-usuario item-activo':'item-panel-usuario'} onClick={()=>actualizarPagina('ordenes')}>Ordenes</p>
             <p className={activo === 'deseos' ? 'item-panel-usuario item-activo':'item-panel-usuario'} onClick={()=>actualizarPagina('deseos')}>Lista de deseos</p>
             <p className={activo === 'preferencias' ? 'item-panel-usuario item-activo':'item-panel-usuario'} onClick={()=>actualizarPagina('preferencias')}>Preferencias</p>
        </div>
        <div className="seccion-relleno">
            <h4>¿NECESITAS AYUDA?</h4>
             <p className='item-panel-usuario'>Productos</p>
             <p className='item-panel-usuario'>Formas de pago</p>
             <p className='item-panel-usuario'>Entrega</p>
             <p className='item-panel-usuario'>Códigos de descuento</p>
             <p className='item-panel-usuario'>Reembolso</p>
        </div>
            

            

        </section>
    );
}
 
export default Panel;