import { Button, TextField, Alert, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Networking from "../Networking";

export default function SignupForm(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmationInput, setPasswordConfirmationInput] =
    useState("");
  const [accountCreationAttempts, setAccountCreationAttempts] = useState(0);
  const [accountCreationSuccess, setAccountCreationSuccess] = useState(false);

  let navigate = useNavigate();

  const passwordsMatch = passwordInput !== passwordConfirmationInput;

  const networking = new Networking();

  async function handleSubmit(e) {
    if (passwordInput === passwordConfirmationInput && passwordInput !== "") {
      const response = await networking.createAccount(
        usernameInput,
        passwordInput,
        passwordConfirmationInput
      );
      response.error
        ? setAccountCreationSuccess(false)
        : setAccountCreationSuccess(true);
      setAccountCreationAttempts(accountCreationAttempts + 1);
    } else {
      setAccountCreationAttempts(accountCreationAttempts + 1);
    }
  }

  function displayResponseMessage() {
    if (accountCreationAttempts > 0) {
      if (!accountCreationSuccess) {
        return (
          <div data-testid="signup-error">
            <Alert severity="error">Account could not be created</Alert>
          </div>
        );
      } else {
        setTimeout(() => navigate("/login"), 1000);
        return (
          <Alert data-testid="signup-success" severity="success">
            Account created
          </Alert>
        );
      }
    }
  }

  function handleEnterKey(e) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <div className="page-wrapper">
      <Paper
        elevation={3}
        style={{
          padding: 4,
        }}
      >
        <Typography
          variant="h4"
          className="title"
          textAlign="center"
          margin={2}
        >
          Create an account!
        </Typography>
        <form className="signup-form" data-testid="signup-form">
          <div className="username-wrapper">
            <TextField
              inputProps={{ "data-testid": "username-input" }}
              required
              id="outlined-required"
              label="Username"
              variant="outlined"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              onKeyPress={handleEnterKey}
            />
          </div>
          <div className="password-wrapper">
            <div className="password-box">
              <TextField
                inputProps={{ "data-testid": "password-input" }}
                required
                id="outlined-required"
                label="Password"
                type="password"
                variant="outlined"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyPress={handleEnterKey}
              />
            </div>
            <div className="password-box">
              <TextField
                required
                inputProps={{ "data-testid": "confirm-password-input" }}
                id="outlined-required"
                label="Confirm password"
                type="password"
                variant="outlined"
                value={passwordConfirmationInput}
                error={passwordsMatch}
                helperText={passwordsMatch ? "Passwords do not match" : ""}
                onChange={(e) => setPasswordConfirmationInput(e.target.value)}
                onKeyPress={handleEnterKey}
              />
            </div>
          </div>
          <div className="submit-btn">
            <Button
              variant="contained"
              margin={2}
              onClick={(e) => handleSubmit(e)}
            >
              Create account
            </Button>
          </div>
        </form>
      </Paper>
      <div
        // data-testid="signup-error"
        className="account-creation-success-error-message"
      >
        {displayResponseMessage()}
      </div>

      <div className="login-link">
        <p>
          Already have an account? Login{" "}
          <a href="https://nutribud-frontend.sigmalabs.co.uk/login"> here</a>!
        </p>
      </div>
    </div>
  );
}
