import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import { Box, Popover } from "@mui/material";
import Typography from "@mui/material/Typography";

function CalendarInfo(props) {
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
                When the profile page is first loaded, you will <br />
                see your tracked items from today.
              </li>
              <li>
                By default, the calendar shows the previous <br />
                month of activity. Use the date pickers to alter the <br />
                date range displayed and click on any of the squares <br />
                to view nutrition progress from that day.
              </li>
              <li>
                The color of the square corresponds to your overall
                <br />
                progress from that date, based on how much you <br />
                fulfilled your goals. Green = Good!
              </li>
            </ul>
          </Typography>
        </Box>
      </Popover>
    </div>
  );
}

export default CalendarInfo;
