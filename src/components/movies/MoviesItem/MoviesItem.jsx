import styles from "./MoviesItem.module.css";
import { Link } from "react-router-dom";
import noImage from "../../../assets/noImage.jpg";
const MoviesItem = ({
  backdrop_path,
  original_title,
  poster_path,
  id,
  title,
  vote_average,
  vote_count,
  name,
}) => {
  return (
    <li className={styles.container}>
      <Link className={styles.box} to={`/movies/${id}`}>
        <b></b>
        <img
          className={styles.MovieItem__img}
          src={
            poster_path || backdrop_path
              ? `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`
              : noImage
          }
          alt="img"
        />
        <div className={styles.content}>
          <h1 className={styles.MovieItem__title}>{title || name}</h1>
          <p className={styles.MovieItem__rating}>
            Vote/Votes: {Math.round(vote_average)}/ <span>{vote_count}</span>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default MoviesItem;
