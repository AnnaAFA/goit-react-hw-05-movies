import { useLocation } from 'react-router-dom';
import { Item, LinkStyle } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => {
        return (
          <Item key={movie.id}>
            <LinkStyle to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </LinkStyle>
          </Item>
        );
      })}
    </ul>
  );
};

export default MovieList;
