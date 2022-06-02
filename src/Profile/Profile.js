import React, { useState } from "react";
import "./Profile.css";
import Header from "../GlobalComponents/Header/Header";
import Calendar from "./components/Calendar";
import { Typography, Box, Paper } from "@mui/material";

export default function Profile(props) {
  const [userGoals, setUserGoals] = useState(undefined);
  const [userHistory, setUserHistory] = useState(undefined);
  const [day, setDay] = useState("today");

  function selectDay(dayObject) {
    const date = new Date(dayObject.date);
    console.log(date.toDateString());
    setDay(date.toDateString());
  }

  return (
    <div>
      <div className="header-wrapper">
        <Header />
      </div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gridGap: "1px",
        }}
      >
        <Box>
          <Calendar selectDay={selectDay} />
        </Box>
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2%",
            padding: "10px",
            maxHeight: "75px",
            maxWidth: "28vw",
          }}
        >
          <Typography variant="h3">{day}</Typography>
        </Paper>
      </Box>
    </div>
  );
}
