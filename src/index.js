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

let theme = createTheme({
  palette: {
    primary: {
      main: "#6acc01",
    },
    secondary: {
      main: "#6301cc",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home theme={theme} />} />
      <Route path="/sign-up" element={<SignupPage theme={theme} />} />
      <Route path="/login" element={<LoginPage theme={theme} />} />
      <Route path="/profile" element={<Profile theme={theme} />} />
      <Route path="/settings" element={<Settings theme={theme} />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
