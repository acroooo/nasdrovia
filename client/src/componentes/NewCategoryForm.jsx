import React from "react";

function NewCatForm() {
    return (
        <div class="antialiased text-gray-900 bg-blue-600">
            <div class="mx-4 card bg-white max-w-md p-10 md:rounded-lg my-8 mx-auto">
                <div class="title">
                    <h1 class="font-bold text-center">Agregar nueva categoria</h1>
                </div>
                <div class="form mt-4">
                    <div class="flex flex-col text-sm">
                        <label for="title" class="font-bold mb-2">Nombre</label>
                        <input class=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500" type="text" placeholder="Belgian white" />
                    </div>
                    <div class="text-sm flex flex-col">
                        <label for="description" class="font-bold mt-4 mb-2">Descripción</label>
                        <textarea class=" appearance-none w-full border border-gray-200 p-2 h-40 focus:outline-none focus:border-gray-500" placeholder="Cerveza de trigo de origen belga"></textarea>
                    </div>
                </div>
                <div class="submit">
                    <button type="submit" class=" w-full bg-blue-600 shadow-lg text-white px-4 py-2 hover:bg-blue-700 mt-8 text-center font-semibold focus:outline-none ">Enviar</button>
                </div>
            </div>
        </div>)
};

export default NewCatForm;