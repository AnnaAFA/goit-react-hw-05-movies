import { HomePage } from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { DetailsPage } from 'pages/DetailsPage';
import { Search } from '../pages/SearchPage';
import ShareLayout from './ShareLayout/ShareLayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
// import {
//   getMovieCast,
//   getMovieDetails,
//   getMovieReviews,
//   getSearchMovies,
//   getTrending,
// } from 'services/api';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShareLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Search />} />
        <Route path="movies/:movieId" element={<DetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
