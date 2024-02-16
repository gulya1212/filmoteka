import MoviesItem from "../MoviesItem/MoviesItem";
import style from "./MoviesList.module.css";
const MoviesList = ({ movies }) => {
  const moviesElem = movies.map((movie) => (
    <MoviesItem key={movie.id} {...movie} />
  ));

  return <ul className={style.list}>{moviesElem}</ul>;
};

export default MoviesList;
