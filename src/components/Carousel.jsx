import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({ title, movies }) => {
  return (
    <div className="carousel">
      <h2 className="carousel__title">{title}</h2>
      <div className="carousel__container">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="carousel__item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="carousel__image"
            />
            <p className="carousel__name">{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
