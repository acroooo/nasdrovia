import React, {useState, useEffect} from 'react';
import AgregarEditarProducto from './ListaProductos';

export default function  ListaProducto({lista, isLoaded}) {
   
    // if(isLoaded){
        console.log(lista, isLoaded)
    return(
        <div>
            {lista.data.map(element =>{
                const{nombre}=element
                return( 
                     <div> 
                    {nombre}
                    </div>
                    )
            }
            )}
        {AgregarEditarProducto}      
        </div>
    )

}