import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Author, ItemStyle, ListStyle } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const reviewsData = await getMovieReviews(movieId);
        if (reviewsData.results === 0) {
          return Notiflix.Notify.failure('Reviews not found!');
        }
        setReviews(reviewsData.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Opps...Sorry, something went wrong</p>}
      {reviews.length > 0 ? (
        <ListStyle>
          {reviews.map(review => {
            return (
              <ItemStyle key={review.id}>
                <Author>Author: {review.author}</Author>
                <p>{review.content}</p>
              </ItemStyle>
            );
          })}
        </ListStyle>
      ) : (
        <p>Sorry! We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
