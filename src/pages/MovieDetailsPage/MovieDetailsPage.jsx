import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/api';
import { defaultImg } from '../../services/constants';

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
    <div>
      <NavLink to={backlink}>Back</NavLink>
      {error && <p>{error}</p>}
      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            width={250}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Release date: {movie.release_date}</p>
          <ul>
            <li><NavLink to="cast">Cast</NavLink></li>
            <li><NavLink to="reviews">Reviews</NavLink></li>
          </ul>
         <Outlet/>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
