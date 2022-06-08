import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import { Box, Popover } from "@mui/material";
import Typography from "@mui/material/Typography";

function NutrimentOverviewInfo(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <div style={{ position: "absolute", right: "10px", top: "10px" }}>
      <InfoIcon color="primary" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          marginTop: "10px",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box sx={{ padding: "10px" }}>
          <Typography variant="h6" component="div" style={{ fontWeight: "bold" }} align="center">
            Calendar Info
          </Typography>
          <Typography variant="body1" component="div">
            <ul style={{ marginTop: "0" }}>
              <li>
                This section shows a breakdown of the
                <br />
                nutrients from the items that you have <br />
                tracked today.
              </li>
              <li>
                Hover over the different sections of <br />
                the pie chart to see the percentage <br />
                contribution of macro nutrients.
              </li>
              <li>
                The progress bars will turn red if you <br />
                exceed your goals, this will also <br />
                negatively impact your daily performance <br />
                score.
              </li>
            </ul>
          </Typography>
        </Box>
      </Popover>
    </div>
  );
}

export default NutrimentOverviewInfo;
