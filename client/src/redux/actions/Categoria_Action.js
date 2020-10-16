import {
  GET_CATEGORIA,
  GET_CATEGORIAS,
  POST_CATEGORIA,
  PUT_CATEGORIA,
  DELETE_CATEGORIA,
} from "./ActionTypes";
import Axios from "axios";

// ------------- Obtener Categoria -----------
export const getCategoria = () => (dispatch) => {
  dispatch({
    type: GET_CATEGORIA,
    payload: null,
  });
};

// ------------- Get Categorias-----------

export const getCategorias = () => (dispatch) => {
  Axios.get("http://localhost:3001/productos/categoria/nombre")
    .then((respuesta) => {
      const categorias = respuesta.data;

      dispatch({
        type: GET_CATEGORIAS,
        payload: categorias,
      });
    })
    .catch((error) => {
      dispatch(error);
    });
};

//----------------- Enviar categoria

export const postCategoria = (categoria) => (dispatch) => {
  Axios.post("http://localhost:3001/productos/categoria", categoria)
    .then((respuesta) => {
      dispatch({
        type: POST_CATEGORIA,
        payload: respuesta.data,
      });

      dispatch(getCategorias());
    })
    .catch((error) => {
      const error = error.respuesta.data;
      dispatch(error);
    });
};
//--------------------- Editar Categoria

export const putCategoria = (id, body) => (dispatch) => {
  Axios.put(`http://localhost:3001/producto/${id}`, body)
    .then((respuesta) => {
      const editarCategoria = respuesta.data;

      dispatch({
        type: PUT_CATEGORIA,
        payload: editarCategoria,
      });

      dispatch(getCategorias());
    })
    .catch((error) => {
      const errorMsg = error.respuesta.data;
      dispatch(errorMsg);
    });
};

//--------------------- Eliminar Categoria

export const deleteCategoria = () => (dispatch) => {
  dispatch({
    type: DELETE_CATEGORIA,
    payload: null,
  });
};
