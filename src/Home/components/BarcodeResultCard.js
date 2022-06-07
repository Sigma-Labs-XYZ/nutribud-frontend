import { Paper, Card, CardMedia, CardContent, Typography, Box, CardHeader } from "@mui/material";
import React from "react";
import AddToTrackerButton from "./AddToTrackerButton";
import Networking from "../../Networking";

export default function BarcodeResultCard(props) {
  const nutriments = props.data.nutriments;

  const networking = new Networking();

  async function trackItem(servingSize) {
    if (props.auth) {
      const response = await networking.trackItem(props.data, servingSize);
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
          image={props.data.productImg}
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
            {nutriments["energy-kcal_100g"] ? nutriments["energy-kcal_100g"] : nutriments["energy_100g"]}
            {nutriments["energy-kcal_unit"] ? nutriments["energy-kcal_unit"] : nutriments["energy_unit"]}
          </Typography>
          <Typography variant="body1" component="div">
            Carbohydrates: {nutriments["carbohydrates"]}g
          </Typography>
          <Typography variant="body1" component="div">
            Fats: {Math.round(nutriments["fat"])}g
          </Typography>
          <Typography variant="body1" component="div">
            Protein: {Math.round(nutriments["proteins"])}g
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
