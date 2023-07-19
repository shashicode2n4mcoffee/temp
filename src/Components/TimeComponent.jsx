import React from "react";
import { Box } from "@mui/material";

const TimeComponent = ({ time }) => {
  const isPastTime = new Date(time) < new Date(); // Compare time with current time

  const backgroundColor = isPastTime ? "black" : "white";
  const color = isPastTime ? "white" : "black";

  return (
    <Box
      sx={{
        backgroundColor,
        color,
        padding: "10px",
        borderRadius: "4px",
      }}
    >
      {time}
    </Box>
  );
};

export default TimeComponent;
