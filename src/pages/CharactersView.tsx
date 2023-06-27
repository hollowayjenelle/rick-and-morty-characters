import React, { useState } from "react";
import { useGetCharactersQuery } from "../app/services/rickAndMortyApi";
import CharacterCard from "../components/CharacterCard";
import { Character } from "../types";

const CharactersView = () => {
  const [page, setPage] = useState<number>(1);
  const {
    data: characters,
    isLoading,
    isError,
    isFetching,
    error,
  } = useGetCharactersQuery(page);

  if (isLoading || isFetching) {
    return <div>Characters loading</div>;
  }

  if (isError) {
    return <div>Error in loading information</div>;
  }

  return (
    <div>
      {characters.results.map((character: Character) => (
        <CharacterCard
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
          location={character.location.name}
        />
      ))}
    </div>
  );
};

export default CharactersView;
