import React from 'react';


const Listado = ({ ordenes }) => {

  

    return (
        ordenes.map(orden => {
            let claseBtn = orden.estado === 'carrito' ? 'btn-estado-orden completado' : 'btn-estado-orden rechazado';
            const { id, estado, total, createdAt, updatedAt, usuarioId, lineaDeOrdens } = orden;
            let subtotal = 0;
            lineaDeOrdens.forEach(ele => subtotal += ele.precio);
            return (<section className='categorias-h row py-1 py-md-2 mb-1 text-center ordenes-cliente' key={id} >
                <div className="col-2 text-center d-flex align-items-center justify-content-center">{id}</div>
                <div className="col-2 text-center d-flex align-items-center justify-content-center">
                    <button className={claseBtn} disabled>{estado[0].toUpperCase() + estado.slice(1)}</button>
                </div>
                <div className="col-2 text-center d-flex align-items-center justify-content-center">$ {subtotal.toString()[0] + '.' + subtotal.toString().slice(1)}</div>
                <div className="col-2 text-center d-flex align-items-center justify-content-center">{createdAt.slice(0, 10)}</div>
                <div className="col-2 text-center d-flex align-items-center justify-content-center">{updatedAt.slice(0, 10)}</div>
                <div className="col-2  text-center d-flex align-items-center justify-content-center">{usuarioId}</div>
                 
            </section>)
        }
        )
    );
}

export default Listado;