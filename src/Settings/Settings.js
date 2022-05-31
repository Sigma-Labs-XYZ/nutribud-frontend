import React from "react";
import "./Settings.css";
import { ThemeProvider } from "@emotion/react";

export default function Settings(props) {
  return (
    <div>
      <ThemeProvider theme={props.theme}>{/* stuff goes here */}</ThemeProvider>
    </div>
  );
}
