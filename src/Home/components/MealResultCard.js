import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import React from "react";
import AddToTrackerButton from "./AddToTrackerButton";
import Networking from "../../Networking";

export default function MealResultCard(props) {
  const nutriments = props.data.nutriments;

  const networking = new Networking();

  async function trackItem(servingSize, date, time) {
    if (props.auth) {
      const response = await networking.trackItem(props.data, servingSize, date, time);
      return response;
    }
  }

  return (
    <Card
      elevation={5}
      sx={{
        margin: 2,
        maxWidth: "60%",
        minWidth: "60%",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
      data-testid="meal-card"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "125px",
          margin: "15px",
        }}
      >
        <CardMedia
          sx={{
            borderRadius: "8px",
          }}
          component="img"
          image={props.data.image}
          alt={props.data.name + " Img"}
        />
      </Box>
      <CardContent
        sx={{
          width: "45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" align="center">
          {[props.data.name]}
        </Typography>
        <Typography variant="subtitle1">Nutritional values per 100g</Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box>
          <Typography variant="h6" component="div" style={{ fontWeight: "bold" }}>
            {Math.floor(nutriments.Energy)} Kcal
          </Typography>
          <Typography variant="body1" component="div">
            Carbohydrates: {Math.round(nutriments["Carbohydrate, by difference"])}g
          </Typography>
          <Typography variant="body1" component="div">
            Fats: {Math.round(nutriments["Total lipid (fat)"])}g
          </Typography>
          <Typography variant="body1" component="div">
            Protein: {Math.round(nutriments["Protein"])}g
          </Typography>
        </Box>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <AddToTrackerButton trackItem={trackItem} />
      </Box>
    </Card>
  );
}
