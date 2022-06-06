import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { CircularProgress, Typography } from "@mui/material";

export default function ProgressBar(props) {
  const [progress, setProgress] = useState(undefined);

  useEffect(() => {
    const progress = (props.amount / props.goal) * 100;
    setProgress(progress); // eslint-disable-next-line
  }, []);

  if (!progress) return <CircularProgress />;

  return (
    <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
      <Box sx={{ minWidth: 100 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.amount
        )}/${Math.round(props.goal)} ${props.macro}`}</Typography>
      </Box>
      <Box sx={{ width: "150px" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Box>
  );
}
