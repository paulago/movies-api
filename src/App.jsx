import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import WishlistPage from './pages/WishlistPage';
import Header from './components/Header';

const App = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (movie) => {
    setWishlist((prev) => {
      // Check if the movie is already on the list
      const isAlreadyInWishlist = prev.some((item) => item.id === movie.id);
      if (isAlreadyInWishlist) {
        return prev; // If it is already there, don't add it again
      }
      return [...prev, movie]; // If it is not there, add it
    });
  };  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailsPage addToWishlist={addToWishlist} />} />
        <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} />} />
      </Routes>
    </Router>
  );
};

export default App;
