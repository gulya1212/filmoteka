import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import styles from "./MovieDetailsPage.module.css";
import noImage from "../../assets/noImage.jpg";
import Cast from "../../components/cast";
import Reviews from "../../components/reviews";
import Navbar from "../../components/Navbar/Navbar";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const [load, setLoad] = useState(false);
  const [videos, setVideos] = useState([]);
  const fetchMovie = async () => {
    await axios
      .get(
        `
  https://api.themoviedb.org/3/movie/${movieId}?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US'
  `
      )
      .then((res) => setMovie(res.data));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        let videoAPI = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`;
        await axios.get(videoAPI).then((res) => {
          setVideos(res.data.results);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideo();
  }, []);

  const {
    poster_path,
    backdrop_path,
    original_title,
    overview,
    budget,
    genres,
    vote_average,
    vote_count,
  } = movie;
  const filmTrailer = videos.map((video) => video.key);
  return (
    <>
      <Navbar value={false} />
      <div className="container">
        {" "}
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img
              className={styles.img}
              src={
                poster_path || backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${
                      poster_path || backdrop_path
                    }`
                  : noImage
              }
              alt="img"
            />
          </div>
          <div className={styles.text}>
            <h2>Title: {original_title}</h2>
            <p className={styles.text2}>
              <b>Description</b>: {overview}
            </p>
            <p className={styles.text2}>
              <b>Budget:</b> {budget}$
            </p>
            <p className={styles.text2}>
              <b> Vote:</b> {vote_average}/{vote_count}
            </p>
            <button onClick={() => setLoad(true)} className={styles.btn}>
              trailer
            </button>
            <Link className={`${styles.btn} ${styles.btn}`} to={"cast"}>
              Cast
            </Link>
            <Link className={`${styles.btn} ${styles.btn}`} to={"reviews"}>
              Reviews
            </Link>
          </div>
          <div
            onClick={() => setLoad(false)}
            className={load ? "backdrop" : "hidden"}
          >
            <iframe
              className={styles.frame}
              width="760"
              height="415"
              title={movie.title}
              src={`https://www.youtube.com/embed/${
                filmTrailer[filmTrailer.length - 1]
              }`}
              allowFullScreen
            ></iframe>
          </div>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
