import React, { useState, useEffect } from "react";
import "./Orden.css";
import { connect } from 'react-redux'
import { Card, Carousel, Container, Image, Button, Row } from "react-bootstrap";
// Detalles de la Orden (el carrito) de un usuario.

// Debe incluir los items que compró junto con el precio, y los totales.
//falta el actions

function orden(props){

    // useEffect(()=>{
    //     getOrdenUser(usuario.idUser)
    // },[getOrdenUser,usuario])
    
    // return(
    //     <div className="container">
    //         <table className= "table table-dark">
    //             <thead>
    //                 <tr key="0">
    //                 <th scope="col">Id Orden</th>
    //                 <th scope="col">Estado</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {ordenes.map(orden=>
    //                     <tr key={orden.idOrden}>
    //                         <td>{orden.idOrden}</td>
    //                         <td>{orden.estado}</td>
    //                         <td><BotonDetalleOrden idOrden={orden.idOrden}></BotonDetalleOrden></td>
    //                     </tr>
    //                 )}
    //             </tbody>
    //         </table>
    //     </div>
    // )
}

function mapStateToProps(state){
    return{
        ordenes : state.usuario.ordenesUsuario, usuario: state.usuario.usuarioConectado  }
    
}

export default orden;
