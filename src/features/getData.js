import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "14638e33e121aaef8ede7cab68ac7c6e";

export const getMovieDetails = async ({ movieId }) => {
  const response = await axios.get(
    `${URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return await response.data;
};

export const getMovieCredits = async ({ movieId }) => {
  const response = await axios.get(
    `${URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return await response.data;
};

export const getPopularMovies = async (page) => {
  const response = await axios.get(
    `${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  
  return await response.data;
};

export const getGenres = async () => {
  const response = await axios.get(
    `${URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  
  return await response.data.genres;
};

export const getSearch = async ({ query, page }) => {
  const response = await axios.get(
    `${URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`
  );

  return await response.data;
};

export const getPopularPeople = async ( page ) => {
  const response = await axios.get(
    `${URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  
  return await response.data;
};

export const getSearchPeople = async ({ query, page }) => {
  const response = await axios.get(
    `${URL}/search/person?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`
  );
  
  return await response.data;
};

export const getPeopleDetails = async (personId) => {
  const response = await axios.get(
    `${URL}/person/${personId}?api_key=${API_KEY}`
  );

  return await response.data;
};

export const getPeopleMovieCredits = async (personId) => {
  const response = await axios.get(
    `${URL}/person/${personId}/movie_credits?api_key=${API_KEY}`
  ); 

  return await response.data;
};