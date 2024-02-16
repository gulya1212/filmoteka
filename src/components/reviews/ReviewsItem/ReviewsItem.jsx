import styles from "./ReviewsItem.module.css";

const ReviewsItem = ({ author, author_details, content, created_at }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{author}</h2>
        <details>
          <summary>{content.slice(0, 50)}...</summary>
          <p>{content}</p>
        </details>
      </div>
    </li>
  );
};

export default ReviewsItem;
