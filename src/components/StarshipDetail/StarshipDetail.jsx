import { starshipAssets } from "../../imageRoutes";
import styles from "./StarshipDetail.module.scss";

export const StarshipDetail = ({ starship }) => {
  const image = starshipAssets.find(
    (assetObject) => assetObject.name === starship.name
  );

  return (
    <div className={styles.base}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{starship.name}</h2>
        <p className={styles.subTitle}>
          <span className={styles.property}>Model: </span>
          {starship.model}
        </p>
        <p className={styles.subTitle}>
          <span className={styles.property}>Hyperdrive Rating: </span>
          {starship.hyperdrive_rating}
        </p>
        <p className={styles.subTitle}>
          <span className={styles.property}>Passengers: </span>
          {starship.passengers}
        </p>
        <p className={styles.subTitle}>
          <span className={styles.property}>Max Atmosphere Speed: </span>
          {starship.max_atmosphering_speed}
        </p>
        <p className={styles.subTitle}>
          <span className={styles.property}>Manufacturer: </span>
          {starship.manufacturer}
        </p>
        <p className={styles.subTitle}>
          <span className={styles.property}>Crew: </span>
          {starship.crew}
        </p>
        <p className={styles.subTitle}>
          <span className={styles.property}>Cargo Capacity: </span>
          {starship.cargo_capacity}
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img className="img-fluid" src={image?.path} />
      </div>
    </div>
  );
};
