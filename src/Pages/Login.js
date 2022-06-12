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
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { LogOut } from "./EventPage";
// Mock data
import { default as data } from "./mock.json";

// Components
import Event from "../Components/Event";
import usePagination from "../Components/Pagination";
import Auth from "../Services/auth";
import { FormatOverlineSharp } from "@mui/icons-material";

const Login = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"));

  const handleClick = () => {
    navigate("/");
  };

  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("name");
    navigate("/");
    window.location.reload();
  }

  const handleLogin = async () => {
    await Auth.login(formValues);
    localStorage.setItem("email", formValues.email);
    localStorage.setItem("password", formValues.password);
    localStorage.setItem("isLogged", "true");
    setIsLogged(true);
    navigate("/");
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      {isLogged == "true" && navigate("/")}
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
        </Box>
        <Box
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormControl>
            <TextField
              id="email-input"
              label="Email"
              name="email"
              type="text"
              value={formValues.email}
              onChange={handleInputChange}
            />

            <TextField
              style={{
                marginTop: "1rem",
              }}
              id="password-input"
              label="Password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
            <Button
              onClick={handleLogin}
              style={{
                marginTop: "1rem",
                background: "dodgerblue",
                color: "white",
              }}
            >
              Login
            </Button>
          </FormControl>
        </Box>
      </>
    </>
  );
};

export default Login;
