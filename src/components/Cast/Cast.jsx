import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { Character, Image, Item, Name, Wrap, Wrapper } from './Cast.styled';

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
    <Wrapper>
      {isLoading && <Loader />}
      {error && <p>Opps...Sorry, something went wrong</p>}
      {casts.length > 0 ? (
        <Wrap>
          {casts.map(cast => {
            return (
              <Item key={cast.id}>
                <Image
                  src={
                    cast?.profile_path
                      ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                      : 'https://via.placeholder.com/200x300'
                  }
                  alt={cast.name}
                />
                <Name>{cast.name}</Name>
                <Character>Character : {cast.character}</Character>
              </Item>
            );
          })}
        </Wrap>
      ) : (
        <p>Sorry! We don't have any casts for this movie.</p>
      )}
    </Wrapper>
  );
};

export default Cast;
