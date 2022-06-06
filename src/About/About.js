import Header from "../GlobalComponents/Header/Header";
import { Paper, Typography } from "@mui/material";
import "./About.css";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function About() {
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
              <div className="mini-card-wrapper">
                <Card sx={{ maxWidth: 400 }} className="card-container">
                  <CardActionArea className="card-content">
                    <CardMedia
                      component="img"
                      image="https://via.placeholder.com/300"
                      alt="person"
                      className="card-image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Ibrahim Ahmed
                        <span>
                          <Typography gutterBottom variant="subtitle1" component="div">
                            Project Manager
                          </Typography>
                        </span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis risus ipsum. Nunc lacus sem,
                        faucibus sed metus eu, fringilla imperdiet felis. Curabitur quis lorem et elit ultrices mattis
                        id non ligula. Mauris posuere pellentesque neque, in efficitur magna imperdiet quis.
                        Pellentesque eget placerat massa, id laoreet arcu. In a placerat enim. Quisque velit diam,
                        tempor in nisi vel, consequat vestibulum felis. Morbi finibus sapien ut consequat cursus.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 400 }} className="card-container">
                  <CardActionArea className="card-content">
                    <CardMedia
                      component="img"
                      image="https://via.placeholder.com/300"
                      alt="person"
                      className="card-image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dan Michell
                        <span>
                          <Typography gutterBottom variant="subtitle1" component="div">
                            Architect & DevOps
                          </Typography>
                        </span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis risus ipsum. Nunc lacus sem,
                        faucibus sed metus eu, fringilla imperdiet felis. Curabitur quis lorem et elit ultrices mattis
                        id non ligula. Mauris posuere pellentesque neque, in efficitur magna imperdiet quis.
                        Pellentesque eget placerat massa, id laoreet arcu. In a placerat enim. Quisque velit diam,
                        tempor in nisi vel, consequat vestibulum felis. Morbi finibus sapien ut consequat cursus.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="mini-card-wrapper">
                <Card sx={{ maxWidth: 400 }} className="card-container">
                  <CardActionArea className="card-content">
                    <CardMedia
                      component="img"
                      image="https://via.placeholder.com/300"
                      alt="person"
                      className="card-image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Elisaveta Zobeva
                        <span>
                          <Typography gutterBottom variant="subtitle1" component="div">
                            Quality Assurance
                          </Typography>
                        </span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis risus ipsum. Nunc lacus sem,
                        faucibus sed metus eu, fringilla imperdiet felis. Curabitur quis lorem et elit ultrices mattis
                        id non ligula. Mauris posuere pellentesque neque, in efficitur magna imperdiet quis.
                        Pellentesque eget placerat massa, id laoreet arcu. In a placerat enim. Quisque velit diam,
                        tempor in nisi vel, consequat vestibulum felis. Morbi finibus sapien ut consequat cursus.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 400 }} className="card-container">
                  <CardActionArea className="card-content">
                    <CardMedia
                      component="img"
                      image="https://via.placeholder.com/300"
                      alt="person"
                      className="card-image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Kainan Hassan
                        <span>
                          <Typography gutterBottom variant="subtitle1" component="div">
                            Quality Assurance
                          </Typography>
                        </span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis risus ipsum. Nunc lacus sem,
                        faucibus sed metus eu, fringilla imperdiet felis. Curabitur quis lorem et elit ultrices mattis
                        id non ligula. Mauris posuere pellentesque neque, in efficitur magna imperdiet quis.
                        Pellentesque eget placerat massa, id laoreet arcu. In a placerat enim. Quisque velit diam,
                        tempor in nisi vel, consequat vestibulum felis. Morbi finibus sapien ut consequat cursus.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
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
