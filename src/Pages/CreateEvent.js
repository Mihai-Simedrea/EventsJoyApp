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
import axios from "axios";

const CreateEvent = () => {
  const defaultValues = {
    category: "",
    date: "",
    location: "",
    image: "",
    description: "",
    cost: "",
    phonenumber: "",
    facebook: "",
    link: "",
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    /*
    axios.post('/', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
*/
    // create a json file
    // create a PUT
    // data will be in db
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
              LOGO
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <br />

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
              onChange={handleInputChange}
            >
              <MenuItem value={0}>Art</MenuItem>
              <MenuItem value={1}>Sport</MenuItem>
              <MenuItem value={2}>...</MenuItem>
            </Select>

            <Button variant="contained" component="label">
              Drop a banner
              <input type="file" hidden />
            </Button>

            <TextField
              id="description-input"
              name="description"
              label="Descriere"
              type="text"
              value={formValues.description}
              onChange={handleInputChange}
              multiline
            />

            <TextField
              id="cost-input"
              name="cost"
              label="Costuri si cerinte"
              type="text"
              value={formValues.cost}
              onChange={handleInputChange}
              multiline
            />

            <TextField
              id="phonenumber-input"
              label="Phone number"
              name="phonenumber"
              type="text"
              value={formValues.phonenumber}
              onChange={handleInputChange}
            />

            <TextField
              id="facebook-input"
              label="Profilul de Facebook"
              name="facebook"
              type="text"
              value={formValues.facebook}
              onChange={handleInputChange}
            />

            <TextField
              id="link-input"
              label="Link catre site-ul oficial"
              name="link"
              type="text"
              value={formValues.link}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button color="inherit" onClick={handleSubmit}>
            Inregistreaza-ti everimentul
          </Button>
        </div>
      </Grid>
    </>
  );
};
export default CreateEvent;
