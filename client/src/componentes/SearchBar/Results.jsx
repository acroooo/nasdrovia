import React from 'react'


export default function Results({productos}){

    return (
        <div>
         {productos.isLoaded ? productos.res.map((producto, i) => {
            return <div producto={producto} key={i + "k"} importance={i}>{producto.nombre}</div>;
          }):<div></div>}
        </div>
    );
}