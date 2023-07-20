import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const EventCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2">
          This is the content of the card. You can put any text or other
          components here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
