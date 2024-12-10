import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import { fetchMoviesByCategory } from '../api/api';

// HomePage component renders the main page with three carousels for movie categories.
const HomePage = () => {
  // State variables to store movies in different categories
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  // useEffect fetches movies for all categories when the component is mounted
  useEffect(() => {
    const fetchMovies = async () => {
      const popular = await fetchMoviesByCategory('popular');
      const topRated = await fetchMoviesByCategory('top_rated');
      const upcoming = await fetchMoviesByCategory('upcoming');

      // Update state with the fetched movies
      setPopularMovies(popular);
      setTopRatedMovies(topRated);
      setUpcomingMovies(upcoming);
    };
    fetchMovies();
  }, []); // Empty dependency array ensures this runs only once.

  return (
    <div className="homepage">
      <Carousel title="Popular Movies" movies={popularMovies} />
      <Carousel title="Top Rated Movies" movies={topRatedMovies} />
      <Carousel title="Upcoming Movies" movies={upcomingMovies} />
    </div>
  );
};

export default HomePage;
