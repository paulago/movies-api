import React from 'react';

const Wishlist = ({ wishlist }) => {
  if (wishlist.length === 0) return <p>Your wishlist is empty.</p>;

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      <ul>
        {wishlist.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
