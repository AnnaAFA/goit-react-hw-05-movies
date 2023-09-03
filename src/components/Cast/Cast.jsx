import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const castData = await getMovieCast(movieId);
        if (castData.cast === 0) {
          return Notiflix.Notify.failure('Cast not found!');
        }
        setCasts(castData.cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Opps...Sorry, something went wrong</p>}
      {casts.length > 0 ? (
        <ul>
          {casts.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={
                    cast?.profile_path
                      ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                      : 'https://via.placeholder.com/200x300'
                  }
                  alt={cast.name}
                />
                <p>{cast.name}</p>
                <p>Character:{cast.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry! We don't have any casts for this movie.</p>
      )}
    </>
  );
};

export default Cast;
