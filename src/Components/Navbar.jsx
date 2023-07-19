import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import NavbarDrawer from "./NavbarDrawer";

function Navbar() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DB Colours
        </Typography>
        {!isMobile ? (
          <>
            <Button color="inherit">Notification</Button>
            <Button color="inherit">Shashikumar</Button>
            <Button color="inherit">Settings</Button>
            <Button color="inherit">Logout</Button>
          </>
        ) : (
          <NavbarDrawer />
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
