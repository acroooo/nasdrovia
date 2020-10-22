import React from 'react';
import Card from './Card';



const ResumenOrden = ({productos,objeto}) => {

    

    return ( 
        <div className="contenido-resumen">
        <p className="mb-1">{objeto.cantidadProductos} PRODUCTOS</p>
        <div className="precio-resumen d-flex justify-content-between">
          <p>Subtotal</p>
          <p>$ {objeto.subtotal}</p>
        </div>

        <div className="precio-resumen d-flex justify-content-between">
          <p>Código promocional</p>
          <p>N/A</p>
        </div>

        <div className="precio-resumen d-flex justify-content-between">
          <p>Gastos de Envio</p>
          <p>Gratis</p>
        </div>

        <div className="precio-resumen d-flex justify-content-between">
          <p>IVA</p>
          <p>$ 12.000</p>
        </div>

        <div className="precio-resumen precio-total-resumen d-flex justify-content-between">
          <p>Total</p>
          <p>$ 24.560</p>
        </div>

        <div className="financiaciacion d-flex">
          <small>Financiación con Tarjeta de Credito</small>
          <small className="cuotas">Hasta 12 cuotas de $2.540</small>
        </div>
        
        <Card productos={productos}/>

      </div>
     );
}
 
export default ResumenOrden;