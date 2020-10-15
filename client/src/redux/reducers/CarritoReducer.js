import {
    GET_USUARIO_CARRITO,
    POST_USUARIO_CARRITO,
    GET_VISITANTE_CARRITO,
    POST_VISITANTE_CARRITO,
    EDITAR_VISITANTE_CARRITO,
    DELETE_CARRITO,
    PUT_CATEGORIA,
  } from "./ActionTypes";

const initialState = {
    CarritoCompleto: [],
    Res: {}
}

export default function carritoReducer(state = initialState, action) {
    switch (action.type){
        case GET_USUARIO_CARRITO:
            const carrito = action.payload.map((item) => ({

            }))
            return {
                ...state,
                CarritoCompleto: carrito
            };

            case POST_USUARIO_CARRITO:
                return {
                    ...state,
                    Res: action.payload,
                };


    }
}