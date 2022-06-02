import {
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardHeader,
} from "@mui/material";
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
    <Card elevation={5} sx={{ minWidth: 1 / 2, minHeight: 175, margin: 2 }}>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
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
            image={props.data.productImg}
            alt={props.data.name + " Img"}
          />
        </Box>
        <CardContent>
          <Box>
            <CardHeader
              sx={{ paddingTop: "1px" }}
              title={[props.data.name]}
              subheader={"nutritional value per 100g"}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ padding: "4px" }}
                >
                  {nutriments["energy-kcal_100g"]
                    ? nutriments["energy-kcal_100g"]
                    : nutriments["energy_100g"]}{" "}
                  {nutriments["energy_unit"]}
                </Typography>
              </Paper>
            </Box>
          </Box>
        </CardContent>
        <CardContent>
          <Box>
            <Paper elevation={2}>
              <Typography variant="body1" component="div">
                Carbohydrates {nutriments["carbohydrates"]}g
              </Typography>
              <Typography variant="body1" component="div">
                Fat {nutriments["fat"]}g
              </Typography>
              <Typography variant="body1" component="div">
                Protein {nutriments["proteins"]}g
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
          <AddToTrackerButton trackItem={trackItem} />
        </Box>
      </Box>
    </Card>
  );
}
