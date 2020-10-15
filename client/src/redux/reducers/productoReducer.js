import {
    GET_PRODUCTOS,
    GET_PRODUCTO_DETALLE,
    ADD_PRODUCT,
    SEARCH_PRODUCTO,
    MODIFY_PRODUCTO,
    REMOVE_PRODUCTO
} from '../actions/ActionTypes';

const initialState = {
    TodosLosProductos: [],
    Res: {}
}
export default function productoReducer(state = initialState, action) {
    switch (action.type){
        case GET_PRODUCTOS:
            const productos = action.payload.map((p) => ({
                id: p.id,
                nombre: p.nombre,
                precio: p.precio,
                stock: p.stock,
                imagen: p.imagen,
                descripcion: p.descripcion,
            }))
            return {
                ...state,
                TodosLosProductos: productos,
            };

            case GET_PRODUCTO_DETALLE:
                return;
            case ADD_PRODUCT:
                return {
                    ...state,
                    Res: action.payload,
                };
            case 
    }
}
