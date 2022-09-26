import React from "react";
import "./ProductTile.css";

const ProductTile = ({ productName, productPrice, productImageSrc }) => {
  return (
    <div className="productTile">
      <h2 className="productHeader">{productName}</h2>
      <img src={productImageSrc} alt="product" className="productImage" />
      <p>{productPrice}</p>
    </div>
  );
};

export default ProductTile;
