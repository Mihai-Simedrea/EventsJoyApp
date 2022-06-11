import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { Image } from "@mui/icons-material";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";

// Mock data
import { default as data } from "./mock.json";

const EventPage = (props) => {
  const navigate = useNavigate();

  const handleClick = (props) => {
    navigate("/");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              LOGO
            </Typography>

            <Button color="inherit" onClick={handleClick}>
              Inapoi
            </Button>
          </Toolbar>
        </AppBar>

        <Card>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {props.description}
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="h6" color="text.secondary">
              {"Tipul everimentului: " + props.description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {"Costuri si cerinte: " + props.cost}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {"Contact: " + props.phonenumber + " " + props.facebook}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {"Link-ul oficial al site-ului: " + props.link}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium">Get a ticket</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default EventPage;
