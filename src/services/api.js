import axios from "axios";

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

export const fetcImages = async (query, perPage = 5, page = 1) => {
  try {
    const response = await axios.get(`${url}search/movies`, {
      params: {
        query,
        per_page: perPage,
        page,
      },
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmRhMDNlYmNlNzU4YTdjNDk1ZmQ1YWY2ODBmN2EwZiIsIm5iZiI6MTcyMjA3MzgxOC4zMTE2MjYsInN1YiI6IjY2YTNhZmNjN2NkOWIyM2Y2NjgxMTQzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bQPLjzaf_sLDf46ewFKmoNXn80t459nMd7iH94Kl3hQ',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies from TMDB:', error);
    throw error;
  }
};


const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmRhMDNlYmNlNzU4YTdjNDk1ZmQ1YWY2ODBmN2EwZiIsIm5iZiI6MTcyMjA3MzgxOC4zMTE2MjYsInN1YiI6IjY2YTNhZmNjN2NkOWIyM2Y2NjgxMTQzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bQPLjzaf_sLDf46ewFKmoNXn80t459nMd7iH94Kl3hQ'
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
