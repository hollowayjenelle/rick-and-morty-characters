import React from "react";
import { useParams } from "react-router";
import {
  useGetEpisodeQuery,
  useGetSingleCharacterQuery,
} from "../app/services/rickAndMortyApi";

const CharacterDetail: React.FC = () => {
  const params = useParams();
  const {
    data: character,
    isLoading,
    isFetching,
    error,
  } = useGetSingleCharacterQuery(params.id);
  

  const firstEpisodeId = character.episode[0]?.split("/")[5];

  const { data: episode } = useGetEpisodeQuery(firstEpisodeId);

  if (!character) {
    return <div>No character data available.</div>;
  }

  if (isLoading || isFetching) {
    return <div>Character loading...</div>;
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
    <div className="character-details">
      <div className="character-details-text">
        <h1 className="character-name">{character.name}</h1>
        <p className="character-status">
          {character.species} - {character.status}
        </p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
        {episode && (
          <p>
            First seen in: {episode.episode} - {episode.name} aired on{" "}
            {episode.air_date}
          </p>
        )}
      </div>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default CharacterDetail;
