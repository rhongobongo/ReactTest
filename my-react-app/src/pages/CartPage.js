import React from 'react';
import './CartPage.css';

function CartPage() {
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <ul className="cart-item-list">
        {/* Example cart item */}
        <li className="cart-item">
          <img src="https://via.placeholder.com/100" alt="Product" />
          <div className="cart-item-details">
            <div className="cart-item-name">Product Name</div>
            <div className="cart-item-price">$10.00</div>
          </div>
          <div className="quantity-controls">
            <button>-</button>
            <input type="number" value="1" readOnly />
            <button>+</button>
          </div>
        </li>
      </ul>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default CartPage;
