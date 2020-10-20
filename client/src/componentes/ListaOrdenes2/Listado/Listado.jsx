import React from 'react';


const Listado = () => {

    const ordenes = [
        {id:1,estado:'carrito',total:2000,creadtedAt:'2020-12-20',updatedAt:'2020-12-10',UserId:3},
        {id:1,estado:'rechazado',total:2000,creadtedAt:'2020-12-20',updatedAt:'2020-12-10',UserId:3},
        {id:1,estado:'carrito',total:2000,creadtedAt:'2020-12-20',updatedAt:'2020-12-10',UserId:3},
        {id:1,estado:'rechazado',total:2000,creadtedAt:'2020-12-20',updatedAt:'2020-12-10',UserId:3},
        {id:1,estado:'carrito',total:2000,creadtedAt:'2020-12-20',updatedAt:'2020-12-10',UserId:3},
    ]


    return (  
    ordenes.map(orden=>
        {  let claseBtn=orden.estado==='carrito' ? 'btn-estado-orden completado' : 'btn-estado-orden rechazado'; 
        const {id,estado,total,creadtedAt,updatedAt,UserId} = orden;
      return (<section className='categorias-h row py-1 py-md-2 mb-1 text-center' key={id} >
        <div className="col-2 text-center">{id}</div>
        <div className="col-2 text-center">
         <button className={claseBtn} disabled>{estado[0].toUpperCase()+estado.slice(1)}</button>
        </div>
        <div className="col-2 text-center">$ {total.toString()[0] + '.' + total.toString().slice(1)}</div>
        <div className="col-2 text-center">{creadtedAt}</div>
        <div className="col-2 text-center">{updatedAt}</div>
        <div className="col-2  text-center">{UserId}</div>
        </section>)}
        )
    );
}
 
export default Listado;