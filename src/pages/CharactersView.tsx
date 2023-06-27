import React, { ChangeEvent, useState } from "react";
import { useGetCharactersQuery } from "../app/services/rickAndMortyApi";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import { Character } from "../types";
import Pagination from "@mui/material/Pagination";

const CharactersView = () => {
  const [page, setPage] = useState<number>(1);
  const [speciesFilter, setSpeciesFilter] = useState<string>("");
  const { data, isLoading, isFetching, error } = useGetCharactersQuery({
    page: page,
    species: speciesFilter,
  });
  let prevButton: HTMLElement;

  function handleChange(event: ChangeEvent<unknown>, value: number) {
    setPage(value);
  }

  function changeFilter(filterType: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setSpeciesFilter(filterType);
    const target = e.target as HTMLElement;
    if (prevButton) {
      prevButton.classList.remove("active-btn");
    }
    target.classList.add("active-btn");
    prevButton = target;
  }

  if (isLoading || isFetching) {
    return <div>Characters loading</div>;
  }

  if (error) {
    if ("status" in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else {
      // you can access all properties of `SerializedError` here
      return <div>{error.message}</div>;
    }
  }

  return (
    <div>
      <div>
        <button onClick={(event) => changeFilter("", event)}>All</button>
        <button onClick={(event) => changeFilter("human", event)}>Human</button>
        <button onClick={(event) => changeFilter("animal", event)}>
          Animal
        </button>
        <button onClick={(event) => changeFilter("alien", event)}>Alien</button>
      </div>
      <div className="card-view">
        {data?.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
        <Pagination
          count={data?.info.pages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CharactersView;
