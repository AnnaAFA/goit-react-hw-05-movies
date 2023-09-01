import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/api';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export const DetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    const fetchSearchMovies = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovieDetails(movieData);
        console.log('Success');
      } catch (error) {
        console.error('Error in catch');
      } finally {
        console.log('Stop loading');
      }
    };
    fetchSearchMovies();
    // console.log(movieDetails);
  }, [movieId]);
  console.log(location);
  return (
    <div>
      {/* {error !== null && <p>Oops.. Simesing went wrong</p>} */}
      {movieDetails !== null && (
        <div>
          <Link to={location.state?.from ?? '/'}>Go back</Link>
          <img
            src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
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

          <div>
            <p>Additional information</p>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};
