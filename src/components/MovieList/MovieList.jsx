import { NavLink } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              {movie.title || movie.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
