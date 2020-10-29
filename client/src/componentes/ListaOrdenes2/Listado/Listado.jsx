import React from 'react';


const Listado = (props) => {

    console.log(props.lista.res)


    return (
        props.lista.res !== null ? props.lista.res.map(orden => {
            let claseBtn = orden.estado === 'carrito' ? 'btn-estado-orden completado' : 'btn-estado-orden rechazado';
            const { id, estado, total, creadtedAt, updatedAt, UserId } = orden;
            return (<section className='categorias-h row py-1 py-md-2 mb-1 text-center' key={id} >
                <div className="col-2 text-center">{id}</div>
                <div className="col-2 text-center">
                    <button className={claseBtn} disabled>{estado[0].toUpperCase() + estado.slice(1)}</button>
                </div>
                <div className="col-2 text-center">$ {total.toString()[0] + '.' + total.toString().slice(1)}</div>
                <div className="col-2 text-center">{creadtedAt}</div>
                <div className="col-2 text-center">{updatedAt}</div>
                <div className="col-2  text-center">{UserId}</div>
            </section>)
        }
        ) : <div><p>no se encontraron ordenes que coincidan con el criterio</p></div>
    );
}

export default Listado;