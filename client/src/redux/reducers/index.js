import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//Aca importo reducers
import ProductoReducer from "./productoReducer";
import UsuarioReducer from "./UsuarioReducer";
import CarritoReducer from "./CarritoReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  // aca los reducers;
  carrito: CarritoReducer,
  productos: ProductoReducer,
  usuario: UsuarioReducer,
});

export default persistReducer(persistConfig, rootReducer);
