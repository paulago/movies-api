const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`);
    if (!response.ok) throw new Error(`Error fetching ${category}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    if (!response.ok) throw new Error(`Error fetching details for the movie with ID ${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
