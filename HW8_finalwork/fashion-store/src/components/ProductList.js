// src/components/ProductList.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import data from '../data';

function ProductList() {
  const [selectedSize, setSelectedSize] = useState('');

  // Function to handle size filter
  const handleSizeFilter = (size) => {
    setSelectedSize(size);
  };

  // Filter products based on the selected size
  const filteredProducts = selectedSize
    ? data.filter((product) => product.size === selectedSize)
    : data;

  return (
    <div>
      <h2>Product Catalog</h2>

      {/* Filter Menu */}
      <div className="filter-menu">
        <button onClick={() => handleSizeFilter('S')}>S</button>
        <button onClick={() => handleSizeFilter('M')}>M</button>
        <button onClick={() => handleSizeFilter('L')}>L</button>
        <button onClick={() => handleSizeFilter('XS')}>XS</button>
      </div>

      {/* Display Filtered Products */}
      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
