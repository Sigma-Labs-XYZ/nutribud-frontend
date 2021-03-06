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
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Networking from "../../Networking";
import UserPerformance from "../../UserPerformance";

export default function AddToTrackerButton(props) {
  const [inputText, setInputText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

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

  async function handleTrackItem(servingSize) {
    try {
      if (servingSize === "") throw new Error("no serving size");
      //eslint-disable-next-line
      const response = await props.trackItem(servingSize);
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
            height: "150px",
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
            <Box sx={{ margin: "2%" }}>
              <Button onClick={(e) => handleTrackItem(inputText)}>Track Item</Button>
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
