import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import ShareLayout from './ShareLayout/ShareLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const DetailsPage = lazy(() => import('../pages/DetailsPage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShareLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchPage />} />
        <Route path="movies/:movieId" element={<DetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
