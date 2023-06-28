import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Character } from "../../types";
import FavouriteButton from "../FavouriteButton";
import { Link } from "react-router-dom";
import "./styles.css";

interface CharacterProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterProps> = ({ character }) => {
  return (
    <Card className="character-card">
      <CardMedia
        component="img"
        alt={character.name}
        className="character-img"
        image={character.image}
      />
      <CardContent>
        <Typography className="character-name" variant="h5">
          <Link to={`/character/${character.id}`}>{character.name}</Link>
        </Typography>
        <Typography className="character-info">
          {character.species} - {character.status}
        </Typography>
        <CardActions>
          <FavouriteButton character={character} />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
