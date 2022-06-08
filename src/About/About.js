import Header from "../GlobalComponents/Header/Header";
import { Paper, Typography } from "@mui/material";
import "./About.css";
import { devInfo } from "./developerInfo";
import DeveloperCard from "./DeveloperCard";

function About() {
  function populateDevCards() {
    return devInfo.map((info, i) => {
      return (
        <DeveloperCard
          key={i}
          index={i}
          image={info.image}
          name={info.name}
          role={info.role}
          description={info.description}
          link={info.link}
        />
      );
    });
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
              <div className="mini-card-wrapper">{populateDevCards()}</div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <img
              src="https://i.pinimg.com/originals/a1/85/04/a1850439c183df9f3b4144ec246ae19a.png"
              alt="Edamam badge"
              width={"200px"}
              height={"100px"}
              style={{ marginTop: "60px", marginRight: "20px" }}
            />
            <img
              src="https://world.openfoodfacts.org/images/misc/openfoodfacts-logo-en-178x150.png"
              alt="Open Food Facts Logo"
              style={{ marginTop: "20px", marginLeft: "20px" }}
            />
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default About;
