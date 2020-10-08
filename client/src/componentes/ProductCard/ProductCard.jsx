import React from 'react'
import {cartButton} from "../../Multimedia/Svgs";

const ProductCard = () => {
    return (
      <div className="w-screen h-screen flex justify-center items-center ">
        <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2 ">
          <div className="card flex flex-col justify-center bg-white rounded-lg shadow-2xl shadow-inner border-2 border-ligthgray-900">
            <div className="prod-title">
              <p className="text-2xl text-gray-900 font-bold">Patagonia Amber Lager</p>
            </div>
            <div className="prod-img">
              <img src="https://d26lpennugtm8s.cloudfront.net/stores/447/761/products/cerveza-patagonia-amber-lager-473ml1-04ed032175080a536915859457774813-1024-1024.jpg"
                  className="w-full object-cover object-center" />
            </div>
            <div className="prod-info grid gap-10">
              <div className="flex flex-row  justify-around items-center text-gray-900">
                <p className="font-bold text-xl">$65</p>
                <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-600 hover:text-white border-2 border-gray-900 focus:outline-none">{cartButton}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductCard;