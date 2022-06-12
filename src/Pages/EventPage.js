import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
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

export const isLogged = localStorage.getItem("isLogged");

const EventPage = (props) => {
  const Categories = {
    Petrecere_Acasa: "0",
    Sport: "1",
    Arta: "2",
    Petrecere_in_pub: "3",
    Petrecere_in_club: "4",
    Boardgame_party: "5",
    Gaming: "6",
  };

  const navigate = useNavigate();


  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("name");
    navigate("/");
    window.location.reload();
  }

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

  
  const goRegister = () => {
    navigate("/register");
  };

  const ticketData = {
    eventId: 0,
    email: "",
    password: "",
  };

  const handleTicket = async () => {
    var uuid = require("uuid");
    var secretcode = uuid.v4();

    ticketData.eventId = event.id;
    ticketData.email = localStorage.getItem("email");
    ticketData.password = localStorage.getItem("password");
    console.log(ticketData);
    console.log(event.id);

    const result = await Auth.postTicket(ticketData);
    navigate("/");

    //Auth.postTicket(ticketData);
    // id, eventId, secretcode, state (enum), user (object), event (object)
    /*
    const url = "http://localhost:3001/userToken";
    let qr = generateQR(url);
    qr = qr.replace(/^data:image\/(png|jpg);base64,/, "");
    let mail = {
      from: "jdasjdsal",
      to: "florin.mischie@student.upt.ro",
      subject: "Event attendance pass",
      attachments: [
        {
          filename: "Ticket.jpg",
          content: qr,
          encoding: "base64",
        },
      ],
      text: "Send email",
    };
    */
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
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
              <img src="/Asset 1.png" alt="sdagasdgasd" height={50} width={50}></img>
            </Typography>           
            {(isLogged == "true") &&<Button color="inherit" onClick={logOut}>
              Log Out
              </Button>}
            <Button color="inherit" onClick={handleClick}>
              Inapoi
            </Button>
          </Toolbar>
        </AppBar>

        <Card>
          <CardMedia
            component="img"
            height="250"
            image={event.banner || "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
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
            {isLogged == "true" && (
              <Button size="medium" onClick={handleTicket}>
                Get a ticket
              </Button>
            )}
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
