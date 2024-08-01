import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "../../services/api";
import s from './MovieReviews.module.css';

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
    <div className={s.reviews}>
      <h2  className={s.title}>Reviews</h2>
      {error && <p className={s.error}>{error}</p>}
      {reviews.length > 0 ? (
        <ul className={s.reviewList}>
          {reviews.map(review => (
            <li key={review.id} className={s.reviewItem}>
              <p className={s.reviewAuthor}>{review.author}</p>
              <p className={s.reviewContent}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noInfo}>No reviews available</p>
      )}
    </div>
  )
}

export default MovieReviews
