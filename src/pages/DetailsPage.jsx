import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/api';
import './styles/DetailsPage.scss';

// DetailsPage component displays detailed information about a specific movie
const DetailsPage = ({ addToWishlist }) => {
  // Extract the movie ID from the route parameters
  const { id } = useParams();
  // State to store the details of the selected movie
  const [movie, setMovie] = useState(null);

  // Fetch the movie details when the component mounts or when the movie ID changes
  useEffect(() => {
    const fetchDetails = async () => {
      // Fetch detailed information about the movie by its ID
      const movieData = await fetchMovieDetails(id);
      // Update the state with the fetched movie data
      setMovie(movieData);
    };
    fetchDetails();
  }, [id]); // Dependency array ensures this effect runs when the ID changes

  // Show a loading message if the movie data has not been fetched yet
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="details-page">
      <img
        className="details-page__image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="details-page__content">
        <h1 className="details-page__title">{movie.title}</h1>
        <p className="details-page__description">{movie.overview}</p>
        <div className="details-page__button-container">
          <button
            className="details-page__button"
            onClick={() => addToWishlist(movie)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
