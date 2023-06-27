import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Character } from "../../types";
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
          {character.name}
        </Typography>
        <Typography className="character-info">
          {character.species} - {character.status}
        </Typography>
        <CardActions>
          <Button variant="contained" size="medium" color="success">
            Add to Favourites
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
