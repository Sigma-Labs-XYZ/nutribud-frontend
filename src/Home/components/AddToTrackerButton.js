import React, { useState } from "react";
import { Fab, OutlinedInput, InputAdornment, Paper, Button, Typography, Box, Popover } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Networking from "../../Networking";

export default function AddToTrackerButton(props) {
  const [inputText, setInputText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleTrackItem(servingSize) {
    const today = new Date().toISOString().substring(0, 10);
    const userHistory = await Networking.getTrackedItems(today);
    const totalNutriments = props.nutrientAmounts(userHistory);
    const performanceScore = props.performanceScore(totalNutriments);
    props.trackItem(servingSize);
    await Networking.updatePerformanceScore(performanceScore);
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
              <Typography variant="body1">enter your serving size</Typography>
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
    </div>
  );
}
