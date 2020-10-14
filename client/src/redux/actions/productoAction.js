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

export const getProductos = () => dispatch => {
    axios.get(`http://localhost:3001/producto`)
    .then(res => {
        const cargaUtil = {
            
        }
    })
}
//todos los productos
// export function getProducts() {
//     return function(dispatch) {
//         return fetch('http://localhost:3001/producto')
//         .then(response => response.json())
//         .then(json => {
//             dispatch({ type: GET_PRODUCTOS, payload: json})
//         })
//     }
// }

//productos por ID
export function getProductDetail(id) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/producto/${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_PRODUCTO_DETALLE, payload: json})
        })
    }
}

//añadir producto
export function addProduct(producto) {
    return function(dispatch) {
        return fetch('http://localhost:3001/producto/', {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(producto),
                credentials: 'include'

            })
            .then((res) => {
                if (res.status === 200) {
                    return (
                        dispatch({ type: ADD_PRODUCT }),
                        window.location.replace('http://localhost:3000')
                    )
                } else {
                    alert("No se pudo agregar el producto. Intente nuevamente o contacte al administrador")
                }
            })
    }
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