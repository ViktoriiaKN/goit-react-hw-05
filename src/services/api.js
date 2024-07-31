import axios from 'axios';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmRhMDNlYmNlNzU4YTdjNDk1ZmQ1YWY2ODBmN2EwZiIsIm5iZiI6MTcyMjA3MzgxOC4zMTE2MjYsInN1YiI6IjY2YTNhZmNjN2NkOWIyM2Y2NjgxMTQzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bQPLjzaf_sLDf46ewFKmoNXn80t459nMd7iH94Kl3hQ';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const response = await instance.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await instance.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await instance.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await instance.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await instance.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};
