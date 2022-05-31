import React from "react";
import "./LoginPage.css";
import { ThemeProvider } from "@emotion/react";
import LoginForm from "./LoginForm";

export default function LoginPage(props) {
  return (
    <div>
      <ThemeProvider theme={props.theme}>
        <LoginForm />
      </ThemeProvider>
    </div>
  );
}
