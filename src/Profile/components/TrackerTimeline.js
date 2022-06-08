import React, { useState } from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function TrackerTimeline(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  function formatTime() {
    const simpleTime = props.item.time.split(".")[0];
    const splitTime = simpleTime.split(":");
    splitTime.splice(0, 1, (Number(splitTime[0]) + 1).toString());
    return splitTime.join(":");
  }

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">{formatTime()}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        {props.item.item_info.name}
      </TimelineContent>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box sx={{ padding: "10px" }}>
          <Typography variant="h6" component="div" style={{ fontWeight: "bold" }}>
            {Math.floor((props.item.item_info.calories * props.item.serving_size_g) / 100)} Kcal
          </Typography>
          <Typography variant="body1" component="div">
            Carbohydrates: {Math.floor((props.item.item_info.carbs * props.item.serving_size_g) / 100)}g
          </Typography>
          <Typography variant="body1" component="div">
            Fats: {Math.floor((props.item.item_info.fats * props.item.serving_size_g) / 100)}g
          </Typography>
          <Typography variant="body1" component="div">
            Protein: {Math.floor((props.item.item_info.protein * props.item.serving_size_g) / 100)}g
          </Typography>
          <Typography variant="body1" component="div">
            Serving: {Math.floor(props.item.serving_size_g)}g
          </Typography>
        </Box>
      </Popover>
    </TimelineItem>
  );
}
