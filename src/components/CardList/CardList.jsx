import React from "react";
import { Card } from "../../components";
import { useStarshipsContext } from "../../contexts/StarshipsContext";
import styles from "./CardList.module.scss";

export const CardList = () => {
  const { starships } = useStarshipsContext();

  return (
    <div className={styles.container}>
      {starships.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
};
