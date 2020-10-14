import {
  GET_CATEGORIAS,
  GET_CATEGORIA,
  POST_CATEGORIA,
  PUT_CATEGORIA,
  DELETE_CATEGORIA,
} from "../actions/ActionTypes";

const initialState = {
  TodasLasCategorias: [],
  Respuesta: {},
};
export default function categoriaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIAS:
      const categorias = action.payload.map((categoria) => ({
        id: categoria.id,
        nombre: categoria.nombre,
        descripcion: categoria.descripcion,
      }));

      return {
        ...state,
        TodasLasCategorias: categorias,
      }; // < ------------------------------------------------------ almost all actions bellow this line will be probably deprecated maybe error will remain
    case GET_CATEGORIA:
      return;
    case POST_CATEGORIA:
      return {
        ...state,
        Respuesta: action.payload,
      };
    case DELETE_CATEGORIA:
      return;
    case PUT_CATEGORIA:
      return {
        ...state,
        Respuesta: action.payload,
      };
    default:
      return state;
  }
}
