import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CastItem from "../CastItem/CastItem";
import styles from "./CastList.module.css";

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const apiCast = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`;
    axios.get(apiCast).then(async (response) => {
      const data = await response.data;
      const { cast } = data;

      setCast(cast);
    });
  }, []);
  const castElem = cast.map((item) => <CastItem key={item.id} {...item} />);

  return (
    <ul className={styles.List}>
      {cast.length > 0 ? (
        castElem
      ) : (
        <p className={styles.noCast}> No Cast...</p>
      )}
    </ul>
  );
};

export default CastList;
