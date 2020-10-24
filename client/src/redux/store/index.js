// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducers from '../reducers/index';
// import thunk from 'redux-thunk';
// //ver mas adelante si agrego persistState

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducers, composeEnhancers(
//     applyMiddleware(thunk)))
// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import rootReducers from "../reducers/index";
import thunk from "redux-thunk";
//ver mas adelante si agrego persistState

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistore = persistStore(store);

export default { store, persistore };
