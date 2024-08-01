import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "../../services/api";

const MovieReviews = () => {
const {movieId} = useParams();
const [reviews, setReviews] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
if (!movieId) return;

const getReviews = async () => {
  try {
    const reviewsData = await fetchMovieReviews(movieId);
    setReviews(reviewsData);
  } catch (error) {
    setError('Failed to fetch movie reviews');
  }
}
getReviews();
}, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {error && <p>{error}</p>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  )
}

export default MovieReviews
