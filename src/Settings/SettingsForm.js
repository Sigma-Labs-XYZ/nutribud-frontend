import React, { useState } from "react";
import Networking from "../Networking.js";
import {
  Paper,
  TextField,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  InputAdornment,
  Button,
  Alert,
} from "@mui/material";

export default function SettingsForm(props) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const networking = new Networking();

  async function handleSubmitClick() {
    const response = await networking.updateInformation(
      name,
      weight,
      height,
      age,
      gender
    );
    if (response.error) {
      return <Alert severity="error">Unable to save changes</Alert>;
    }
  }

  return (
    <div className="page-wrapper">
      <div className="settings-form-wrapper">
        <Paper
          elevation={3}
          style={{
            padding: 8,
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="name-settings-wrapper">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ m: 1, width: "60ch" }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="weight-settings-wrapper">
            <TextField
              id="outlined-basic"
              label="Weight"
              variant="outlined"
              sx={{ m: 1, width: "60ch" }}
              onChange={(e) => setWeight(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
            />
          </div>
          <div className="height-settings-wrapper">
            <TextField
              id="outlined-basic"
              label="Height"
              variant="outlined"
              sx={{ m: 1, width: "60ch" }}
              onChange={(e) => setHeight(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
            />
          </div>
          <div className="age-settings-wrapper">
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              sx={{ m: 1, width: "60ch" }}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="gender-settings-wrapper">
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{ marginLeft: 1 }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              sx={{ m: 1, width: "60ch" }}
              // value={value}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </div>
          <div className="submit-btn">
            <Button variant="contained" onClick={handleSubmitClick} margin={2}>
              Save Changes
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}
