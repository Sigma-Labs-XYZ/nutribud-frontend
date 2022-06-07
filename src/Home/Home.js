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
  const [searchResults, setSearchResults] = useState([]);

  const networking = new Networking();

  function selectTab(selectedTab) {
    setSearchResults([]);
    setTab(selectedTab);
  }

  useEffect(() => {
    checkSession(); // eslint-disable-next-line
  }, []);

  async function checkSession() {
    const authentication = await networking.verifyUserSession();
    authentication.response ? setAuth(true) : setAuth(false);
  }

  function showBarcodeButton() {
    if (tab === "Barcode")
      return <ScannerButton setBarcodeInput={setBarcodeInput} />;
  }

  async function loadingSearchResults(results) {
    setSearchResults(results);
  }

  function setBarcodeInput(barcode) {
    setTextInput(barcode);
  }

  async function handleSearch() {
    if (tab === "Barcode") {
      const response = await networking.barcodeSearch(textInput);
      await loadingSearchResults(response);
    } else {
      if (textInput !== "") {
        const response = await networking.mealSearch(textInput);
        await loadingSearchResults(response);
      }
    }
  }

  function showBarcodeResults() {
    if (searchResults.length > 0 && !searchResults[0].error)
      return <BarcodeResultCard data={searchResults[0]} auth={auth} />;
    else return <Typography> No data</Typography>;
  }

  function showMealResults() {
    if (searchResults.length > 0 && !searchResults.error) {
      return searchResults.map((meal) => (
        <MealResultCard data={meal} auth={auth} />
      ));
    } else return <Typography> No data</Typography>;
  }

  return (
    <div>
      <Header />
      <div className="home-wrapper">
        <div className="tab-selector">
          <TabSelector selectTab={selectTab} />
        </div>
        <Paper
          sx={{ flex: 1, width: "40%", padding: 2 }}
          elevation={3}
          className="search-box"
        >
          <TextField
            sx={{ width: "80%" }}
            variant="outlined"
            label="search"
            placeholder={
              tab === "Barcode" ? "enter a barcode" : "type in a food"
            }
            onChange={(e) => setTextInput(e.target.value)}
            value={textInput}
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
        {/* <Stack direction="column" justifyContent="center" alignItems="center"> */}
        {tab === "Barcode" ? showBarcodeResults() : showMealResults()}
        {/* </Stack> */}
      </div>
    </div>
  );
}
