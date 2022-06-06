import { Paper, Card, CardMedia, CardContent, Typography, Box, CardHeader } from "@mui/material";
import React from "react";
import AddToTrackerButton from "./AddToTrackerButton";
import Networking from "../../Networking";
import UserPerformance from "../../UserPerformance";

export default function MealResultCard(props) {
  const nutriments = props.data.nutriments;

  const networking = new Networking();

  async function trackItem(servingSize) {
    if (props.auth) {
      const response = await networking.trackItem(props.data, servingSize);
      return response;
    }
  }

  return (
    <Card elevation={5} sx={{ minWidth: 1 / 2, minHeight: 175, margin: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "2%",
            width: "15%",
          }}
        >
          <CardMedia
            sx={{
              height: "auto",
              marginLeft: "2%",
              marginTop: "1%",
            }}
            component="img"
            image={props.data.image}
            alt={props.data.name + " Img"}
          />
        </Box>
        <CardContent sx={{ maxWidth: "30%" }}>
          <Box>
            <CardHeader sx={{ paddingTop: "1px" }} title={[props.data.name]} subheader={"nutritional value\n per 100g"} />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Paper elevation={4}>
                <Typography variant="h3" component="div" sx={{ padding: "4px" }}>
                  {Math.floor(nutriments.Energy)} Kcal
                </Typography>
              </Paper>
            </Box>
          </Box>
        </CardContent>
        <CardContent>
          <Box>
            <Paper elevation={2}>
              <Typography variant="body1" component="div">
                Carbohydrates {Math.round(nutriments["Carbohydrate, by difference"])} g
              </Typography>
              <Typography variant="body1" component="div">
                Fat {Math.round(nutriments["Total lipid (fat)"])} g
              </Typography>
              <Typography variant="body1" component="div">
                Protein {Math.round(nutriments["Protein"])} g
              </Typography>
            </Paper>
          </Box>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            marginRight: "1%",
            marginBottom: "1%",
          }}
        >
          <AddToTrackerButton trackItem={trackItem} nutrientAmounts={UserPerformance.addUpNutriments} performanceScore={UserPerformance.getPerformanceScore} />
        </Box>
      </Box>
    </Card>
  );
}
