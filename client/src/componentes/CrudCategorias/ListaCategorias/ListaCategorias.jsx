import React from 'react';

const ListaCategorias = () => {
    return (
        <div>
            <section className='categorias-h row py-1 py-md-2 mb-1'>
                <div className="col-2">12</div>
                <div className="col-3">Artesanal</div>
                <div className="col-5">Cerveza más dulce de todas</div>
                <div className="col-2">
                    <i className="fas fa-pencil-alt p-1 mr-1 text-white" ></i>
                    <i className="fas fa-trash p-1 text-white" ></i>
                </div>
            </section>
        </div>

    );
}

export default ListaCategorias;

