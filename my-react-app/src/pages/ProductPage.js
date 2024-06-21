import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  return (
    <div className="product-page">
      <h2>Product Details for {id}</h2>
      <div className="product-details">
        <img src="https://via.placeholder.com/300" alt="Product" />
        <div className="price">$10.00</div>
        <div className="description">
          This is a placeholder description for the product.
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPage;
