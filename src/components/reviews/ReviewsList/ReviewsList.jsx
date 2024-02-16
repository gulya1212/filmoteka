import styles from "./ReviewsList.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Reviews from "..";
import ReviewsItem from "../ReviewsItem";

const ReviewsList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const apiCast = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`;
    axios.get(apiCast).then(async (response) => {
      const data = await response.data;
      const { results } = data;

      setReviews(results);
    });
  }, []);
  const reviewsElem = reviews.map((item) => (
    <ReviewsItem key={item.id} {...item} />
  ));

  return (
    <ul className={styles.List}>
      {reviews.length > 0 ? (
        reviewsElem
      ) : (
        <p className={styles.noReview}>No Reviews</p>
      )}
    </ul>
  );
};

export default ReviewsList;
