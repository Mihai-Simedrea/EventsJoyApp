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
import Auth from "../Services/auth";

// Mock data
import { default as data } from "./mock.json";

// Components
import Event from "../Components/Event";
import usePagination from "../Components/Pagination";
import { FormControl } from "@mui/material";

const Login = () => {
  const defaultValues = {
    email: "",
    name: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleRegistration = async () => {
    await Auth.register(formValues);
    console.log("worked");
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
          </Toolbar>
        </AppBar>
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
            id="name-input"
            label="Nume"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />

          <TextField
            id="password-input"
            label="Parola"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
          <Button onClick={handleRegistration}>Register</Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Login;
