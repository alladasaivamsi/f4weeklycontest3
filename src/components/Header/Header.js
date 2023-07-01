import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-name">
        <p>Shopping Cart</p>
      </div>
      <div className="links">
        <Link to="/" className="homeLink">
          Home Page
        </Link>
        <Link to="/cart" className="cartLink">
          Cart Page
        </Link>
      </div>
    </div>
  );
};

export default Header;
