import "./SignupPage.css";
import React, { useEffect, useState } from "react";
import SignupForm from "./SignupForm.js";
import Header from "../GlobalComponents/Header/Header";
import { CircularProgress, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Networking from "../Networking";

export default function SignupPage(props) {
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  const networking = new Networking();

  useEffect(() => {
    async function authentication() {
      const response = await networking.verifyUserSession();
      if (!response.response) setLoading(false);
      else navigate("/");
    }
    authentication(); // eslint-disable-next-line
  }, []);

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
    else return <SignupForm />;
  }

  return (
    <div>
      <Header />
      {renderPage()}
    </div>
  );
}
