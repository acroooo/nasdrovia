import React,{useState,useEffect} from 'react';
import Orden from '../Orden2/Orden2';
import Item from './Item';
import './Carrito.css';
import {Link} from 'react-router-dom';


const Carrito = () => {
    
    const [cambio,setCambio]=useState(false);
    const [prodcarrito,setProdCarrito]=useState([]);
    const [total,setTotal]=useState(false);
    
    
    useEffect(()=>{
        let products = localStorage['carrito'] ? JSON.parse(localStorage['carrito']):[];
        setProdCarrito(products);
        setCambio(false);

    },[cambio]) 

    return (  
        <div className='container  carrito-general '>
        <section className='row w-100'>
            <div className='col-12 col-lg-8'>
                <div className='cont-uno d-flex justify-content-between'>
                <h4 className='titulo-carrito w-75'>Tu carrito  <small className='ml-3 cant'>{prodcarrito && prodcarrito.length} {prodcarrito && prodcarrito.length === 1 ? 'Artículo' : 'Artículos'}</small>  </h4>
            <Link to='/'><span className='sc '>{prodcarrito.length>0 ? 'Sigue comprando':'Empieza a comprar'}</span></Link>   
            
                </div>
                {prodcarrito && prodcarrito.map(p => (
                    <Item
                        key={p.productoId}
                        nombre={p.nombreR}
                        precio={p.precio}
                        imagen={p.imagen}
                        cantidad={p.cantidad}
                        stock={p.stock}
                        productoId={p.productoId}
                        setCambio={setCambio}
                        setTotal={setTotal}
                    />
                ))} 
            </div>
            <div className='col-12 col-lg-4 mt-4'>
                <Orden total={total} setTotal={setTotal}/> 
            </div>

        </section>
    </div>
    );
}
 
export default Carrito;