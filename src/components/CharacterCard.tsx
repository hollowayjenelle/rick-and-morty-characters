import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="140" image={image} />
      <CardContent></CardContent>
    </Card>
  );
};

export default CharacterCard;
