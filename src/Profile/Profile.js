import React, { useEffect, useState } from "react";
import "./Profile.css";
import Header from "../GlobalComponents/Header/Header";
import Calendar from "./components/Calendar";
import ProgressCharts from "./components/ProgressCharts/ProgressCharts";
import { Box, Paper, CircularProgress } from "@mui/material";
import Networking from "../Networking";
import TrackerTimeline from "./components/TrackerTimeline";
import Timeline from "@mui/lab/Timeline";

export default function Profile(props) {
  const [userGoals, setUserGoals] = useState(undefined);
  const [userHistory, setUserHistory] = useState([]);
  const [uiDate, setUiDate] = useState("Today");
  const [queryDate, setQueryDate] = useState(convertDateToISO(new Date()));
  const [from, setFrom] = useState("2022-05-01");
  const [to, setTo] = useState("2022-08-12");

  const networking = new Networking();

  useEffect(() => {
    async function getUserGoals() {
      const response = await networking.getUserGoals();
      setUserGoals(response);
    }
    getUserGoals(); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    async function getUserHistory() {
      const response = await networking.getTrackedItems(queryDate); //Date needs to be in format YYYY-MM-DD
      if (response.error) {
        console.log(response.error);
        setUserHistory([]);
      } else if (response.response.length > 0) {
        console.log(response.response);
        setUserHistory(response.response);
      }
    }
    getUserHistory(); // eslint-disable-next-line
  }, [queryDate]);

  function selectDay(dayObject) {
    const date = new Date(dayObject.date);
    setUiDate(date.toDateString());
    setQueryDate(dayObject.day);
  }

  function convertDateToISO(date) {
    return date.toISOString().split("T")[0];
  }

  function renderProgressCharts() {
    if (userHistory.length !== 0 && userGoals) {
      return <ProgressCharts history={userHistory} goals={userGoals} />;
    } else return <CircularProgress />;
  }

  function populateTimeline() {
    const timelineData = userHistory.map((item, i) => {
      return <TrackerTimeline key={i} item={item} />;
    });
    if (timelineData.length === 0) {
      return "No timeline data available";
    } else {
      return timelineData;
    }
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
          <Calendar selectDay={selectDay} from={from} to={to} />
        </Box>
      </Paper>

      <div>{renderProgressCharts()}</div>

      <Timeline position="alternate">{populateTimeline()}</Timeline>
    </div>
  );
}
