import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function TrackerTimeline(props) {
  function formatTime() {
    const simpleTime = props.item.time.split(".")[0];
    const splitTime = simpleTime.split(":");
    splitTime.splice(0, 1, (Number(splitTime[0]) + 1).toString());
    return splitTime.join(":");
  }

  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">{formatTime()}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{props.item.item_info.name}</TimelineContent>
    </TimelineItem>
  );
}
