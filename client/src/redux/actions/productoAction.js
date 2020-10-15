import {
    GET_PRODUCTOS,
    GET_PRODUCTO_DETALLE,
    ADD_PRODUCT,
    SEARCH_PRODUCTO,
    MODIFY_PRODUCTO,
    REMOVE_PRODUCTO
} from './ActionTypes';

import axios from 'axios';
// URL Back


//Productos
export const getProductos = () => dispatch => {
    axios.get(`http://localhost:3001/producto`)
    .then((res) => {
        const cargaUtil = {
            productos: res.data,
        }
        dispatch({type: GET_PRODUCTOS, payload: cargaUtil})
    })
    .catch(err => console.log(err));
}

//productos por ID
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

//añadir producto
export const addProducto = (id, body) => (dispatch) => {
    axios.put(`http://localhost:3001/producto/${id}, body`)
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


export function searchProducto(producto){
    return function(dispatch) {
        return fetch(`http://localhost:3001/search?busqueda=${producto}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: SEARCH_PRODUCTO, payload: json})
        })
    }
}

export function modifyProducto(producto, id) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/producto/${id}`, {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(producto),
            credentials: 'include'
        })
        .then(res) => {
            if(res.status === 200){
                // agregar categoria
                fetch()
            }
        }
    }
}