import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../services/api";
import { defaultImg } from "../../services/constants";
import s from './MovieCast.module.css';

const MovieCast = () => {
const {movieId} = useParams();
const [cast, setCast] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
if (!movieId) return;

const getCast = async () => {
  try {
    const castData = await fetchMovieCredits(movieId);
    setCast(castData);
  } catch (error) {
    setError('Failed to fetch movie cast');
  }
}
getCast();
}, [movieId]);

  return (
    <div  className={s.cast}>
      <h2 className={s.title}>Cast</h2>
      {error && <p className={s.error}>{error}</p>}
      {cast.length > 0 ? (
        <ul className={s.castList}>
          {cast.map(actor => (
            <li key={actor.cast_id} className={s.castItem}>
              <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultImg}
              alt={actor.name}
              width={100} 
              className={s.castImage}/>
              <p className={s.actorName}>{actor.name}</p>
              <p className={s.actorCharacter}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noInfo}>No cast information available</p>
      )} 
    </div>
  )
}

export default MovieCast
