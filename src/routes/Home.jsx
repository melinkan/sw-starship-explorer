import React from "react";
import { CardList, Button } from "../components";
import { useStarshipsContext } from "../contexts/StarshipsContext";

export const Home = () => {
  const { count, page, setPage } = useStarshipsContext();

  const isLastPage = page >= count / 10;

  const handleLoadMore = () => {
    if (isLastPage) return;
    setPage((prev) => prev + 1);
  };

  return (
    <div className="container ">
      <CardList />
      {!isLastPage && count > 10 && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </div>
  );
};
