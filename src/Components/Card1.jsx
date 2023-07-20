import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const EventCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Nasdaq is almost ATH
        </Typography>
        <Typography variant="body2">
          U.S. shares higher at close of trade; Dow Jones Industrial Average up
          0.31%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
