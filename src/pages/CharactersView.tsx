import React, { ChangeEvent, useState } from "react";
import { useGetCharactersQuery } from "../app/services/rickAndMortyApi";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CardsView from "../components/CardsView";

const CharactersView = () => {
  const [page, setPage] = useState<number>(1);
  const [speciesFilter, setSpeciesFilter] = useState<string>("");
  const [characterName, setCharacterName] = useState<string>("");
  const { data, isLoading, isFetching, error } = useGetCharactersQuery({
    page: page,
    species: speciesFilter,
    name: characterName,
  });
  let prevButton: HTMLElement;

  function handlePageChange(event: ChangeEvent<unknown>, value: number) {
    setPage(value);
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setCharacterName(event.target.value);
  }

  function changeFilter(
    filterType: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setSpeciesFilter(filterType);
    const target = e.target as HTMLElement;
    if (prevButton) {
      prevButton.classList.remove("active-btn");
    }
    target.classList.add("active-btn");
    prevButton = target;
  }

  return (
    <div>
      <div>
        <div>
          <button onClick={(event) => changeFilter("", event)}>All</button>
          <button onClick={(event) => changeFilter("human", event)}>
            Human
          </button>
          <button onClick={(event) => changeFilter("animal", event)}>
            Animal
          </button>
          <button onClick={(event) => changeFilter("alien", event)}>
            Alien
          </button>
        </div>
        <div>
          <TextField
            variant="outlined"
            placeholder="Search for character"
            value={characterName}
            onChange={handleNameChange}
            InputProps={{ endAdornment: <SearchIcon /> }}
          />
        </div>
      </div>
      <CardsView
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
        error={error}
      />
      <Pagination
        count={data?.info.pages}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CharactersView;
