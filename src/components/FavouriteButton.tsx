import React from "react";
import { Character } from "../types";
import Button from "@mui/material/Button";
import { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { addFavourites, deleteFavourite } from "../app/slices/favouritesSlice";

interface Props {
  character: Character;
}

const FavouriteButton: React.FC<Props> = ({ character }) => {
  const favouritesArr = useSelector((state: RootState) => state.favourites);
  const dispatch = useDispatch();

  const isFavourite = favouritesArr.find(
    (currentCharacter) => character.id === currentCharacter.id
  );

  if (isFavourite) {
    return (
      <Button variant="contained" size="medium" color="error" onClick={() => dispatch(deleteFavourite(character.id))}>
        Remove from Favourites
      </Button>
    );
  } else {
    return (
      <Button variant="contained" size="medium" color="success" onClick={() => dispatch(addFavourites(character))}>
        Add to Favourites
      </Button>
    );
  }
};

export default FavouriteButton;
