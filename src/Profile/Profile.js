import React, { useEffect, useState } from "react";
import "./Profile.css";
import Header from "../GlobalComponents/Header/Header";
import Calendar from "./components/Calendar";
import ProgressCharts from "./components/ProgressCharts/ProgressCharts";
import { Box, Paper, CircularProgress, Typography } from "@mui/material";
import Networking from "../Networking";
import TrackerTimeline from "./components/TrackerTimeline";
import Timeline from "@mui/lab/Timeline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Profile(props) {
  const [userGoals, setUserGoals] = useState(undefined);
  const [userHistory, setUserHistory] = useState([]);
  const [uiDate, setUiDate] = useState("Today");
  const [queryDate, setQueryDate] = useState(convertDateToISO(new Date()));
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());

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
    } else
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
          }}
        >
          <Typography variant="h3">No data available</Typography>
        </Box>
      );
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
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            alignItems: "center",
            position: "inherit",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              minWidth: "30vw",
              maxWidth: "100vw",
              maxHeight: "50vh",
              display: "grid",
              gridTemplateRows: "1fr 3fr",
              margin: "2%",
              padding: "20px",
              position: "relative",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <p variant="subtitle1" sx={{ fontWeight: "600" }}>
                {uiDate}
              </p>
              <Box>
                {" "}
                <p variant="subtitle2" sx={{ fontWeight: "600" }}>
                  From
                </p>
                <DatePicker
                  selected={from}
                  onChange={(date) => setFrom(date)}
                />
              </Box>
              <Box>
                <p variant="subtitle2" sx={{ fontWeight: "600" }}>
                  To
                </p>
                <DatePicker selected={to} onChange={(date) => setTo(date)} />
              </Box>
            </Box>
            <Box>
              <Calendar selectDay={selectDay} from={from} to={to} />
            </Box>
          </Paper>
          <Paper
            sx={{ minWidth: "30vw", maxWidth: "472px", maxHeight: "50vh" }}
          >
            <Timeline position="alternate">{populateTimeline()}</Timeline>
          </Paper>
        </Box>

        <Paper sx={{ minHeight: "350px", minWidth: "625px", marginTop: "2%" }}>
          <Typography variant="h4" sx={{ paddingLeft: "5%", paddingTop: "5%" }}>
            Nutriment overview
          </Typography>
          <Box>{renderProgressCharts()}</Box>
        </Paper>
      </Box>
    </div>
  );
}
