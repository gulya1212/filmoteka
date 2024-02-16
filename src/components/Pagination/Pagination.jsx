import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ handleClick, currentPage }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={() => handleClick("minus")}>Prev</button>
      <span>{currentPage}</span>
      <button onClick={() => handleClick("plus")}>Next</button>
    </div>
  );
};

export default Pagination;
