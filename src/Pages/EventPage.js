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
import { useParams } from "react-router-dom";

import Auth from "../Services/auth";

const EventPage = (props) => {
  const Categories = {
    Art: "0",
    Sport: "1",
    None: "2",
  };

  const navigate = useNavigate();

  let { id } = useParams();

  const handleClick = (props) => {
    navigate("/");
  };

  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const event = await Auth.getEventById(id);
      setEvent(event);
      console.log(event);
    };

    fetchData().catch(console.error);
  }, []);

  let category = "";
  for (const key in Categories) {
    console.log(Categories[key]);
    if (Categories[key] == event.category) category = key;
  }

  const isLogged = localStorage.getItem("isLogged");

  const goRegister = () => {
    navigate("/register");
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
            image={event.banner}
            alt="no banner"
          />
          <CardContent alignItems="center">
            <Typography variant="h6" color="text.secondary">
              {event.description}
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="h6" color="text.secondary">
              {"Tipul everimentului: " + category}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {"Costul everimentului: " + event.cost}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {"Cerinte: " + event.requirements}
            </Typography>
          </CardContent>
          <CardActions>
            {isLogged == "true" && <Button size="medium">Get a ticket</Button>}
            {isLogged == "false" ||
              (isLogged == null && (
                <Button size="medium" onClick={goRegister}>
                  Get a ticket
                </Button>
              ))}
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default EventPage;
