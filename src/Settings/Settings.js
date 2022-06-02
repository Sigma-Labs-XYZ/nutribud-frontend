import React, { useState } from "react";
import "./Settings.css";
import Header from "../GlobalComponents/Header/Header";
import InfoForm from "./InfoForm";
import GoalsForm from "./GoalsForm";
import TabSelector from "./TabSelector";
import { Grid } from "@mui/material";

export default function Settings(props) {
  const [tab, setTab] = useState("info");

  function selectTab(selectedTab) {
    setTab(selectedTab);
  }

  function renderTab() {
    return tab === "info" ? <InfoForm /> : <GoalsForm />;
  }

  return (
    <div>
      <Header />
      <Grid
        container
        spacing={18}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <TabSelector selectTab={selectTab} />
          {renderTab()}
        </Grid>
      </Grid>
    </div>
  );
}
