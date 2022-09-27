import { createContext, useState, useContext, useEffect, useRef } from "react";
import axios from "axios";

export const StarshipsContext = createContext();

export const useStarshipsContext = () => useContext(StarshipsContext);

export const StarshipsProvider = (props) => {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const fetchStarships = () => {
    return axios.get("https://swapi.dev/api/starships", {
      params: {
        page,
        search,
      },
    });
  };

  useEffect(() => {
    fetchStarships().then(({ data }) => {
      setStarships((prev) => [...prev, ...data.results]);
      setCount(data.count);
    });
  }, [page, search]);

  return (
    <StarshipsContext.Provider
      value={{
        starships,
        setStarships,
        page,
        setPage,
        search,
        setSearch,
        count,
      }}
    >
      {props.children}
    </StarshipsContext.Provider>
  );
};
