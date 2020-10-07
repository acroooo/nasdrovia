import React from "react";
import "./Producto.css";

const Producto = () => {
  return (
    <div class="py-12 bg-white">
      <div
        class="max-w-screen-xl mx-auto px-8 sm:px-6 lg:px-8"
        style={{ width: 1064 }}
      >
        <div class="bg-yellow-400 bg-opacity-25 shadow-xl w-full rounded-lg overflow-hidden ">
          <div class="bg-cover bg-center h-64 p-3">
            <div class="bg-cover bg-center h-56 p-4">
              <div class="flex justify-end">
                <svg
                  class="h-6 w-6 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4">
          <p class="uppercase tracking-wide text-sm font-bold text-gray-700"></p>
          <p class="text-3xl text-gray-900"></p>
          <p class="text-gray-700">Producto Argentino</p>
        </div>
        <div class="flex p-4 border-t border-gray-300 text-gray-700">
          <div class="flex-1 inline-flex items-center justify">
            {/* icono */}
            <p>
              <span class="text-gray-900 font-bold">x</span> Cepa
            </p>
          </div>
          <div class="flex-1 inline-flex items-center">
            {/* icono */}
            <p>
              <span class="text-gray-900 font-bold">x</span> Malta
            </p>
          </div>
        </div>
        <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
          <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">
            Pedidos
          </div>
          <div class="flex items-center justify-center pt-2">
            <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3"></div>
            <div class="flex flex-wrap">
              <div class="flex flex-wrap">
                <div class="flex w-1/2">
                  <input
                    type="text"
                    value="7"
                    class="bg-white text-sm text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 rounded-l-md w-full"
                  />
                </div>
                <div class="flex flex-col w-4/12">
                  <button class="text-white text-center text-md font-semibold rounded-tr-md px-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600">
                    +
                  </button>
                  <button class="text-white text-center text-md font-semibold rounded-br-md px-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
