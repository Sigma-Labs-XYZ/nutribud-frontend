import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserPerformance from "../../../UserPerformace";
import Chart from "./PieChart";
import ProgressBar from "./ProgressBar";

export default function ProgressCharts(props) {
  const [nutrimentsAmount, setNutrimentsAmount] = useState(undefined);
  const [goals, setGoals] = useState(undefined);

  const perf = new UserPerformance();

  useEffect(() => {
    async function loadingInfo() {
      setNutrimentsAmount(perf.addUpNutriments(props.history));
      if (props.goals) setGoals(props.goals[0]);
    }
    loadingInfo(); // eslint-disable-next-line
  }, []);

  function renderChart() {
    if (nutrimentsAmount) return <Chart nutrimentsAmount={nutrimentsAmount} />;
  }

  function renderProgressBars() {
    const macros = ["calories", "carbs", "fats", "protein"];
    if (goals) {
      return macros.map((macro) => {
        return (
          <ProgressBar
            key={macro}
            macro={macro}
            amount={nutrimentsAmount[macro]}
            goal={goals[macro]}
          />
        );
      });
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {renderChart()}
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "200px",
        }}
        spacing={2}
      >
        {renderProgressBars()}
      </Stack>
    </div>
  );
}
