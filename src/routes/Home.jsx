import React, { useEffect } from "react";
import { CardList, Button } from "../components";
import { useStarshipsContext } from "../contexts/StarshipsContext";

export const Home = () => {
  const { page, setPage } = useStarshipsContext();

  const isLastPage = page >= 4;

  const handleLoadMore = () => {
    if (isLastPage) return;
    setPage((prev) => prev + 1);
  };

  return (
    <div className="container ">
      <CardList />
      {!isLastPage && <Button onClick={handleLoadMore}>Load More</Button>}
    </div>
  );
};
