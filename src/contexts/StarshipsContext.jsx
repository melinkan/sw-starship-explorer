import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

export const StarshipsContext = createContext();

export const useStarshipsContext = () => useContext(StarshipsContext);

export const StarshipsProvider = (props) => {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchStarships = useCallback(() => {
    axios
      .get("https://swapi.dev/api/starships", {
        params: {
          page,
        },
      })
      .then(({ data }) => {
        setStarships((prev) => [...prev, ...data.results]);
      });
  }, [page]);

  useEffect(() => {
    fetchStarships();
  }, [page]);

  return (
    <StarshipsContext.Provider
      value={{
        starships,
        setStarships,
        page,
        setPage,
        searchQuery,
        setSearchQuery,
      }}
    >
      {props.children}
    </StarshipsContext.Provider>
  );
};
