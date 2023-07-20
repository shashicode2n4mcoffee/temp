import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { WIDGET_ITEMS } from "../Configs/widget-items";

const WidgetItems = ({ setWidget }) => {
  const onHandleClick = (widget) => {
    console.log("=====WIDGET=====", widget);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        color: "white",
      }}
    >
      <Typography variant="h4" style={{ cursor: "pointer" }}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "white", paddingRight: ".5rem" }}
        />
        Add a Widget
      </Typography>
      <List>
        {WIDGET_ITEMS.map((widget, index) => (
          <ListItem key={index} onClick={() => onHandleClick(widget)}>
            <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
            <ListItemText
              primary={widget.key}
              style={{
                paddingLeft: ".5rem",
                color: "white",
                cursor: "pointer",
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default WidgetItems;
