import React, { useState, useEffect } from "react";
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

export default function InfoForm(props) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function loadUserInformation() {
      const response = await networking.getUserInformation();
      const userInfo = response[0];
      setName(userInfo.name);
      setWeight(userInfo.weight);
      setHeight(userInfo.height);
      setAge(userInfo.age);
      setGender(userInfo.sex);
    }
    loadUserInformation();
    // eslint-disable-next-line
  }, []);

  const networking = new Networking();

  async function handleSubmitClick() {
    const userInfoResponse = await networking.getUserInformation();

    if (userInfoResponse.length === 0) {
      const response = await networking.newUserInformation(
        name,
        weight,
        height,
        age,
        gender
      );
      if (response.error) {
        setError(true);
      } else {
        setSuccess(true);
      }
    } else {
      const response = await networking.updateUserInformation(
        name,
        weight,
        height,
        age,
        gender
      );
      if (response.error) {
        setError(true);
      } else {
        setSuccess(true);
      }
    }
  }

  function displayResponseMessage() {
    if (error) {
      setTimeout(() => setError(false), 5000);
      return <Alert severity="error">Unable to save changes</Alert>;
    } else if (success) {
      setTimeout(() => setSuccess(false), 5000);
      return <Alert severity="success">Changes Saved!</Alert>;
    }
  }

  return (
    <div className="settings-page-wrapper">
      <div className="settings-form-wrapper">
        <Paper
          elevation={3}
          style={{
            padding: 8,
            width: 650,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: 450,
          }}
        >
          <div className="name-settings-wrapper">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              sx={{ m: 1, width: "60ch" }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="weight-settings-wrapper">
            <TextField
              id="outlined-basic"
              label="Weight"
              variant="outlined"
              value={weight}
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
              value={height}
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
              value={age}
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
              value={gender}
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
      <div className="res-message">{displayResponseMessage()}</div>
    </div>
  );
}
