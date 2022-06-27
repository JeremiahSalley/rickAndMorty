import React from "react";
import styles from "./Search.module.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5 flex-sm-row flex-column align-items-center">
      <input
        type="text"
        className={styles.input}
        placeholder="Search for Characters"
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`${styles.btn}btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
