import "./SignupPage.css";
import React from "react";
import SignupForm from "./SignupForm";
import { ThemeProvider } from "@emotion/react";

export default function SignupPage(props) {
  return (
    <div>
      <ThemeProvider theme={props.theme}>
        <SignupForm />
      </ThemeProvider>
    </div>
  );
}
