import React from "react";
import { Character } from "../types";
import Button from "@mui/material/Button";

interface Props {
  character: Character;
}

const FavouriteButton: React.FC<Props> = ({ character }) => {
  return (
    <Button variant="contained" size="medium" color="success">
      Add to Favourites
    </Button>
  );
};

export default FavouriteButton;
