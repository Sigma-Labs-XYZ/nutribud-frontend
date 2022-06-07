// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import React, { useState } from "react";
import { ResponsiveTimeRange } from "@nivo/calendar";
import { Box } from "@mui/material";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function Calendar(props) {
  const data = [
    {
      value: 351,
      day: "2022-04-26",
    },
    {
      value: 284,
      day: "2022-06-17",
    },
    {
      value: 34,
      day: "2022-07-30",
    },
    {
      value: 100,
      day: "2022-04-11",
    },
    {
      value: 311,
      day: "2022-06-27",
    },
    {
      value: 303,
      day: "2022-06-14",
    },
    {
      value: 7,
      day: "2022-05-16",
    },
    {
      value: 161,
      day: "2022-06-15",
    },
    {
      value: 358,
      day: "2022-07-26",
    },
    {
      value: 2,
      day: "2022-06-25",
    },
    {
      value: 383,
      day: "2022-04-02",
    },
    {
      value: 268,
      day: "2022-07-18",
    },
    {
      value: 223,
      day: "2022-05-13",
    },
    {
      value: 92,
      day: "2022-04-24",
    },
    {
      value: 224,
      day: "2022-06-02",
    },
    {
      value: 19,
      day: "2022-07-22",
    },
    {
      value: 398,
      day: "2022-04-06",
    },
    {
      value: 398,
      day: "2022-05-21",
    },
    {
      value: 125,
      day: "2022-07-04",
    },
    {
      value: 343,
      day: "2022-04-29",
    },
    {
      value: 271,
      day: "2022-05-11",
    },
    {
      value: 320,
      day: "2022-06-13",
    },
    {
      value: 129,
      day: "2022-07-02",
    },
    {
      value: 125,
      day: "2022-07-12",
    },
    {
      value: 389,
      day: "2022-07-09",
    },
    {
      value: 156,
      day: "2022-05-24",
    },
    {
      value: 17,
      day: "2022-06-10",
    },
    {
      value: 241,
      day: "2022-05-31",
    },
    {
      value: 250,
      day: "2022-05-10",
    },
    {
      value: 167,
      day: "2022-07-21",
    },
    {
      value: 133,
      day: "2022-05-30",
    },
    {
      value: 243,
      day: "2022-06-01",
    },
    {
      value: 117,
      day: "2022-08-06",
    },
    {
      value: 133,
      day: "2022-07-11",
    },
    {
      value: 283,
      day: "2022-07-07",
    },
    {
      value: 71,
      day: "2022-04-15",
    },
    {
      value: 373,
      day: "2022-04-30",
    },
    {
      value: 225,
      day: "2022-05-18",
    },
    {
      value: 280,
      day: "2022-04-14",
    },
    {
      value: 359,
      day: "2022-04-09",
    },
    {
      value: 15,
      day: "2022-07-01",
    },
    {
      value: 137,
      day: "2022-06-11",
    },
    {
      value: 335,
      day: "2022-05-08",
    },
    {
      value: 356,
      day: "2022-07-17",
    },
    {
      value: 111,
      day: "2022-07-29",
    },
    {
      value: 290,
      day: "2022-04-23",
    },
    {
      value: 247,
      day: "2022-07-16",
    },
    {
      value: 14,
      day: "2022-04-22",
    },
    {
      value: 399,
      day: "2022-05-01",
    },
    {
      value: 202,
      day: "2022-07-03",
    },
    {
      value: 102,
      day: "2022-04-19",
    },
    {
      value: 39,
      day: "2022-07-15",
    },
    {
      value: 346,
      day: "2022-06-05",
    },
    {
      value: 222,
      day: "2022-07-20",
    },
    {
      value: 159,
      day: "2022-07-27",
    },
    {
      value: 320,
      day: "2022-07-23",
    },
    {
      value: 79,
      day: "2022-06-12",
    },
    {
      value: 329,
      day: "2022-08-07",
    },
    {
      value: 132,
      day: "2022-08-04",
    },
    {
      value: 284,
      day: "2022-05-06",
    },
    {
      value: 249,
      day: "2022-07-05",
    },
    {
      value: 396,
      day: "2022-06-21",
    },
    {
      value: 236,
      day: "2022-04-17",
    },
    {
      value: 152,
      day: "2022-06-18",
    },
    {
      value: 199,
      day: "2022-05-09",
    },
    {
      value: 151,
      day: "2022-05-03",
    },
    {
      value: 207,
      day: "2022-04-18",
    },
    {
      value: 177,
      day: "2022-06-09",
    },
    {
      value: 156,
      day: "2022-05-19",
    },
    {
      value: 177,
      day: "2022-05-14",
    },
    {
      value: 59,
      day: "2022-07-19",
    },
    {
      value: 6,
      day: "2022-07-06",
    },
    {
      value: 68,
      day: "2022-07-13",
    },
    {
      value: 194,
      day: "2022-08-08",
    },
    {
      value: 48,
      day: "2022-04-27",
    },
    {
      value: 344,
      day: "2022-05-07",
    },
    {
      value: 177,
      day: "2022-05-22",
    },
    {
      value: 178,
      day: "2022-06-20",
    },
    {
      value: 309,
      day: "2022-04-20",
    },
    {
      value: 28,
      day: "2022-08-03",
    },
    {
      value: 233,
      day: "2022-04-05",
    },
    {
      value: 160,
      day: "2022-05-04",
    },
    {
      value: 161,
      day: "2022-05-02",
    },
  ];
  function handleClick(day) {
    props.selectDay(day);
  }
  return (
    <div style={{ height: "98%", minWidth: "100%" }}>
      <ResponsiveTimeRange
        data={data}
        from="2022-05-01"
        to="2022-08-12"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        margin={{ top: 20 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        onClick={(day, event) => handleClick(day)}
      />
    </div>
  );
}
