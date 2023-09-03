import React, { Suspense, useEffect, useRef, useState } from 'react';
import { getMovieDetails } from 'services/api';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { BtnBack, DetailsBtn, Wrap, WrapCard } from './DetailsPage.styled';

const DetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);

    const fetchSearchMovies = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovieDetails(movieData);
        Notiflix.Notify.success('Success');
        if (movieData.length === null) {
          return Notiflix.Notify.failure('Something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchMovies();
  }, [movieId]);

  return (
    <Wrap>
      {isLoading && <Loader />}
      {error && <p>Opps...Sorry, something went wrong</p>}
      <BtnBack to={backLinkLocationRef.current}>Go back</BtnBack>
      {movieDetails !== null && (
        <div>
          <WrapCard>
            {/* <Link to={backLinkLocationRef.current}>Go back</Link> */}
            <img
              src={
                movieDetails?.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
                  : 'https://via.placeholder.com/200x300'
              }
              alt={movieDetails.original_title}
            />
            <div>
              <h2>{movieDetails.title}</h2>
              <p>User Score: {movieDetails.vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{movieDetails.overview}</p>
              <h2>Genres</h2>
              <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
            </div>
          </WrapCard>
          <div>
            <h3>Additional information</h3>
            <DetailsBtn to="cast">Cast</DetailsBtn>
            <DetailsBtn to="reviews">Reviews</DetailsBtn>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </Wrap>
  );
};

export default DetailsPage;
