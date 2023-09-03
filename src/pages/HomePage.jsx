import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { getTrending } from 'services/api';
import { Wrap } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchMovies = async () => {
        const response = await getTrending();
        const movies = response.results;
        if (movies.length === 0) {
          Notiflix.Notify.failure('Nothing found. Please try again!');
        }
        setMovies(movies);
      };
      fetchMovies();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Wrap>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && <p>Nothing found</p>}
    </Wrap>
  );
};

export default HomePage;
