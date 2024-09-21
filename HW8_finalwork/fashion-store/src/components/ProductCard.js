// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.header} className="card_img" />
      <div className="info">
        <h3 className="card_title">{product.header}</h3>
        <p className="card_description">{product.description}</p>
        <p className="card_price">${product.price.toFixed(2)}</p>
        <div className="overlay">
          {/* Add to Cart Button */}
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

