import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { RouterLink } from "react";
import { Link } from "react-router-dom";

export default function Event(props) {
  console.log(props.owner);
  let owner = "test";

  return (
    <Link to={"/event/" + props.id}>
      <Card sx={{ maxWidth: 354, marginLeft: 'auto', marginRight: 'auto'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="text"
            height="140"
            image={require("./index.jpeg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {"Organizator: " + props.owner}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
