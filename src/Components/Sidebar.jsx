import React from "react";
import { styled } from "@mui/system";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Info, Mail } from "@mui/icons-material";

const SidebarContainer = styled(Drawer)(({ theme }) => ({
  width: "240px",
}));

const Sidebar = () => {
  return (
    <SidebarContainer variant="permanent">
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
