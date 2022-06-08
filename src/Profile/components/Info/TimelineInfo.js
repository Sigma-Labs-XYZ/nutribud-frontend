import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import { Box, Popover } from "@mui/material";
import Typography from "@mui/material/Typography";

function TimelineInfo(props) {
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
            Timeline Info
          </Typography>
          <Typography variant="body1" component="div">
            <ul style={{ marginTop: "0" }}>
              <li>
                This section shows a timeline of tracked <br />
                items from the day selected using the
                <br />
                calendar.
              </li>
              <li>
                Hover over an item to see the nutritional <br />
                information based on the serving size.
              </li>
            </ul>
          </Typography>
        </Box>
      </Popover>
    </div>
  );
}

export default TimelineInfo;
