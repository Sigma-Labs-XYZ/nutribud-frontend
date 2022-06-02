import React, { useState, useEffect } from "react";
import { Paper, TextField, InputAdornment, Button, Alert } from "@mui/material";
import Networking from "../Networking";

export default function GoalsForm(props) {
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [sugar, setSugar] = useState("");
  const [salt, setSalt] = useState("");
  const [fiber, setFiber] = useState("");

  useEffect(() => {
    async function loadUserGoals() {
      const response = await networking.getUserGoals();
      const goals = response[0];
      setCalories(goals.calories);
      setProtein(goals.protein);
      setCarbs(goals.carbs);
      setFats(goals.fats);
      setSugar(goals.sugar);
      setSalt(goals.salt);
      setFiber(goals.fiber);
    }
    loadUserGoals();
    // eslint-disable-next-line
  }, []);

  const networking = new Networking();

  async function handleSubmitClick() {
    const response = await networking.updateUserGoals(
      calories,
      protein,
      carbs,
      fats,
      sugar,
      salt,
      fiber
    );
    if (response.error) {
      return <Alert severity="error">Unable to save changes</Alert>;
    } else if (response.response) {
      return <Alert severity="success">Changes Saved!</Alert>;
    }
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
              value={calories}
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
              value={protein}
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
              value={carbs}
              sx={{ m: 1, width: "20ch" }}
              onChange={(e) => setCarbs(e.target.value)}
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
              }}
            />
          </div>
          <div className="fats-goal-wrapper">
            <TextField
              id="outlined-basic"
              label="Fats"
              variant="outlined"
              value={fats}
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
              value={sugar}
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
              value={salt}
              sx={{ m: 1, width: "20ch" }}
              onChange={(e) => setSalt(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">mg</InputAdornment>
                ),
              }}
            />
          </div>
          <div className="fiber-goal-wrapper">
            <TextField
              id="outlined-basic"
              label="Fiber"
              variant="outlined"
              value={fiber}
              sx={{ m: 1, width: "20ch" }}
              onChange={(e) => setFiber(e.target.value)}
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
