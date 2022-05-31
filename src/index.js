import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home/Home";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import Settings from "./Settings/Settings";
import Profile from "./Profile/Profile";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

let theme = createTheme({
  palette: {
    primary: {
      main: "#6acc01",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
