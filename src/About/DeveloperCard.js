import { Typography } from "@mui/material";
import "./About.css";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function DeveloperCard(props) {
  return (
    <Card sx={{ maxWidth: 400 }} className="card-container">
      <CardActionArea className="card-content">
        <CardMedia component="img" image={`${props.image}`} alt="person" className="card-image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
            <span>
              <Typography gutterBottom variant="subtitle1" component="div">
                {props.role}
              </Typography>
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DeveloperCard;
