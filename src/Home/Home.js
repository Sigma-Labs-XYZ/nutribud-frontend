import React, { useRef, useEffect, useState } from "react";
import "./Home.css";
import Header from "../GlobalComponents/Header/Header";
import { Paper, TextField, IconButton, Tooltip, Alert, CircularProgress } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ScannerButton from "./components/ScannerButton";
import TabSelector from "./components/TabSelector";
import Networking from "../Networking";
import BarcodeResultCard from "./components/BarcodeResultCard";
import MealResultCard from "./components/MealResultCard";
import SpeechDetection from "./components/SpeechDetection";

export default function Home(props) {
  const [tab, setTab] = useState("Product name");
  const [auth, setAuth] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [altInput, setAltInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const networking = new Networking();
  const pageLoad = useRef(true);
  useEffect(() => {
    checkSession(); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (pageLoad.current) {
      pageLoad.current = false;
    } else handleSearch(); //eslint-disable-next-line
  }, [altInput]);

  function selectTab(selectedTab) {
    setSearched(false);
    setSearchResults([]);
    clearInputs();
    setTab(selectedTab);
  }

  function clearInputs() {
    setTextInput("");
    setAltInput("");
  }

  async function checkSession() {
    const authentication = await networking.verifyUserSession();
    authentication.response ? setAuth(true) : setAuth(false);
  }

  function showBarcodeButton() {
    if (tab === "Barcode") return <ScannerButton setBarcodeInput={updateAltInput} />;
  }
  function showSpeechButton() {
    if (tab !== "Barcode") return <SpeechDetection updateTranscipt={updateAltInput} />;
  }

  async function loadingSearchResults(results) {
    setSearchResults(results);
  }

  function updateAltInput(input) {
    setTextInput(input);
    setAltInput(input);
  }

  async function handleSearch() {
    if (tab === "Barcode") {
      setLoading(true);
      const response = await networking.barcodeSearch(textInput);
      await loadingSearchResults(response);
      setLoading(false);
    } else {
      if (textInput !== "") {
        setLoading(true);
        const response = await networking.mealSearch(textInput);
        await loadingSearchResults(response);
        setLoading(false);
      }
    }
    setSearched(true);
  }

  function showBarcodeResults() {
    if (searchResults.length > 0 && !searchResults[0].error) return <BarcodeResultCard data={searchResults[0]} auth={auth} />;
    else return showAlert();
  }

  function showMealResults() {
    if (searchResults.length > 0 && !searchResults[0].error) {
      return searchResults.map((meal, i) => <MealResultCard key={i} data={meal} auth={auth} />);
    } else return showAlert();
  }

  function showAlert() {
    return (
      <Alert severity="info" className="alert">
        No products found.
      </Alert>
    );
  }

  return (
    <div>
      <Header />
      <div className="home-wrapper">
        <div className="tab-selector">
          <TabSelector selectTab={selectTab} />
        </div>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
            padding: "15px 0px 15px 15px",
            marginBottom: "20px",
          }}
          elevation={3}
        >
          <TextField
            sx={{ width: "85%" }}
            variant="outlined"
            label="Search..."
            placeholder={tab === "Barcode" ? "Enter a barcode!" : "Type in a food!"}
            onChange={(e) => setTextInput(e.target.value)}
            value={textInput}
          ></TextField>
          <div className="search-icons">
            <Tooltip title="Search">
              <IconButton aria-label="Search..." color="primary" onClick={() => handleSearch()}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            {showSpeechButton()}
            {showBarcodeButton()}
          </div>
        </Paper>
        {loading ? <CircularProgress style={{ marginTop: "40px" }} /> : ""}
        {searched ? (tab === "Barcode" ? showBarcodeResults() : showMealResults()) : ""}
      </div>
    </div>
  );
}
