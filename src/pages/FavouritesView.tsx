import React, { useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CardsView from "../components/CardsView";
import Pagination from "@mui/material/Pagination";

const FavouritesView: React.FC = () => {
  const favourites = useSelector((state: RootState) => state.favourites);
  const [page, setPage] = useState<number>(1);

  function handlePageChange(event: ChangeEvent<unknown>, value: number) {
    setPage(value);
  }
  return (
    <div>
      <CardsView data={favourites} />
      <Pagination
        count={favourites.length}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default FavouritesView;
