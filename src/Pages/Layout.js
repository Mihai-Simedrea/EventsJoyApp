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

// Mock data
import { default as data } from "./mock.json";

// Components
import Event from "../Components/Event";
import usePagination from "../Components/Pagination";

const Layout = () => {
  let signedIn = false;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-event");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
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
            {signedIn == false && (
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
            {signedIn == true && (
              <Button color="inherit" onClick={handleClick}>
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
          {data.map((d) => (
            <Grid key={d.id} item xs={12} sm={6} md={4}>
              {" "}
              <Event
                id={d.id}
                title={d.title}
                description={d.description}
              ></Event>{" "}
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Layout;
