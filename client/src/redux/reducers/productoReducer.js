import {
<<<<<<< HEAD
  GET_PRODUCTOS,
  GET_PRODUCTO_DETALLE,
  ADD_PRODUCTO,
  SEARCH_PRODUCTO,
  MODIFY_PRODUCTO,
  REMOVE_PRODUCTO,
} from "../actions/ActionTypes";
=======
    GET_PRODUCTOS,
    GET_PRODUCTO_DETALLE,
    ADD_PRODUCTO,
    SEARCH_PRODUCTO,
    MODIFY_PRODUCTO,
    REMOVE_PRODUCTO
} from '../actions/ActionTypes';
>>>>>>> 9db3a8b1b4c095dd3e107a7dbfd7b23b6140e743

const initialState = {
  TodosLosProductos: [],
  Res: {},
};
export default function productoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTOS:
      const productos = action.payload.map((p) => ({
        id: p.id,
        nombre: p.nombre,
        precio: p.precio,
        stock: p.stock,
        imagen: p.imagen,
        descripcion: p.descripcion,
      }));
      return {
        ...state,
        TodosLosProductos: productos,
      };

<<<<<<< HEAD
    case GET_PRODUCTO_DETALLE:
      return;
    case ADD_PRODUCTO:
      return {
        ...state,
        Res: action.payload,
      };
    case SEARCH_PRODUCTO:
      return;
    case MODIFY_PRODUCTO:
      return {
        ...state,
        Res: action.payload,
      };
    case REMOVE_PRODUCTO:
      return;
    default:
      return state;
  }
}
=======
            case GET_PRODUCTO_DETALLE:
                return;
            case ADD_PRODUCTO:
                return {
                    ...state,
                    Res: action.payload,
                };
            case SEARCH_PRODUCTO:
                return;
            case MODIFY_PRODUCTO:
                return {
                    ...state,
                    Res: action.payload,
                }
            case REMOVE_PRODUCTO:
                return;
            default:
                return state;
    }
}
>>>>>>> 9db3a8b1b4c095dd3e107a7dbfd7b23b6140e743
