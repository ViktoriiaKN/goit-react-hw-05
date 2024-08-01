import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchMovies } from '../../services/api';
import { NavLink, useSearchParams } from 'react-router-dom';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

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
    };
    fetchMovies();
  }, [query]);

  const handleSearchSubmit = ({ query }) => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm initialValues={{ query }} onSubmit={handleSearchSubmit} />
      <ul className={s.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.movieItem}>
            <NavLink to={`/movies/${movie.id}`} className={s.movieLink}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
