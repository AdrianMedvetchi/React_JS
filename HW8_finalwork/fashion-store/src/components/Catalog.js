import React from 'react';
import Products from './Products';
import './Catalog.css';

function Catalog({ cartItems, setCartItems }) {
  return (
    <div>
      <div className="catalog-body">
        <Products cartItems={cartItems} setCartItems={setCartItems} showFilter={true} showBrowseButton={false} />
      </div>
    </div>
  );
}

export default Catalog;
