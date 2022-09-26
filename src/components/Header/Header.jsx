import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import starWarsLogo from "../../assets/star-wars-logo.png";

export const Header = () => {
  return (
    <header className={styles.base}>
      <div className={`container ${styles.container}`}>
        <Link to="/">
          <img src={starWarsLogo} alt="logo" width={100} />
        </Link>

        <form>
          <div className={styles.form}>
            <input
              id="search"
              name="search"
              className={styles.form__input}
              type="text"
              placeholder=" "
            />
            <label htmlFor="email" className={styles.form__label}>
              Search
            </label>
          </div>
        </form>
      </div>
    </header>
  );
};
