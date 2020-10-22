import React from 'react';



const Card = ({productos}) => {

   
    return productos.map((producto,index)=>{
        const {nombre,categoria,cantidad,precio,imagen} = producto;
       return ( 
            <div className="producto-resumen d-flex justify-content-between" key={index}>
            <img src={imagen} />
            <div className="datos-item">
              <h5>{nombre}</h5>
              <p>Categoria: {categoria}</p>
              <p>Cantidad: {cantidad}</p>
               <p>Precio: $ {precio.toString()[0] + '.' + precio.toString().slice(1)}</p>
              <p className='precio-orden'>Total: $ {(precio*cantidad).toString()[0] + '.' + (precio*cantidad).toString().slice(1)}</p>
            </div>
          </div>
         );
    });
}
 
export default Card;