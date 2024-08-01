import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../services/api";
import { defaultImg } from "../../services/constants";

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
    <div>
      <h2>Cast</h2>
      {error && <p>{error}</p>}
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.cast_id}>
              <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultImg}
              alt={actor.name}
              width={100} />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available</p>
      )} 
    </div>
  )
}

export default MovieCast
