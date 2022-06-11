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

// Mock data
import { default as data } from "./mock.json";

// Components
import Event from "../Components/Event";
import usePagination from "../Components/Pagination";
import Auth from "../Services/auth";

const Login = () => {
  const defaultValues = {
    name: "",
    password: "",
  };

  const handleLogin = async () => {
    await Auth.login(formValues);
    console.log("worked");
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
      </Box>

      <FormControl>
        <TextField
          id="name-input"
          label="Name"
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleInputChange}
        />

        <TextField
          id="password-input"
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <Button onClick={handleLogin}>Login</Button>
      </FormControl>
    </>
  );
};

export default Login;