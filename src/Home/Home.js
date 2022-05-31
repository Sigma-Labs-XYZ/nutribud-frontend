import React, { useState } from "react";
import "./Home.css";
import Header from "../GlobalComponents/Header/Header";
import { Paper, TextField, IconButton, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ScannerButton from "./components/ScannerButton";
import TabSelector from "./components/TabSelector";

export default function Home(props) {
  const [tab, setTab] = useState("Product name");

  function selectTab(selectedTab) {
    setTab(selectedTab);
  }

  return (
    <div>
      <Header />
      <div className="home-wrapper">
        <div className="tab-selector">
          <TabSelector selectTab={selectTab} />
        </div>
        <Paper
          sx={{ flex: 1, width: "20%", padding: 2 }}
          elevation={3}
          className="search-box"
        >
          <TextField variant="outlined" label="search"></TextField>
          <Tooltip title="search">
            <IconButton aria-label="search" color="primary">
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <ScannerButton />
        </Paper>
      </div>
    </div>
  );
}
