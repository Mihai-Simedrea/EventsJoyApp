import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import Auth from "../Services/auth";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const defaultValues = {
    category: 0,
    banner: "",
    description: "",
    requirements: "",
    cost: "",
    email: "",
    password: "",
    owner: "",
  };

  const [age, setAge] = React.useState("");
  const thisEmail = localStorage.getItem("email");
  const thisPassword = localStorage.getItem("password");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e, overrideName) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [overrideName || name]: value,
    });
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    formValues.email = thisEmail;
    formValues.password = thisPassword;
    formValues.owner = formValues.email;
    let data = Auth.postEvent(formValues);
    navigate("/");
    event.preventDefault();
    console.log(formValues);
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
               <img src="/Asset 1.png" alt="sdagasdgasd" height={50} width={50}></img>
            </Typography>
            <Button color="inherit" onClick={handleClick}>
              Inapoi
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <br />
      <Box
       style={{
        height:"50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid spacing={2}>
        
        <div
          style={{
            width: 300,
            height: 1,
            position: "relative",
            top: 0,
            bottom: 300,
            left: 0,
            right: 0,
            textAlign: "center",
            margin: "auto",
          }}
        >
          <FormControl>
            <InputLabel id="category-input-label">Category</InputLabel>

            <Select
            
              labelId="category-input-label"
              id="category-input"
              value={formValues.category}
              label="Categorie"
              onChange={(event) => handleInputChange(event, "category")}
            >
              <MenuItem value={0}>Petrecere Acasa</MenuItem>
              <MenuItem value={1}>Sport</MenuItem>
              <MenuItem value={2}>Arta</MenuItem>
              <MenuItem value={3}>Petrecere in pub</MenuItem>
              <MenuItem value={4}>Petrecere in club</MenuItem>
              <MenuItem value={5}>Boardgame party</MenuItem>
              <MenuItem value={6}>Gaming</MenuItem>
            </Select>

            <Button variant="contained" component="label"
             style={{
              marginTop:"1rem",
              background:"gray"
            }}>
              Choose a banner
              <input type="file" hidden />
            </Button>

            <TextField
             style={{
              marginTop:"1rem"
            }}
              id="description-input"
              name="description"
              label="Descriere"
              type="text"
              value={formValues.description}
              onChange={handleInputChange}
              multiline
            />

            <TextField
             style={{
              marginTop:"1rem"
            }}
              id="requirements-input"
              name="requirements"
              label="Cerinte"
              type="text"
              value={formValues.requirements}
              onChange={handleInputChange}
              multiline
            />

            <TextField
             style={{
              marginTop:"1rem"
            }}
              id="cost-input"
              name="cost"
              label="Costuri"
              type="text"
              value={formValues.cost}
              onChange={handleInputChange}
              multiline
            />
          </FormControl>

          <Button color="inherit" onClick={handleSubmit}
           style={{
            marginTop:"1rem",
            background:"dodgerblue"
          }}>
            Inregistreaza-ti everimentul
          </Button>
        </div>
      </Grid>
      </Box>
    </>
  );
};
export default CreateEvent;
