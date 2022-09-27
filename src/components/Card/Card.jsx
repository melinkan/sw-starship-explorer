import React from "react";
import { Link } from "react-router-dom";
import { starshipAssets } from "../../imageRoutes";
import styles from "./Card.module.scss";

export const Card = ({ item }) => {
  const image = starshipAssets.find(
    (assetObject) => assetObject.name === item.name
  );

  return (
    <div className={styles.card}>
      <div className={styles.imgBx}>
        <img src={image?.path} />
      </div>
      <div className={styles.contentBx}>
        <h2>{item.name}</h2>
        <div className={styles.size}>
          <h3>{item.model}</h3>
        </div>
        <div className={styles.color}>
          <h3>Hyperdrive Rating: {item.hyperdrive_rating}</h3>
        </div>
        <Link to={"starships/" + item.name.split(" ").join("-")}>
          View Details
        </Link>
      </div>
    </div>
  );
};
