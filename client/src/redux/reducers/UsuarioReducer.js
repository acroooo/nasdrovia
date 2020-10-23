import { LOGIN, LOGOUT } from "../actions/ActionTypes";

const initialState = {
  rol: "Guest",
  id: 0,
  email: null,
  nombre: null,
};

export default function usuarioReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        rol: action.payload.role,
        id: action.payload.id,
        email: action.payload.email,
        nombre: action.payload.nombre,
      };
    case LOGOUT:
      return {
        ...state,
        rol: "Guest",
        id: 0,
        email: null,
        nombre: null,
      };
    default:
      return state;
  }
}
