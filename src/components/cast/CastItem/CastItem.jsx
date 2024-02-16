import noImage from "../../../assets/noImage.jpg";
import styles from "./CastItem.module.css";
const CastItem = ({ profile_path, name, original_name }) => {
  return (
    <li className={styles.item}>
      <img
        width={"100%"}
        height={"193px"}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : noImage
        }
        alt={original_name || name}
      />
      <p className={styles.text}> {name || original_name}</p>
    </li>
  );
};

export default CastItem;
