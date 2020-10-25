import React from 'react';
import hei from '../../../Multimedia/hei.png'
import './Cuenta.css';

const Cuenta = () => {
    return (  
        <section className='general-cuenta'>
            
            <div className='d-flex align-items-center justify-content-around'>
             <h2 className='titulo-checkout mt-3'>HOLA USER</h2>
              <p className='m-0 pb-3 cerrar-sesion'>CERRAR SESIÓN</p>
            </div>

            <div className="contenido-carrito">
                <h4>EN MI CARRITO</h4>
                <small>3 ARTÍCULOS</small>
                <div className="productos-contenido d-flex">
                <img className='producto-perfil' src={hei} alt="cerveza"/> 
                <img className='producto-perfil' src={hei} alt="cerveza"/> 
                <img className='producto-perfil' src={hei} alt="cerveza"/> 
                <img className='producto-perfil' src={hei} alt="cerveza"/> 
                </div>
                <button  className='btn-verCarrito'>VER MI CARRITO <i className="fas fa-long-arrow-alt-right ml-2 flecha-larga"></i></button>
            </div>
                <h4 className='subtitulos-cuenta'>TUS CUPONES</h4>
                <p className='texto-normal'>Actualmente no hay cupones disponibles</p>
                <h4 className='subtitulos-cuenta'>PUNTOS Y BENEFICIOS DEL NASDROVIA CLUB</h4>
                <p className='texto-normal'>Verifica aquí el estado de tu cuenta y los puntos o beneficios que has obtenido</p>
           
           <div className="puntos d-flex justify-content-between">
              <div className="totales ">
               <p className="puntos-totales">
                   PUNTOS TOTALES
               </p>
               <span className='p100'>100</span>
              </div>

              <div className="siguiente ">
                   <p className="sn">
                       SIGUIENTE NIVEL
                   </p>
                   <span className='p900'>+900</span>
              </div>
              
           </div>
           <div className="linea-puntos mb-5">
               <div className="sublinea"></div>
               <div className="sublinea2"></div>
           </div>

           <h2 className='mt-5 mb-5'>PRODUCTOS RECOMENDADOS</h2>
           
           <div className="productos-recomendados d-flex justify-content-around ">
               <div className="card-recomendada">
                 <div className="head-card">
                  <img className='pola' src={hei} alt="cerveza"/> 
                 </div>
                 <div className="card-bodyre ">
                     <p className='pl-2'>CERVEZA HEINEKEN</p>
                     <small className='pl-2'>$12.990</small>
                     <span className='etiqueta-pola'>Ligera y suave</span>
                 </div>
                 <i class="far fa-heart"></i>
               </div>

               <div className="card-recomendada">
                 <div className="head-card">
                  <img className='pola' src={hei} alt="cerveza"/> 
                 </div>
                 <div className="card-bodyre ">
                     <p className='pl-2'>CERVEZA HEINEKEN</p>
                     <small className='pl-2'>$12.990</small>
                     <span className='etiqueta-pola'>Ligera y suave</span>
                 </div>
                 <i class="far fa-heart"></i>
               </div>

               <div className="card-recomendada">
                 <div className="head-card">
                  <img className='pola' src={hei} alt="cerveza"/> 
                 </div>
                 <div className="card-bodyre ">
                     <p className='pl-2'>CERVEZA HEINEKEN</p>
                     <small className='pl-2'>$12.990</small>
                     <span className='etiqueta-pola'>Ligera y suave</span>
                 </div>
                 <i class="far fa-heart"></i>
               </div>

               <div className="card-recomendada">
                 <div className="head-card">
                  <img className='pola' src={hei} alt="cerveza"/> 
                 </div>
                 <div className="card-bodyre ">
                     <p className='pl-2'>CERVEZA HEINEKEN</p>
                     <small className='pl-2'>$12.990</small>
                     <span className='etiqueta-pola'>Ligera y suave</span>
                 </div>
                 <i class="far fa-heart"></i>
               </div>

           </div>
           

        </section>
        
         
    );
}
 
export default Cuenta;