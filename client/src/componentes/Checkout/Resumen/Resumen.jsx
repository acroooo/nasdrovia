import React from 'react';
import './Resumen.css';


const Resumen = () => {
  

    return ( 
        <section className="contenedor-resumen">
            <h6>RESUMEN DEL PEDIDO</h6>
            <div className="contenido-resumen">
                <p className='mb-1'>3 PRODUCTOS</p>
                <div className='precio-resumen d-flex justify-content-between'>
                <p>Subtotal</p>
                <p>$ 12.560</p>
                </div>

                <div className='precio-resumen d-flex justify-content-between'>
                <p>Código promocional</p>
                <p>N/A</p>
                </div>

                <div className='precio-resumen d-flex justify-content-between'>
                <p>Gastos de Envio</p>
                <p>Gratis</p>
                </div>

                <div className='precio-resumen d-flex justify-content-between'>
                <p>IVA</p>
                <p>$ 12.000</p>
                </div>

                <div className='precio-resumen precio-total-resumen d-flex justify-content-between'>
                <p>Total</p>
                <p>$ 24.560</p>
                </div>

                <div className='financiaciacion d-flex'>
                    <small>Financiación con Tarjeta de Credito</small>
                    <small className='cuotas'>Hasta 12 cuotas de $2.540</small>
                </div>

                <div className="producto-resumen d-flex justify-content-between">
                   <img src="https://i.pinimg.com/originals/35/c2/78/35c2787bbda4994398614730d8ffc61b.jpg" />
                   <div className='datos-item'>
                       <h5>Heineken</h5>
                       <p>Categoria: Europea</p>
                       <p>Cantidad:1</p>
                       <p>Precio: $12.500</p>
                        <p><b>Total: $ 24.560</b></p>
                   </div>
                </div>

                <div className="producto-resumen sin d-flex justify-content-between">
                <img src="https://andresconrapidez.com/wp-content/uploads/2019/04/Corona-710ml-1.jpg" />
                   <div className='datos-item'>
                       <h5>Heineken</h5>
                       <p>Categoria: Europea</p>
                       <p>Cantidad:3</p>
                       <p>Precio: $25.000</p>
                        <p><b>Total: $ 75.560</b></p>
                   </div>
                </div>
            </div>
            <div className="contenido-resumen mt-2">

                <div className='promocional d-flex justify-content-between'>
                    <p>CÓDIGO PROMOCIONAL <i class="far fa-question-circle"></i></p>
                    <i class="fas fa-angle-down mr-3" onClick={()=>{document.getElementById('cod').classList.toggle('pedir-codigo')}}></i>
                </div>
                <div className='contenedor-codigo-introducir '>
                <div className='introducir-codigo' id='cod'>
                   <input type="text" placeholder='INTRODUCE TU CODIGO PROMOCIONAL' required/>
                   <div className="linea-codigo"></div>
                   <p className='clausula mt-2'>El uso de mayúsculas, minúsculas y guianes debe ser exacto</p>
                   <button className='btn-checkout btn-descuento  mt-2' disabled>APLICAR </button>
                </div>
                </div>
                

            </div>
        </section>
     );
}
 
export default Resumen;