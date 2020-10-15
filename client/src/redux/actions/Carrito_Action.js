import {
    GET_USUARIO_CARRITO,
    POST_USUARIO_CARRITO,
    GET_VISITANTE_CARRITO,
    POST_VISITANTE_CARRITO,
    EDITAR_VISITANTE_CARRITO,
    DELETE_CARRITO
} from './ActionTypes';
import axios from 'axios';

//get a Usuario
export const getProductoDetalle = (id) => (dispatch) => {
    axios.get(`http://localhost:3001/producto/${id}`)
    .then((res) => {
        const productoId = res.data;
        
        dispatch({
            type: GET_PRODUCTO_DETALLE,
            payload: productoId,
    })

    dispatch(getProductos());
    })
    .catch((err) => {
        const error = err.res.data;
        dispatch(error);
    });
}

//post a usuario
export const addProducto = (id, body) => (dispatch) => {
    axios.post(`http://localhost:3001/producto/${id}`, body)
    .then((res) => {
        const añadirProd = res.data;

        dispatch({
            type: ADD_PRODUCT,
            payload: añadirProd,
        })

        dispatch(getProductos());
    })

    .catch((err) => {
        const error = err.respuesta.data;
        dispatch(error);
    })
}

// //get a visitante
// export const getProductoDetalle = (id) => (dispatch) => {
//     axios.get(`http://localhost:3001/producto/${id}`)
//     .then((res) => {
//         const productoId = res.data;
        
//         dispatch({
//             type: GET_PRODUCTO_DETALLE,
//             payload: productoId,
//     })

//     dispatch(getProductos());
//     })
//     .catch((err) => {
//         const error = err.res.data;
//         dispatch(error);
//     });
// }

// //post a carrito
// export const addProducto = (id, body) => (dispatch) => {
//     axios.post(`http://localhost:3001/producto/${id}`, body)
//     .then((res) => {
//         const añadirProd = res.data;

//         dispatch({
//             type: ADD_PRODUCT,
//             payload: añadirProd,
//         })

//         dispatch(getProductos());
//     })

//     .catch((err) => {
//         const error = err.respuesta.data;
//         dispatch(error);
//     })
// }

// //put a visitante
// axios.put(`http://localhost:3001/producto/${id}`, body)
// .then((res) => {
//     const modificarProd = res.data;

//     dispatch({
//         type: MODIFY_PRODUCTO,
//         payload: modificarProd,
//         })

//         dispatch(getProductos());
// })

// .catch((err) => {
//     const error = err.respuesta.data;
//     dispatch(error);
// })

// //delete carrito
// export const deleteProducto = () => (dispatch) => {
//     dispatch({
//         type: REMOVE_PRODUCTO,
//         payload: null,
//     });
// };