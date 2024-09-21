// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './htmlComponents/MenuBar';
import Heading from './htmlComponents/Heading';
import Category from './htmlComponents/Category';
import Products from './components/Products';
import Footer from './htmlComponents/Footer';
import Catalog from './components/Catalog';  // Catalog page component
import Cart from './components/Cart';  // Cart page component

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div>
        <MenuBar cartItems={cartItems} />
        <Routes>
          {/* Main page */}
          <Route
            path="/"
            element={
              <>
                <Heading />
                <Category />
                <Products
                  cartItems={cartItems}
                  setCartItems={setCartItems}  // Pass cart management functions
                  showFilter={false}  // Disable filtering on the main page
                  showBrowseButton={true}  // Show Browse All Products button here
                />
                <Footer />
              </>
            }
          />

          {/* Catalog Page */}
          <Route
            path="/catalog"
            element={
              <Products
                cartItems={cartItems}
                setCartItems={setCartItems}
                showFilter={true}  // Enable filtering on the catalog page
                showBrowseButton={false}  // Hide Browse All Products button
              />
            }
          />

          {/* Cart Page */}
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

