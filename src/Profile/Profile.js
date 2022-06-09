import React, { useEffect, useState } from "react";
import "./Profile.css";
import Header from "../GlobalComponents/Header/Header";
import Calendar from "./components/Calendar";
import ProgressCharts from "./components/ProgressCharts/ProgressCharts";
import { Box, Paper, Typography } from "@mui/material";
import Networking from "../Networking";
import TrackerTimeline from "./components/TrackerTimeline";
import Timeline from "@mui/lab/Timeline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import CalendarInfo from "./components/Info/CalendarInfo";
import TimelineInfo from "./components/Info/TimelineInfo";
import NutrimentOverviewInfo from "./components/Info/NutrimentOverviewInfo";

export default function Profile(props) {
  const [userGoals, setUserGoals] = useState(undefined);
  const [userHistory, setUserHistory] = useState([]);
  const [uiDate, setUiDate] = useState(new Date().toDateString());
  const [queryDate, setQueryDate] = useState(convertDateToISO(new Date()));
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [auth, setAuth] = useState(false);

  let navigate = useNavigate();

  const networking = new Networking();

  useEffect(() => {
    checkSession(); // eslint-disable-next-line
  }, []);

  async function checkSession() {
    const authentication = await networking.verifyUserSession();
    if (!authentication.response) navigate("/", 1000);
    else setAuth(true);
  }

  useEffect(() => {
    const startDate = new Date();
    setFrom(startDate.setMonth(startDate.getMonth() - 4));
    async function getUserGoals() {
      const response = await networking.getUserGoals();
      setUserGoals(response);
    }
    if (auth) getUserGoals(); // eslint-disable-next-line
  }, [auth]);

  useEffect(() => {
    async function getUserHistory() {
      const response = await networking.getTrackedItems(queryDate); //Date needs to be in format YYYY-MM-DD
      if (response.error) {
        setUserHistory([]);
      } else if (response.response.length > 0) {
        setUserHistory(response.response);
      }
    }
    if (auth) getUserHistory(); // eslint-disable-next-line
  }, [queryDate, auth]);

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
      return <TrackerTimeline key={i} itemId={i} item={item} />;
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
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box
          data-testid="calendar-wrapper"
          className="calendar-wrapper"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            alignItems: "center",
            position: "inherit",
          }}
        >
          <Paper
            elevation={4}
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
            <CalendarInfo />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p style={{ fontWeight: "bold", margin: "0px" }}>{uiDate}</p>
              <Box sx={{ display: "flex", gap: "12px" }}>
                <Box className="date-container">
                  <p variant="subtitle2" sx={{ fontWeight: "600" }}>
                    From:
                  </p>
                  <DatePicker selected={from} onChange={(date) => setFrom(date)} />
                </Box>
                <Box className="date-container">
                  <p variant="subtitle2" sx={{ fontWeight: "600" }}>
                    To:
                  </p>
                  <DatePicker selected={to} onChange={(date) => setTo(date)} />
                </Box>
              </Box>
            </Box>
            <Box>
              <Calendar selectDay={selectDay} from={from} to={to} />
            </Box>
          </Paper>
        </Box>
        <Box
          className="timeline-nutriment-wrapper"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box className="timeline-wrapper" sx={{ marginRight: "3%" }}>
            <Paper
              elevation={4}
              sx={{ minWidth: "30vw", maxWidth: "472px", marginBottom: "8vh", position: "relative" }}
            >
              <TimelineInfo />
              <Typography variant="h4" sx={{ paddingLeft: "20px", paddingTop: "20px" }}>
                Timeline
              </Typography>
              <div className="timeline">
                <Timeline position="alternate">{populateTimeline()} </Timeline>
              </div>
            </Paper>
          </Box>
          <Box className="nutriment-results-wrapper" sx={{ marginLeft: "3%", marginBottom: "8vh" }}>
            <Paper
              elevation={4}
              sx={{
                minHeight: "350px",
                minWidth: "625px",
                maxHeight: "450px",
                position: "relative",
              }}
            >
              <NutrimentOverviewInfo />
              <Typography variant="h4" sx={{ paddingLeft: "20px", paddingTop: "20px" }}>
                Nutriment Overview
              </Typography>
              <Box>{renderProgressCharts()}</Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
