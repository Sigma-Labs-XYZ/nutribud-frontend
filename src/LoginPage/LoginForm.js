import React, { useState } from "react";
import { Button, TextField, Alert } from "@mui/material";
import Networking from "../Networking.js";
import "./LoginPage";
// import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  //   let navigate = useNavigate();

  const networking = new Networking();

  async function handleSubmitClick() {
    const response = await networking.userLoginAttempt(username, password);
    if (response.error) setError(true);
    else {
      await logUserIn(response.response);
      //   navigate("/");
    }
  }

  async function logUserIn(sessionID) {
    setError(false);
    document.cookie = `sessionID=${sessionID}`;
  }

  function displayError() {
    if (error) return <Alert severity="error">Incorrect details</Alert>;
  }
  return (
    <div className="main-wrapper">
      <h1 className="title">NutriBud</h1>
      <form className="login-user">
        <div className="username-wrapper">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password-wrapper">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn-wrapper">
          <Button variant="contained" onClick={handleSubmitClick}>
            Sign In
          </Button>
        </div>
        <div className="error-message">{displayError()}</div>
      </form>
      <div className="signup-link">
        <a href="http://localhost:3000/sign-up">Don't have an account yet? Sign up here!</a>
      </div>
    </div>
  );
}
