import React, { useEffect, useState } from "react";
import "./carrito.css";
import Miniprod from "./miniproduct"
import Loader from "../Loader/Loader"

var producto = [{
    nombre: "Andes Origen IPA",
    precio: 150,
    imagen: "https://nosalgas.com.ar/wp-content/uploads/2020/07/lata-andes-IPA-1.jpg",
    stock: "15"
},
{
    nombre: "patagonia 24.7",
    precio: 180,
    imagen: "https://tatauy.vteximg.com.br/arquivos/ids/169805-1000-1000/Cerveza-Patagonia-247-Ipa-473Ml-1-9176.jpg?v=637122474247070000",
    stock: "13"
},
{
    nombre: "Siete Cholas Porter",
    precio: 190,
    imagen: "https://cdn.shopify.com/s/files/1/1103/5152/products/siete_cholas-porter_1000x1647_c1da1f36-f67c-4f4a-893f-715be5f68b1a_1024x1024.png?v=1580500624",
    stock: "5"
}, {
    nombre: "Andes Origen IPA",
    precio: 150,
    imagen: "https://nosalgas.com.ar/wp-content/uploads/2020/07/lata-andes-IPA-1.jpg",
    stock: "15"
},
{
    nombre: "patagonia 24.7",
    precio: 180,
    imagen: "https://tatauy.vteximg.com.br/arquivos/ids/169805-1000-1000/Cerveza-Patagonia-247-Ipa-473Ml-1-9176.jpg?v=637122474247070000",
    stock: "13"
},
{
    nombre: "Siete Cholas Porter",
    precio: 190,
    imagen: "https://cdn.shopify.com/s/files/1/1103/5152/products/siete_cholas-porter_1000x1647_c1da1f36-f67c-4f4a-893f-715be5f68b1a_1024x1024.png?v=1580500624",
    stock: "5"
}, {
    nombre: "Andes Origen IPA",
    precio: 150,
    imagen: "https://nosalgas.com.ar/wp-content/uploads/2020/07/lata-andes-IPA-1.jpg",
    stock: "15"
},
{
    nombre: "patagonia 24.7",
    precio: 180,
    imagen: "https://tatauy.vteximg.com.br/arquivos/ids/169805-1000-1000/Cerveza-Patagonia-247-Ipa-473Ml-1-9176.jpg?v=637122474247070000",
    stock: "13"
},
{
    nombre: "Siete Cholas Porter",
    precio: 190,
    imagen: "https://cdn.shopify.com/s/files/1/1103/5152/products/siete_cholas-porter_1000x1647_c1da1f36-f67c-4f4a-893f-715be5f68b1a_1024x1024.png?v=1580500624",
    stock: "5"
}];


export default function Carrito(props) {
    const [total, setTotal] = useState(0);
    const [envio, setEnvio] = useState(0);
    const [subtotal, setSubTotal] = useState(0);
    const [listaproductos, setListaProductos] = useState({ res: null, isLoaded: false });
    const descuento = 0.8;
    useEffect(() => {
        setListaProductos({
            res: producto.map(e => {
                e.cantidad = 1;
                return e
            }), isLoaded: true
        })
        let res = 0;
        for (let i = 0; i < producto.length; i++) {
            res += producto[i].precio;
        }
        setSubTotal(res);
        setTotal((res * descuento) + envio)
    }, [])


    return (
        <div>
            <div className="clean-block clean-cart dark">
                <div className="carrito col-lg-10">
                    <div className="header">
                        <h3 className="text-info">Carrito</h3>
                        <p>Aqui encotraras el resumen de tu pedido</p>
                    </div>
                    <div className="content">
                        <div className="row no-gutters">
                            <div className="col-md-12 col-lg-8">
                                <div className="items">
                                    {
                                        listaproductos.isLoaded ?
                                            listaproductos.res.map((e, i) => {
                                                return <Miniprod producto={e} setListaProductos={setListaProductos} listaproductos={listaproductos} key={i} />
                                            }) : <Loader />}
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="resumen col-md-8 col-lg-12">
                                    <h3>Resumen</h3>
                                    <h4><span className="text ">Subtotal</span><span className="price">${subtotal}</span></h4>
                                    <h4><span className="text">Descuentos</span><span className="price">${subtotal - (subtotal * descuento)}</span></h4>
                                    <h4><span className="text">Envio</span><span className="price">$0</span></h4>
                                    <h4><span className="text">Total</span><span className="price">${total}</span></h4><button className="btn btn-primary btn-block btn-lg" type="button">Checkout</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}