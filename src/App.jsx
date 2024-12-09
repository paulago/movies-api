import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import WishlistPage from './pages/WishlistPage';

const App = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (movie) => {
    setWishlist((prev) => [...prev, movie]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailsPage addToWishlist={addToWishlist} />} />
        <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} />} />
      </Routes>
    </Router>
  );
};

export default App;
