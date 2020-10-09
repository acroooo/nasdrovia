import React, {useState, useEffect} from 'react';
import AgregarEditarProducto from './ListaProductos';

export default function  ListaProducto({lista, isLoaded}) {
   
    if(isLoaded){
        console.log(lista)
    return(
        <div>
            {lista.map(element =>{
                return( 
                     <div> 
                    {element}
                    </div>
                    )
            }
            )}
        {AgregarEditarProducto}      
        </div>
    )
}else {
    return <div> Cargando</div>
}
}