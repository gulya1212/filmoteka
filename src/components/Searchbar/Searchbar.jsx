import { useState } from "react";
import styles from "./Searchbar.module.css";

const Searchbar = ({ handleSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSub = (event) => {
    event.preventDefault();
    handleSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSub} className={styles.form}>
      <button type="submit" className={styles.button}>
        <span className={styles.buttonLabel}>Search</span>
      </button>

      <input
        className={styles.input}
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
};

export default Searchbar;
