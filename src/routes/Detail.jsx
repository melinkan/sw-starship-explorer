import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarshipDetail } from "../components";
import axios from "axios";

export const Detail = () => {
  const { name } = useParams();
  const [starship, setStarship] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships", {
        params: {
          search: name.split("-").join(" "),
        },
      })
      .then(({ data }) => {
        setStarship(data.results[0]);
      });
  }, [name]);

  return (
    <main className="container">
      {starship ? (
        <StarshipDetail starship={starship} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};
