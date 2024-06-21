import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h1>ShopSavvy</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li>Sign-in</li>
      </ul>
    </nav>
  );
}

export default Navbar;
