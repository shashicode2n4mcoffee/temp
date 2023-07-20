import React, { useEffect, useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";

const ChartDataModal = ({ open, setOpen }) => {
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            minWidth: 300,
            maxWidth: 600,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Modal Title
          </Typography>
          <Typography variant="body1">
            This is the content of the modal.
          </Typography>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ChartDataModal;
