import { Paper, Card, CardMedia, CardContent, Typography, Box, CardHeader } from "@mui/material";
import React from "react";
import AddToTrackerButton from "./AddToTrackerButton";
import Networking from "../../Networking";

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
    <Card
      elevation={5}
      sx={{
        minWidth: 1 / 2,
        minHeight: 175,
        margin: 2,
        flexShrink: 3,
        maxWidth: "60%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "17.5%",
          }}
        >
          <CardMedia
            sx={{
              height: "auto",
              marginLeft: "1%",
              marginTop: "1%",
            }}
            component="img"
            image={props.data.image}
            alt={props.data.name + " Img"}
          />
        </Box>
        <CardContent sx={{ maxWidth: "40%" }}>
          <Box>
            <CardHeader
              sx={{ paddingTop: "1px" }}
              title={[props.data.name]}
              subheader={"nutritional value\n per 100g"}
            />
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
          <Paper elevation={2}>
            <Box>
              <Typography variant="body1" component="div">
                Carbohydrates {Math.round(nutriments["Carbohydrate, by difference"])} g
              </Typography>
              <Typography variant="body1" component="div">
                Fat {Math.round(nutriments["Total lipid (fat)"])} g
              </Typography>
              <Typography variant="body1" component="div">
                Protein {Math.round(nutriments["Protein"])} g
              </Typography>
            </Box>
          </Paper>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            // marginRight: "2%",
            marginBottom: "2%",
          }}
        >
          <AddToTrackerButton trackItem={trackItem} />
        </Box>
      </Box>
    </Card>
  );
}
