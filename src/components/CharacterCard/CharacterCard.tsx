import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./styles.css";

interface CharacterProps {
  image: string;
  name: string;
  status: string;
  species: string;
  location: string;
}

const CharacterCard: React.FC<CharacterProps> = ({
  image,
  name,
  status,
  species,
  location,
}) => {
  return (
    <Card className="character-card">
      <CardMedia
        component="img"
        alt={name}
        className="character-img"
        image={image}
      />
      <CardContent>
        <Typography className="character-name" variant="h5">{name}</Typography>
        <Typography className="character-info">
          {species} - {status}
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
