import React from 'react';
import './styles/WishlistPage.scss';

const WishlistPage = ({ wishlist }) => {
   // Check if the wishlist is empty and display a message if it is.
  if (wishlist.length === 0) {
    return <p className="wishlist-page__empty">Your wishlist is empty.</p>;
  }

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-page__title">Your Wishlist</h1>
      <ul className="wishlist-page__list">
        {wishlist.map((movie) => (
          <li className="wishlist-page__item" key={movie.id}>
            <img
              className="wishlist-page__item-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="wishlist-page__item-title">{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;
