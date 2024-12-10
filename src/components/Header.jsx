import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>Movies App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>
    </header>
  );
};

export default Header;
