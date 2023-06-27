import React, { ChangeEvent, useState } from "react";
import { useGetCharactersQuery } from "../app/services/rickAndMortyApi";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import { Character } from "../types";
import Pagination from "@mui/material/Pagination";

const CharactersView = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isFetching, error } = useGetCharactersQuery(page);

  function handleChange(event: ChangeEvent<unknown>, value: number) {
    setPage(value);
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
    <div className="card-view">
      {data?.results.map((character: Character) => (
        <CharacterCard
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
          location={character.location.name}
        />
      ))}
      <Pagination
        count={data?.info.pages}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default CharactersView;
