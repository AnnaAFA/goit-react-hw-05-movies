import React from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  // http
  return <div>Reviews {movieId}</div>;
};

export default Reviews;
