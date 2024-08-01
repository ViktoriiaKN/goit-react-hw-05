import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/api';
import { defaultImg } from '../../services/constants';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backlink = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;

    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError('Failed to fetch movie details');
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div className={s.movieDetails}>
      <NavLink to={backlink} className={s.backLink}>Back</NavLink>
      {error && <p className={s.error}>{error}</p>}
      {movie && (
        <div  className={s.movieContent}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            width={250}
            className={s.movieImage}
          />
          <h1 className={s.movieTitle}>{movie.title}</h1>
          <p className={s.movieOverview}>{movie.overview}</p>
          <p className={s.movieReleaseDate}>Release date: {movie.release_date}</p>
          <ul className={s.additionalInfo}>
            <li className={s.additionalInfoItem}><NavLink to="cast" className={s.additionalInfoLink}>Cast</NavLink></li>
            <li className={s.additionalInfoItem}><NavLink to="reviews" className={s.additionalInfoLink}>Reviews</NavLink></li>
          </ul>
         <Outlet/>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
