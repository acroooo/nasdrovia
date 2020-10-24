import React, { useCallback, useEffect, useState } from "react";
import "./carrito.css";
import Miniprod from "./miniproduct"
import Loader from "../Loader/Loader"
import { useSelector, useDispatch, connect } from 'react-redux'
import allActions from '../../redux/actions/allActions'
import Producto from "../Producto/Producto";
import Axios from "axios";
// ============ FIN DE IMPORTS ================= //

export default function Carrito() {

    // ================ LLEGA TODO SOLO SE TIENE QUE RENDEREAR BIEN MINIPROD ==================== //

    // ================== ESTADO REDUX ======================//
    const productoStore = useSelector(state => state.productos.TodosLosProductos)
    const usuario = useSelector(state => state.usuario.id)
    const productoCarrito = useSelector(state => state.carrito.CarritoCompleto)
    const dispatch = useDispatch()

    // ================== ESTADO COMOPONENTES ===================== //
    const [total, setTotal] = useState(0);
    const [envio, setEnvio] = useState(0);
    const [subtotal, setSubTotal] = useState(0);
    const [listaproductos, setListaProductos] = useState({});
    const [user, setUser] = useState(0)
    const descuento = 0.8;

    // ================== USE EFFECT ========================//
    useEffect(
         () => {
           dispatch(allActions.getUsuarioCarrito(usuario))
           dispatch(allActions.login)

        },[])

        // const productosPorId = (id) => {
        //              Axios.get(`http://localhost:3001/producto/${id}`)
        //             .then((res) => {
        //                 if(res) {
        //                     setListaProductos(res.data)
        //                 }
        //                 })
        // }
    // useEffect(() => {
    //     setListaProductos({
    //         res: producto.map(e => {
    //             e.cantidad = 1;
    //             return e
    //         }), isLoaded: true
    //     })
    //     let res = 0;
    //     for (let i = 0; i < producto.length; i++) {
    //         res += producto[i].precio;
    //     }
    //     setSubTotal(res);
    //     setTotal((res * descuento) + envio)
    // }, [])
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
                                { productoCarrito.lineaDeOrdens.map((item, index) => {
                                    const {productoId} = item
                                   return <Miniprod productoId={productoId} />
                                })}
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