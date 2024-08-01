import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
const [movies, setMovies] = useState([]);
const [error, setError] = useState(null);

useEffect (() => {
  const getTrendingMovies = async () => {
    try {
      const movies = await fetchTrendingMovies();
      setMovies(movies)
    } catch (error) {
      setError('Failed to fetch trending movies');
    }
  }
  getTrendingMovies();
}, [] )

  return (
    <div>
      <h1>Trending Movies</h1>
      {error && <p>{error}</p>}
      {movies.length > 0 && <MovieList movies={movies}/>}
    </div>
  )
}

export default HomePage;

