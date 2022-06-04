import React, { useEffect, useState } from "react";
import "./Settings.css";
import Header from "../GlobalComponents/Header/Header";
import InfoForm from "./InfoForm";
import GoalsForm from "./GoalsForm";
import TabSelector from "./TabSelector";
import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Networking from "../Networking";
import { useNavigate } from "react-router-dom";

export default function Settings(props) {
  const [tab, setTab] = useState("info");
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  const networking = new Networking();

  useEffect(() => {
    async function authentication() {
      const response = await networking.verifyUserSession();
      if (response.response) setLoading(false);
      else navigate("/");
    }
    authentication(); // eslint-disable-next-line
  }, []);

  function selectTab(selectedTab) {
    setTab(selectedTab);
  }

  function renderPage() {
    if (loading)
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "10%",
          }}
        >
          <CircularProgress />
        </Box>
      );
    else
      return (
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
      );
  }

  function renderTab() {
    return tab === "info" ? <InfoForm /> : <GoalsForm />;
  }

  return (
    <div>
      <Header />
      {renderPage()}
    </div>
  );
}
