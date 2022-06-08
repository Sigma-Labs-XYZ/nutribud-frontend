import React, { useState } from "react";
import "./index.css";
import Home from "./Home/Home";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import Settings from "./Settings/Settings";
import Profile from "./Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import About from "./About/About";
import { filterProps } from "recharts/types/util/types";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6acc01",
      light: "#83d441",
      dark: "#59bc00",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    color: "#6acc01",
  },
});

const darkTheme = createTheme({
  typography: {
    h4: {
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      color: "white",
    },
  },
  palette: {
    mode: "dark",
    secondary: {
      main: "#6301cc",
      light: "rgb(130, 51, 214)",
      dark: "rgb(69, 0, 142)",
    },
  },
});

export default function App() {
  const [theme, setTheme] = useState("light");

  function updateTheme() {
    setTheme();
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
