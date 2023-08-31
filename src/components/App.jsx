import { HomePage } from 'pages/HomePage';
import { NavLink, Route, Routes } from 'react-router-dom';
import { DetailsPage } from 'pages/DetailsPage';
import { Search } from './Search/Search';
// import {
//   getMovieCast,
//   getMovieDetails,
//   getMovieReviews,
//   getSearchMovies,
//   getTrending,
// } from 'services/api';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movie</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Search />} />
          <Route path="/movies/:movieId" element={<DetailsPage />} />
        </Routes>
      </main>
    </div>
  );
};
