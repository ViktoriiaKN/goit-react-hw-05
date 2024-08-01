import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchMovies } from '../../services/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useState();

  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;

      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
      fetchMovies();
    };
  }, [query]);

  const handleSearchSubmit = ({ query }) => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm initialValues={{ query }} onSubmit={handleSearchSubmit} />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
