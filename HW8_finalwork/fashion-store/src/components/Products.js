import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import data from '../data';
import './ProductCard.css';


function Products({cartItems, setCartItems, showFilter = false, showBrowseButton = true }) {

  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeFilter = (size) => {
    setSelectedSize(size);
  };

  const filteredProducts = selectedSize
    ? data.filter((product) => product.size === selectedSize)
    : data;

    const addToCart = (product) => {
      setCartItems((prevCart) => {
        const productInCart = prevCart.find((item) => item.id === product.id);
  
        if (productInCart) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    };

  return (
    <div className="products">
      <div className="products_description">
        <h1 className="products_title">Featured Items</h1>
        <p className="products_subtitle">Shop for items based on what we featured this week</p>
      </div>

      {/* Size Filter Menu */}
      {showFilter && (
      <div className="filter-menu">
        <button
          className={`filter-btn ${selectedSize === 'S' ? 'active' : ''}`}
          onClick={() => handleSizeFilter('S')}
        >
          S
        </button>
        <button
          className={`filter-btn ${selectedSize === 'XS' ? 'active' : ''}`}
          onClick={() => handleSizeFilter('XS')}
        >
          XS
        </button>
        <button
          className={`filter-btn ${selectedSize === 'M' ? 'active' : ''}`}
          onClick={() => handleSizeFilter('M')}
        >
          M
        </button>
        <button
          className={`filter-btn ${selectedSize === 'L' ? 'active' : ''}`}
          onClick={() => handleSizeFilter('L')}
        >
          L
        </button>
        <button
          className={`filter-btn ${selectedSize === '' ? 'active' : ''}`}
          onClick={() => handleSizeFilter('')}
        >
          All
        </button>
      </div>
    )}

      <div className="wrapper">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
      {showBrowseButton && (
        <Link to="/catalog">
        <button className="btn">Browse All Products</button>
      </Link>
      )}
    </div>
  );
}

export default Products;
