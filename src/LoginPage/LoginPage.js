import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import LoginForm from "./LoginForm";
import Header from "../GlobalComponents/Header/Header";
import { CircularProgress, Box } from "@mui/material";
import Networking from "../Networking";
import { useNavigate } from "react-router-dom";

export default function LoginPage(props) {
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
    else return <LoginForm />;
  }

  return (
    <div>
      <Header />
      {renderPage()}
    </div>
  );
}
