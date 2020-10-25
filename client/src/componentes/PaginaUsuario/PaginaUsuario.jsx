import React,{useState} from 'react';
import './PaginaUsuario.css';
import Cuenta from './Cuenta/Cuenta';
import Panel from './PanelUsuario/Panel';
import Datos from './Datos/Datos';
import Ordenes from './Ordenes/Ordenes';
import Preferencias from './Preferencias/Preferencias';
import Deseos from './Deseos/Deseos';



const PaginaUsuario = () => {

    const [pagina,setPagina]=useState('cuenta')
  
    
    return (  
        <section className="general-usuarios " id='a'>
           <div className='anuncios d-flex justify-content-around '>
                <small><i class="fas fa-wine-bottle b1 mr-2"></i> CYBER VIERNES | HASTA 60% DE DESCUENTO + 25% ADICIONAL POR COMPRAS SUPERIORES A  $70.000</small>
                 <small>COVID-19 | VER MÁS NUESTROS TIEMPOS U SERVICIOS <i class="fas fa-wine-bottle b2 ml-2"></i></small>
            </div>
        <div className="container">
        <div className="row">
            <div className="col-8 seccion-formulario mt-2">

                {pagina ==='cuenta' && <Cuenta/>} 
                {pagina === 'datos' && <Datos/>}  
                {pagina === 'ordenes' &&<Ordenes/>} 
                {pagina ==='preferencias' && <Preferencias/>} 
                {pagina ==='deseos' && <Deseos/>}
                
                
                
            </div>
            <div className="col-4 mt-3 panel">
                <Panel setPagina={setPagina}/>
            </div>
        </div>
        </div>
      
    </section>
    );
}
 
export default PaginaUsuario;