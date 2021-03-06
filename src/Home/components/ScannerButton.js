import React, { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Tooltip, IconButton } from "@mui/material";
import CropFreeIcon from "@mui/icons-material/CropFree";
import VideoDecode from "./VideoScanner";

export default function ScannerButton(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Tooltip title="Open barcode scanner">
        <IconButton aria-label="barcode" color="primary" onClick={handleClickOpen}>
          <CropFreeIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Scan a barcode</DialogTitle>
        <DialogContent>
          <VideoDecode setBarcodeInput={props.setBarcodeInput} handleClose={handleClose} />;
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          ></Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
