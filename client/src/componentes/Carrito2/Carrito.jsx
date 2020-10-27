import React from 'react';
import {products} from './productos';
import Orden from '../Orden2/Orden2';
import Item from './Item';
import './Carrito.css';

const Carrito = () => {
   

    return (  
        <div className='container mt-5 carrito-general'>
        <section className='row w-100'>
            <div className='col-12 col-lg-8'>
                <div className='cont-uno d-flex justify-content-between'>
                 <h4 className='titulo-carrito w-75'>Tu carrito  <small className='ml-3 cant'>{products.length} {products.length === 1 ? 'Artículo' : 'Artículos'}</small>  </h4>
                 <span className='sc'>Sigue comprando</span>
                </div>
                {products && products.map(p => (
                    <Item
                        key={p.id}
                        nombre={p.nombre}
                        precio={p.precio}
                        imagen={p.imagen}
                        cantidad={p.cantidad}
                    />
                ))} 
            </div>
            <div className='col-12 col-lg-4 mt-4'>
                 <Orden productos={products}/> 
            </div>

        </section>
    </div>
    );
}
 
export default Carrito;