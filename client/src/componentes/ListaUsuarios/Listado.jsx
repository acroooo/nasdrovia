import React from 'react';

const Listado = ({usuarios}) => {


    return ( 
        usuarios.map(usuario=>{
            const {id,nombre,correo,rol} = usuario;
            return(
                <section className='categorias-h row py-1 py-md-2 mb-1' key={id}>    
                <div className="col-3 text-center">{id}</div>
                <div className="col-3 text-center">{nombre}</div>
                <div className="col-3 text-center">{correo}</div>
                <div className="col-3 text-center">{rol}</div>
                </section>
            )
        })
        
     );
}
 
export default Listado;