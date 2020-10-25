import { LOGIN, LOGOUT } from "../actions/ActionTypes";


//Harcodeado, problema que solo lee guest
const initialState = {
  rol: "Admin",
  id: 1,
  email: null,
  nombre: null,
};

export default function UsuarioReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      const rol = action.payload;
      const id = action.payload;
      const email = action.payload;
      const nombre = action.payload;
      return {
        ...state,
        rol,
        id,
        email,
        nombre,
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
