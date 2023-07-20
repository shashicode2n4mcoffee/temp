import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export const EventCard = ({ event }) => {
  return (
    <Card
      sx={{
        p: 0,
        width: "190px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea>
        <CardContent sx={{ p: 1, pb: 0.5 }}>
          <Typography
            sx={{
              font: "IBM Plex Sans",
              fontSize: "12px",
              fontWeight: 700,
              textOverflow: "ellipsis",
              maxHeight: "30px",
            }}
          >
            {event.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 1, pt: 0.5, pb: 0.2 }}>
        <Typography sx={{ font: "IBM Plex Sans", fontSize: "10px", pt: 0.2 }}>
          {event.status} |{" "}
        </Typography>
        <Button
          size="small"
          sx={{
            font: "IBM Plex Sans",
            color: "#000AFF",
            fontSize: "10px",
            p: 0.5,
            pb: 0.2,
            minWidth: "20px",
          }}
        >
          {event.action}
        </Button>
      </CardActions>
    </Card>
  );
};
