import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/api';

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchSearchMovies = async query => {
      setIsLoading(true);
      try {
        const searchFilmData = await getSearchMovies(query);
        if (searchFilmData.total_results === 0) {
          setFilms([]);
          return Notiflix.Notify.failure('Movie not found!');
        }
        setFilms(searchFilmData.results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    const searchQuery = searchParams.get('query') ?? '';
    if (searchQuery) {
      fetchSearchMovies(searchQuery);
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchInput.trim()) {
      return Notiflix.Notify.failure('Please, write something');
    }
    setSearchParams({ query: searchInput.trim() });
    setSearchInput('');
  };

  return (
    <div>
      {error && <p>Opps...Sorry, something went wrong</p>}
      {isLoading && <Loader />}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <button>Search</button>
      </form>
      {films.length !== 0 && <MovieList movies={films} />}
    </div>
  );
};

export default SearchPage;
