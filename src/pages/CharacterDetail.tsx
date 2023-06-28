import React from "react";
import { useParams } from "react-router";
import { useGetSingleCharacterQuery } from "../app/services/rickAndMortyApi";

const CharacterDetail: React.FC = () => {
  const params = useParams();
  const { data, isLoading, isFetching, error } = useGetSingleCharacterQuery(
    params.id
  );

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
        <h1 className="character-name">{data?.name}</h1>
        <p className="character-status">
          {data?.species} - {data?.status}
        </p>
        <p>Gender: {data?.gender}</p>
        <p>Origin: {data?.origin.name}</p>
        <p>Location: {data?.location.name}</p>
      </div>
      <img src={data?.image} alt={data?.name} />
    </div>
  );
};

export default CharacterDetail;
