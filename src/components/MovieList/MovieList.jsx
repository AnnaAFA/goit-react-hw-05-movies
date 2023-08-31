import { Link, NavLink } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
