import React, { useState } from "react";
import "./FormularioCrud.css";
import { productos, toggleModal, editar, nuevoProducto } from "./formulario";

const FormularioCrud = () => {
  const [productoActual, setProductoActual] = useState({});
  const handleChange = (e) => {
    setProductoActual({ ...productoActual, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container border bg-white-400  px-5 mx-auto mt-5 rounded py-10">
        <div className="encabezado bg-gray-300 py-3 flex justify-between px-2 rounded-md mb-1 border items-center">
          <h1 className="text-bold text-white text-2xl font-bold">
            Listado de productos
          </h1>
          <button
            className="btn-agregar bg-blue-400 py-2 px-4 rounded text-white flex items-center"
            id="agregar-producto"
            onClick={nuevoProducto}
          >
            <i className="fas fa-plus bg-white rounded-full text-blue-400 p-1 text-xs mr-1"></i>{" "}
            Nuevo Producto{" "}
          </button>
        </div>
        <div className="header-crud flex bg-blue-400 py-4 px-2 mb-2 rounded-md">
          <div className="codigo-crud mr-2 flex  items-center ">
            <p className="text-white text-xs sm:text-base">Código:</p>
            <input
              className="sm:py-1 px-2 rounded-sm ml-2 sm:ml-2 text-sm sm:text-base"
              type="text"
              placeholder="Código"
            />
          </div>
          <div className="codigo-crud flex mr-2  items-center">
            <p className="text-white text-xs sm:text-base">Nombre:</p>
            <input
              className="sm:py-1 px-2 rounded-sm  sm:ml-2 ml-2 text-sm sm:text-base"
              type="text"
              placeholder="Nombre"
            />
          </div>
          <button className="btn-buscar bg-black text-white px-4 py-1 md:px-6 rounded-sm text-xs md:text-base">
            Buscar
          </button>
        </div>

        <div className="sub-header rounded-t grid grid-cols-12 bg-gray-500  p-2 gap-2">
          <div className="titulo text-white col-span-4 xl:col-span-1 font-bold">
            Código
          </div>
          <div className="titulo text-white col-span-4 xl:col-span-1 font-bold">
            Nombre
          </div>
          <div className="titulo text-white col-span-4 font-bold hidden xl:block">
            Descripción
          </div>
          <div className="titulo text-white col-span-2 font-bold hidden xl:block">
            Imagen
          </div>
          <div className="titulo text-white col-span-1 font-bold hidden xl:block">
            Stock
          </div>
          <div className="titulo text-white col-span-1 font-bold hidden xl:block">
            Precio
          </div>
          <div className="titulo text-white col-span-4 xl:col-span-2 font-bold ">
            Acciones
          </div>
        </div>

        {productos.map((producto) => (
          <div
            key={producto.id}
            className="fila-tabla grid grid-cols-12  p-2 gap-2 border"
          >
            <div className="titulo col-span-4 xl:col-span-1">{producto.id}</div>
            <div className="nombre col-span-4 xl:col-span-1 ">
              {producto.nombre}
            </div>
            <div className="descripcion col-span-4 hidden xl:block">
              {producto.descripcion}{" "}
            </div>
            <div className="imagen col-span-2 hidden xl:block">
              {producto.imagen}
            </div>
            <div className="stock col-span-1 hidden xl:block">
              {producto.stock}
            </div>
            <div className="precio col-span-1 hidden xl:block">
              ${" "}
              {producto.precio.toString()[0] +
                "." +
                producto.precio.toString().slice(1)}
            </div>
            <div className="titulo col-span-4 xl:col-span-2 ">
              <span>
                <i
                  className="fas fa-pencil-alt p-1 bg-blue-600 text-white rounded-sm mr-2"
                  onClick={() => editar(setProductoActual, producto)}
                ></i>
              </span>
              <span>
                <i className="fas fa-trash p-1 bg-red-600 text-white rounded-sm"></i>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              onClick={toggleModal}
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
            <span className="text-sm">(Esc)</span>
          </div>

          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold mx-4">Agregar Producto</p>
              <div className="modal-close cursor-pointer z-50">
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  onClick={toggleModal}
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>

            <form className="grid grid-cols-12">
              <label className="col-span-12 mb-1 mx-4">Código</label>
              <input
                name="id"
                className="col-span-12 border mx-4 px-2 py-1"
                type="text"
                id="id"
                onChange={handleChange}
              />
              <label className="col-span-12 mb-1 mx-4">Nombre</label>
              <input
                name="nombre"
                className="col-span-12 border mx-4 px-2 py-1"
                type="text"
                id="nombre"
                onChange={handleChange}
              />
              <label className="col-span-12 mb-1 mx-4">Descripción</label>
              <input
                name="descripcion"
                className="col-span-12 border mx-4 px-2 py-1"
                type="text"
                id="descripcion"
                onChange={handleChange}
              />
              <label className="col-span-12 mb-1 mx-4">Imagen</label>
              <input
                name="imagen"
                className="col-span-12 border mx-4 px-2 py-1"
                type="text"
                id="imagen"
                onChange={handleChange}
              />
              <label className="col-span-12 mb-1 mx-4">Stock</label>
              <input
                name="stock"
                className="col-span-12 border mx-4 px-2 py-1"
                type="text"
                id="stock"
                onChange={handleChange}
              />
              <label className="col-span-12 mb-1 mx-4">Precio</label>
              <input
                name="precio"
                className="col-span-12 border mx-4 px-2 py-1"
                type="text"
                id="precio"
                onChange={handleChange}
              />
            </form>

            <div className="flex justify-end pt-2">
              <button className="btn-nuevo px-4 bg-blue-500 py-1 text-white rounded-md hover:opacity-75  mr-2">
                Agregar
              </button>
              <button
                className="btn-cancelar modal-close px-4 bg-indigo-500  rounded-md text-white hover:opacity-75"
                onClick={toggleModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioCrud;
