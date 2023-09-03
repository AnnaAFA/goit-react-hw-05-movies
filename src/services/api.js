import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f9adb863f28a1c6f9debce9b06843390';

export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const getSearchMovies = async searchValue => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchValue}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
