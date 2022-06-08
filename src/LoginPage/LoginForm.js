import React, { useState } from "react";
import { Button, TextField, Alert, Typography, Paper } from "@mui/material";
import Networking from "../Networking.js";
import "./LoginPage";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const networking = new Networking();

  async function handleSubmitClick() {
    const response = await networking.userLoginAttempt(username, password);
    if (response.error) setError(true);
    else {
      await logUserIn();
      navigate("/");
    }
  }

  async function logUserIn() {
    setError(false);
  }

  function displayError() {
    if (error) return <Alert severity="error">Incorrect details</Alert>;
  }

  function handleEnterKey(e) {
    if (e.key === "Enter") handleSubmitClick();
  }
  return (
    <div className="main-wrapper">
      <Paper
        elevation={3}
        style={{
          padding: 8,
        }}
      >
        <Typography variant="h4" className="title" textAlign="center" margin={2}>
          NutriBud
        </Typography>
        <form className="login-user">
          <div className="username-wrapper">
            <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} onKeyPress={handleEnterKey} />
          </div>
          <div className="password-wrapper">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleEnterKey}
            />
          </div>
          <div className="btn-wrapper">
            <Button variant="contained" onClick={handleSubmitClick} margin={2}>
              Sign In
            </Button>
          </div>
        </form>
      </Paper>
      <div className="error-message">{displayError()}</div>

      <div className="signup-link">
        <p>
          Don't have an account yet? Sign up <a href="https://nutribud-frontend.sigmalabs.co.uk/sign-up">here</a>!
        </p>
      </div>
    </div>
  );
}
