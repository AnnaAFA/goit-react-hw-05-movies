import { HomePage } from 'pages/HomePage';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
  getMovieCast,
  getMovieDetails,
  getMovieReviews,
  getSearchMovies,
  getTrending,
} from 'services/api';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      {/* <Route to="/movies">Movies</Route> */}
    </Routes>
  );
};
