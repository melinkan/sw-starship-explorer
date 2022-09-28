import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import starWarsLogo from "../../assets/star-wars-logo.png";
import { useStarshipsContext } from "../../contexts/StarshipsContext";

export const Header = () => {
  const { search, setSearch, setPage } = useStarshipsContext();

  const handleChange = (event) => {
    setPage(1);
    setSearch(event.target.value);
  };

  const handleClick = () => {
    setPage(1);
    setSearch("");
  };

  return (
    <header className={styles.base}>
      <div className={`container ${styles.container}`}>
        <Link to="/">
          <img src={starWarsLogo} alt="logo" width={100} />
        </Link>

        <div className={styles.form}>
          <input
            id="search"
            name="search"
            className={styles.input}
            type="text"
            placeholder=" "
            value={search}
            onChange={handleChange}
          />
          <label htmlFor="email" className={styles.label}>
            Search
          </label>
          {!!search && (
            <button onClick={handleClick} className={styles.button}>
              X
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
