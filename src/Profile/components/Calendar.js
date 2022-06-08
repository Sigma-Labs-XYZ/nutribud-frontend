// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import React, { useState, useEffect } from "react";
import { ResponsiveTimeRange } from "@nivo/calendar";
import Networking from "../../Networking";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function Calendar(props) {
  const [data, setData] = useState([]);
  const networking = new Networking();

  useEffect(() => {
    async function getPerformanceData() {
      const data = await networking.getPerformanceHistory();
      setData(data.response);
    }
    getPerformanceData(); //eslint-disable-next-line
  }, []);

  function handleClick(day) {
    props.selectDay(day);
  }

  return (
    <div style={{ height: "98%", minWidth: "100%" }}>
      <ResponsiveTimeRange
        data={data}
        from={props.from}
        to={props.to}
        emptyColor="#eeeeee"
        colors={[
          "#c10c01",
          "#e73801",
          "#f15201",
          "#ff8208",
          "#fdde00",
          "#c3f101",
          "#72da00",
          "#33cc00",
          "#10b001",
          "#019d53",
        ]}
        margin={{ top: 20 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        onClick={(day, event) => handleClick(day)}
      />
    </div>
  );
}
