import React, { useState } from "react";
import { Paper, TextField, InputAdornment, Button, Alert } from "@mui/material";
import Networking from "../Networking";

export default function GoalsForm(props) {
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [sugar, setSugar] = useState("");
  const [salt, setSalt] = useState("");
  const [fibre, setFibre] = useState("");

  const networking = new Networking();

  async function handleSubmitClick() {
    const response = await networking.updateGoals(
      calories,
      protein,
      carbs,
      fats,
      sugar,
      salt,
      fibre
    );
    if (response.error) {
      return <Alert severity="error">Unable to save changes</Alert>;
    }
    console.log(calories, protein, carbs, fats, sugar, salt, fibre);
  }
  return (
    <div className="page-wrapper">
      <div className="goals-form-wrapper">
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
          <div className="calories-goal-wrapper">
            <TextField
              id="outlined-basic"
              label="Calories"
              variant="outlined"
              sx={{ m: 1, width: "20ch" }}
              onChange={(e) => setCalories(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kcal</InputAdornment>
                ),
              }}
            />
          </div>
          <div className="protein-goal-wrapper">
            <TextField
              id="outlined-basic"
              label="Protein"
              variant="outlined"
              sx={{ m: 1, width: "20ch" }}
              onChange={(e) => setProtein(e.target.value)}
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
              }}
            />
          </div>
          <div className="carbs-goal-wrapper">
            <TextField
              id="outlined-basic"
              label="Carbohydrates"
              variant="outlined"
              sx={{ m: 1, width: "20ch" }}
              onChange={(e) => setCarbs(e.target.value)}
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
              }}
            />
          </div>
          <div className="fat-goal-wrapper">
            <TextField
              id="outlined-basic"
              label="Fat"
              variant="outlined"
              sx={{ m: 1, width: "20ch" }}
              onChange={(e) => setFats(e.target.value)}
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
              }}
            />
          </div>
          <div className="sugar-goal-wrapper">
            <TextField
              id="outlined-basic"
              label="Sugar"
              variant="outlined"
              sx={{ m: 1, width: "20ch" }}
              onChange={(e) => setSugar(e.target.value)}
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
              }}
            />
          </div>
          <div className="salt-goal-wrapper">
            <TextField
              id="outlined-basic"
              label="Salt"
              variant="outlined"
              sx={{ m: 1, width: "20ch" }}
              onChange={(e) => setSalt(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">mg</InputAdornment>
                ),
              }}
            />
          </div>
          <div className="fibre-goal-wrapper">
            <TextField
              id="outlined-basic"
              label="Fibre"
              variant="outlined"
              sx={{ m: 1, width: "20ch" }}
              onChange={(e) => setFibre(e.target.value)}
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
              }}
            />
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
