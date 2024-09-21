import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './htmlComponents/MenuBar';
import Heading from './htmlComponents/Heading';
import Category from './htmlComponents/Category';
import Products from './components/Products';
import Footer from './htmlComponents/Footer';
import Catalog from './components/Catalog'; 
import Cart from './components/Cart';

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
                  setCartItems={setCartItems} 
                  showFilter={false} 
                  showBrowseButton={true} 
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
                showFilter={true} 
                showBrowseButton={false} 
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

