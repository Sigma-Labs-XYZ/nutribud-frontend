import React, { useEffect, useState } from "react";
import "./Profile.css";
import Header from "../GlobalComponents/Header/Header";
import Calendar from "./components/Calendar";
import { Typography, Box, Paper } from "@mui/material";
import Networking from "../Networking";

export default function Profile(props) {
  const [userGoals, setUserGoals] = useState(undefined);
  const [userHistory, setUserHistory] = useState([]);
  const [uiDate, setUiDate] = useState("Today");
  const [queryDate, setQueryDate] = useState(convertDateToISO(new Date()));

  const networking = new Networking();

  useEffect(() => {
    async function getUserHistory() {
      const response = await networking.getTrackedItems(queryDate); //Date needs to be in format YYYY-MM-DD
      if (response.error) {
        console.log(response.error);
        setUserHistory([]);
      } else if (response.response.length > 0) {
        setUserHistory(response.response);
      }
    }
    getUserHistory();
  }, [queryDate]);

  function selectDay(dayObject) {
    const date = new Date(dayObject.date);
    setUiDate(date.toDateString());
    setQueryDate(dayObject.day);
  }

  function convertDateToISO(date) {
    return date.toISOString().split("T")[0];
  }

  function populateTrackedItems() {
    return userHistory.map((item, i) => {
      return <p>{item.item_info.name}</p>;
    });
  }

  return (
    <div>
      <div className="header-wrapper">
        <Header />
      </div>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "40%",
          display: "grid",
          gridTemplateRows: "1fr 3fr",
          margin: "2%",
          padding: "20px",
        }}
      >
        <p variant="subtitle1" sx={{ fontWeight: "600" }}>
          {uiDate}
        </p>
        <Box>
          <Calendar selectDay={selectDay} />
        </Box>
      </Paper>
      {populateTrackedItems()}
    </div>
  );
}
