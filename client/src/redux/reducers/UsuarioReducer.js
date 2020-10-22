import { LOGIN, LOGOUT } from "../actions/ActionTypes";

const initialState = {
  role: "Guest",
  id: 0,
  email: null,
  nombre: null,
};

export default function usuarioReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        role: action.payload.role,
        id: action.payload.id,
        email: action.payload.email,
        nombre: action.payload.nombre,
      };
    case LOGOUT:
      return {
        ...state,
        role: "Guest",
        id: 0,
        email: null,
        nombre: null,
      };
    default:
      return state;
  }
}
