import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CharacterCard from "../components/CharacterCard/CharacterCard";

const FavouritesView: React.FC = () => {
  const favourites = useSelector((state: RootState) => state.favourites);
  return (
    <div className="card-view">
      {favourites.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};

export default FavouritesView;
