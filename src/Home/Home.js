import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../GlobalComponents/Header/Header";
import {
  Paper,
  TextField,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ScannerButton from "./components/ScannerButton";
import TabSelector from "./components/TabSelector";
import Networking from "../Networking";
import BarcodeResultCard from "./components/BarcodeResultCard";
import MealResultCard from "./components/MealResultCard";

export default function Home(props) {
  const [tab, setTab] = useState("Product name");
  const [auth, setAuth] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [searchResults, setSearchResults] = useState(undefined);

  const networking = new Networking();

  function selectTab(selectedTab) {
    setTab(selectedTab);
  }

  useEffect(() => {
    checkSession(); // eslint-disable-next-line
  }, []);

  async function checkSession() {
    const authentication = await networking.verifyUserSession();
    authentication.response ? setAuth(true) : setAuth(false);
  }

  useEffect(() => {
    setSearchResults(undefined);
  }, [tab]);

  function showBarcodeButton() {
    if (tab === "Barcode") return <ScannerButton />;
  }

  async function handleSearch() {
    if (tab === "Barcode") {
      const response = await networking.barcodeSearch(textInput);
      setSearchResults(response);
    } else {
      const response = await networking.mealSearch("");
      setSearchResults(response);
    }
  }

  function showBarcodeResults() {
    if (searchResults && !searchResults.error)
      return <BarcodeResultCard data={searchResults} auth={auth} />;
    else return <Typography> No data</Typography>;
  }

  function showMealResults() {
    if (searchResults && !searchResults.error)
      return <MealResultCard data={searchResults} auth={auth} />;
    else return <Typography> No data</Typography>;
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
          <TextField
            variant="outlined"
            label="search"
            placeholder={
              tab === "Barcode" ? "enter a barcode" : "type in a food"
            }
            onChange={(e) => setTextInput(e.target.value)}
          ></TextField>
          <Tooltip title="search">
            <IconButton
              aria-label="search"
              color="primary"
              onClick={() => handleSearch()}
            >
              <SearchIcon />
            </IconButton>
          </Tooltip>
          {showBarcodeButton()}
        </Paper>
        {tab === "Barcode" ? showBarcodeResults() : showMealResults()}
      </div>
    </div>
  );
}
