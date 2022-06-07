import { useState, useEffect } from "react";
import Header from "../GlobalComponents/Header/Header";
import { Paper, Typography } from "@mui/material";
import "./About.css";
import { devInfo } from "./developerInfo";
import DeveloperCard from "./DeveloperCard";

function About() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    populateDevCards();
  }, []);

  function populateDevCards() {
    const devCards = devInfo.map((info, i) => {
      return (
        <DeveloperCard key={i} image={info.image} name={info.name} role={info.role} description={info.description} />
      );
    });
    setCards(devCards);
  }

  return (
    <div>
      <Header />
      <div className="about-content">
        <Paper
          sx={{
            width: "90%",
            padding: 5,
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          elevation={1}
        >
          <div className="developer-wrapper">
            <Typography variant="h4" align="center">
              Meet the team!
            </Typography>
            <div className="developer-cards">
              <div className="mini-card-wrapper">{cards.slice(0, 2)}</div>
              <div className="mini-card-wrapper">{cards.slice(2, 4)}</div>
            </div>
          </div>
          <img
            src="https://developer.edamam.com/images/transparent.png"
            alt="Edamam badge"
            width={"200px"}
            style={{ marginTop: "20px" }}
          />
        </Paper>
      </div>
    </div>
  );
}

export default About;
