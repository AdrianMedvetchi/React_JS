// src/components/Cart.js
import React, { useState } from 'react';
import './Cart.css'; // We'll create this file for custom styling

function Cart({ cartItems, setCartItems }) {
  // Function to update the quantity of items in the cart
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart">
      <h2 className="cart-title">Shopping Cart</h2>

      {/* Check if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-description">{item.description}</p>
                <p className="cart-item-price">${item.price}</p>
                <div className="cart-item-controls">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Math.max(1, parseInt(e.target.value)))
                    }
                    className="quantity-input"
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="cart-item-total">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Display Grand Total */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Grand Total: ${calculateTotal().toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
