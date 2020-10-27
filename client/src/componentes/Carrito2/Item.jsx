import React from 'react';


const Item = ({nombre,precio,cantidad,imagen}) => {

  
    
    return ( 
          <div className='cont-general d-flex align-items-center '>
                <div className='cont-image text-center py-1'>
                    <img src={imagen} />
                    <div className="sombra-imagen"></div>
                </div>

                <div className='cont-body ml-4'>
                    <h4>{nombre}</h4>
                    <p>${precio[0]+'.'+precio.slice(1)}</p> 
                    <div className='cont-cantidad d-flex text-center'>
               <small className='s' ><i className="fas fa-minus"></i></small><small>{cantidad}</small><small><i className="fas fa-plus"></i></small>
                    </div>
                </div>
                <div className='cont-subtotal d-flex justify-content-between align-items-start'>
                    <small>$ {precio}</small>
                    <small className='eliminar'>X</small>
                </div>
            </div>
     );
}
 
export default Item;