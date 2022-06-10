import React, { useState } from "react";
import {
  Fab,
  OutlinedInput,
  InputAdornment,
  Paper,
  Button,
  Typography,
  Box,
  Popover,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Networking from "../../Networking";
import UserPerformance from "../../UserPerformance";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function AddToTrackerButton(props) {
  const [inputText, setInputText] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString().split("/").reverse().join("-"));
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

  function handleDateChange(e) {
    setDate(e.toLocaleDateString().split("/").reverse().join("-"));
    setTime(e.toLocaleTimeString());
  }

  const performance = new UserPerformance();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnackbar(false);
    setShowErrorSnackbar(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const networking = new Networking();

  async function handleTrackItem(servingSize, date, time) {
    try {
      if (servingSize === "") throw new Error("no serving size");
      //eslint-disable-next-line
      const response = await props.trackItem(servingSize, date, time);
      if (response.response) setShowSuccessSnackbar(true);
      else throw new Error("couldn't track item");
    } catch (e) {
      setShowErrorSnackbar(true);
    }

    const today = new Date().toISOString().substring(0, 10);
    const userHistory = (await networking.getTrackedItems(today)).response;
    const totalNutriments = performance.addUpNutriments(userHistory);
    const performanceScore = await performance.getPerformanceScore(totalNutriments);
    await networking.updatePerformanceScore(Math.round(performanceScore * 100));
    handleClose();
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AddIcon style={{ color: "white" }} />
      </Fab>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            width: "250px",
            height: "200px",
          }}
        >
          <Box sx={{ alignItems: "center" }}>
            <Box sx={{ margin: "2%" }}>
              <Typography variant="body1">Enter serving size:</Typography>
            </Box>
            <Box sx={{ margin: "2%" }}>
              <OutlinedInput
                id="outlined-adornment-weight"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                endAdornment={<InputAdornment position="end">g</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "amount",
                }}
              />
            </Box>
            <Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="When did you have this?"
                  value={date}
                  onChange={(e) => handleDateChange(e)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ margin: "2%" }}>
              <Button onClick={(e) => handleTrackItem(inputText, date, time)}>Track Item</Button>
            </Box>
          </Box>
        </Paper>
      </Popover>
      <Snackbar open={showSuccessSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Item tracked!
        </Alert>
      </Snackbar>
      <Snackbar open={showErrorSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: "100%" }}>
          Could not track item
        </Alert>
      </Snackbar>
    </div>
  );
}
