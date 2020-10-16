import { combineReducers } from "redux";

//Aca importo reducers
import CategoriaReducer from "./CategoriaReducer";
import ProductoReducer from "./productoReducer";
import UsuarioReducer from "./UsuarioReducer";

export default combineReducers({
  // aca los reducers;

  categorias: CategoriaReducer,
  productos: ProductoReducer,
  usuario: UsuarioReducer,
});
