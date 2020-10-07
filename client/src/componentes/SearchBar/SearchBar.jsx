import React, { useState, useEffect } from "react";
import { cartButton, userButton, searchButton } from "../../Multimedia/Svgs";

export default function SearchBar() {
  //Hooks
  const [search, setSearch] = useState({ query: "" });

  // ----- Funcionalidad ----

  const handleChange = (event) =>
    setSearch({ ...search, [event.target.name]: event.target.value });

  return (
    <div class="w-screen flex flex-row items-center p-1 justify-between bg-gray-800 shadow-xs">
      <div class="logo">
        <img
          src="https://i.pinimg.com/originals/0f/72/14/0f721400c190ad9a138cd12d71694cdf.png"
          alt="Logo"
          width="90px"
        />
      </div>
      <span class="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <input
          type="search"
          name="serch"
          placeholder="Buscar..."
          onChange={handleChange}
          class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        />
        <i class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4">
          {searchButton}
        </i>
      </span>
      <div class="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <i class="fas fa-bars"></i>
      </div>
      {/* ----------- Usuario y carrito----------- */}
      <div class="flex flex-row-reverse mr-8 hidden md:flex">
        <div class="text-gray-700  rounded-full text-center bg-gray-700 px-4 py-2 m-2">
          {cartButton}
        </div>
        <div class="text-gray-700  rounded-full text-center bg-gray-700 px-4 py-2 m-2">
          {userButton}
        </div>
      </div>
    </div>
  );
}
