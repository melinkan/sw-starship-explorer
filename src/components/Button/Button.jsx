import React from "react";
import styles from "./Button.module.scss";

export const Button = (props) => {
  return (
    <button className={styles.btn} {...props}>
      {props.children}
    </button>
  );
};
