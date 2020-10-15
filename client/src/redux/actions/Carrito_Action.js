import {
  GET_USUARIO_CARRITO,
  POST_USUARIO_CARRITO,
  GET_VISITANTE_CARRITO,
  POST_VISITANTE_CARRITO,
  EDITAR_VISITANTE_CARRITO,
  DELETE_CARRITO,
  PUT_CATEGORIA,
} from "./ActionTypes";
import axios from "axios";

//NO TOCAR - MODIFICANDO EN BASE A RUTAS


//Esta esta totalmente incompleta, 
export const getUsuarioCarrito = (idUser, body) => (dispatch) => {
  axios
    .get(`http://localhost:3001/usuarios/${idUser}/cart`, body) //falta url
    .then((res) => {
      const payload = {
        //payload => esperando rutas funcionales
      };
      dispatch({
        type: GET_USUARIO_CARRITO,
        payload: payload,
      });
      //Dispatch?
    })
    .catch((err) => {
      const error = err.res.data;
      dispatch(error);
    });
};

//post a usuario
//revisar que este bien igual que las demas.
export const postUsuarioCarrito = (idUser, body) => (dispatch) => {
  axios
    .post(`http://localhost:3001/usuarios/${idUser}/cart`, body)
    .then((res) => {
      const postCarrito = res.data;

      dispatch({
        type: POST_USUARIO_CARRITO,
        payload: postCarrito,
      });

      dispatch(postUsuarioCarrito());
    })

    .catch((err) => {
      const error = err.res.data;
      dispatch(error);
    });
};

//get a visitante
export const getVisCarrito = (idUser) => (dispatch) => {
  axios
    .get(`http://localhost:3001/usuarios/${idUser}/cart`)
    .then((res) => {
      const getVisCarro = res.data;

      dispatch({
        type: GET_VISITANTE_CARRITO,
        payload: getVisCarro,
      });

      dispatch(getVisCarrito());
    })
    .catch((err) => {
      const error = err.res.data;
      dispatch(error);
    });
};

//post a carrito
export const postVisCarrito = (idUser, body) => (dispatch) => {
  axios
    .post(`http://localhost:3001/usuarios/${idUser}/cart`, body)
    .then((res) => {
      const postVisCarro = res.data;

      dispatch({
        type: POST_VISITANTE_CARRITO,
        payload: postVisCarro,
      });

      dispatch(postVisCarrito());
    })

    .catch((err) => {
      const error = err.res.data;
      dispatch(error);
    });
};

//put a visitante
export const putVisCarrito = (idUser, body) => (dispatch) => {
  axios
    .put(`http://localhost:3001/usuarios/${idUser}/cart`, body)
    .then((res) => {
      const modificarVisC = res.data;

      dispatch({
        type: EDITAR_VISITANTE_CARRITO,
        payload: modificarVisC,
      });

      dispatch(putVisCarrito());
    })

    .catch((err) => {
      const error = err.respuesta.data;
      dispatch(error);
    });
};

//delete carrito
export const deleteProducto = () => (dispatch) => {
  dispatch({
    type: DELETE_CARRITO,
    payload: null,
  });
};
