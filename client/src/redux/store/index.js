import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../reducers/index";
import thunk from "redux-thunk";
//Agregando persistState
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default () => {
  let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
