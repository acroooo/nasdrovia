import React from "react";
import { cartButton } from "../../Multimedia/Svgs";


const ProductCard = () => {


  return (
    <div className="container">
      <div className="imagen">
        <img src="https://d26lpennugtm8s.cloudfront.net/stores/447/761/products/cerveza-patagonia-amber-lager-473ml1-04ed032175080a536915859457774813-1024-1024.jpg" alt="imagen" />
      </div>
      <div className="ui">
        <div className="info">
          <h5>Patagonia Amber Lager</h5>
          <h5>$59</h5>
          <p>Descripción-short</p>
        </div>
        <div className="botones">
          {cartButton}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
