import React from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  // http
  return <div>Cast {movieId}</div>;
};

export default Cast;
