import React from 'react'

const Card = ({ producto }) => {
    const { photo } = producto;
    return (
        <div className='card'>
            <img src={photo} alt="" className='object-contain m-auto' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">TailWind Funcionando</div>
                <p className="text-gray-700 text-base">
                    Ahora lo que nos falta es aprender como agregar a cada archivo su propio CSS - Revisen la carpeta Assets/ que desde ahi me parece que podemos s los css a sus respectivos componentesvincular todo
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#somoscracks</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#cervezas</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#grupo10</span>
            </div>
        </div>
    )
}

export default Card