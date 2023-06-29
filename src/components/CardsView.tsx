import React from "react";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import { Character } from "../types";

interface Props {
  data: any;
  isLoading?: boolean;
  isFetching?: boolean;
  error?: any;
}

const CardsView: React.FC<Props> = ({ data, isLoading, isFetching, error }) => {
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

  if (Array.isArray(data)) {
    return (
      <div className="card-view">
        {data.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  }

  return (
    <div className="card-view">
      {data.results.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CardsView;
