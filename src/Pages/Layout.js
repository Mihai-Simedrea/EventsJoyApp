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
import Auth from "../Services/auth";
// Components
import Event from "../Components/Event";
import usePagination from "../Components/Pagination";

const Layout = () => {
  let signedIn = false;

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("name");
    navigate("/");
    window.location.reload();
  }

  const handleClick = () => {
    navigate("/create-event");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const events = await Auth.getEvents();
      console.log(events);
      setEvents(events);
    };

    fetchData().catch(console.error);
  }, []);

  const isLogged = localStorage.getItem("isLogged");
  const currentUser = localStorage.getItem("email");

  // Filter

  const [filter, setFilter] = useState(false);
  const [btn1, setBtn1] = useState("primary");
  const [btn2, setBtn2] = useState("inherit");

  const showAll = () => {
    setFilter(false);
    setBtn1("primary");
    setBtn2("inherit");
  };

  const showMyEvents = () => {
    setFilter(true);
    setBtn1("inherit");
    setBtn2("primary");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
          <Button color={btn1} onClick={showAll}>
        Show All
      </Button>
      <Button color={btn2} onClick={showMyEvents}>
        Show my events
      </Button>
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
            {(isLogged == "false" || isLogged == null) && (
              <div>
                {" "}
                <Button color="inherit" onClick={handleRegister}>
                  Sign In
                </Button>{" "}
                <Button color="inherit" onClick={handleLogin}>
                  Login
                </Button>
              </div>
            )}
            {isLogged == "true" && (
              <Button background="inherit" onClick={handleClick}>
                Create event
              </Button>
            )}
       
          </Toolbar>
        </AppBar>
      </Box>
    

      <br />

      <div>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          {filter == false &&
            events.map((d) => (
              <Grid key={d.id} item xs={12} sm={6} md={4}>
                {" "}
                <Event
                  id={d.id}
                  title={d.title}
                  description={d.description}
                  owner={d.owner}
                ></Event>{" "}
              </Grid>
            ))}

          {filter == true &&
            events.map((d) => (
              <>
                {d.owner == currentUser && (
                  <Grid key={d.id} item xs={12} sm={6} md={4}>
                    <Event
                      id={d.id}
                      title={d.title}
                      description={d.description}
                      owner={d.owner}
                    ></Event>
                  </Grid>
                )}
              </>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default Layout;
