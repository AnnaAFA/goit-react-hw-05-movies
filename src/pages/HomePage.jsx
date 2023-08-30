import { MovieList } from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { getTrending } from 'services/api';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const response = await getTrending();
        const movies = response.results;
        if (movies.length === 0) {
          console.log('Movies not found');
        }
        setMovies(movies);
      };
      fetchMovies();
    } catch (error) {
      console.log('Error in catch');
    } finally {
      console.log('Stop loading');
    }
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};
