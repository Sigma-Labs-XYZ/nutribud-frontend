import React from "react";
import {
  Paper,
  TextField,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  InputAdornment,
} from "@mui/material";

export default function SettingsForm() {
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
              // onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="weight-settings-wrapper">
            <TextField
              id="outlined-basic"
              label="Weight"
              variant="outlined"
              sx={{ m: 1, width: "60ch" }}
              // onChange={(e) => setUsername(e.target.value)}
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
              // onChange={(e) => setUsername(e.target.value)}
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
              // onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="gender-settings-wrapper">
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              sx={{ m: 1, width: "60ch" }}
              //   value={value}
              //   onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </div>
        </Paper>
      </div>
    </div>
  );
}
