import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import NavbarDrawer from "./NavbarDrawer";
import { TIMEFRAME } from "../Configs/timeframe";
import { CURRENCIES } from "../Configs/currencies";
import {
  fetchWidgetBarSelectedSymbolRequest,
  fetchWidgetBarSelectedTimeRequest,
} from "../Redux/actions/widgetBarActions";
import { connect } from "react-redux";

const WidgetNavbar = ({
  fetchWidgetBarSelectedSymbolRequest,
  fetchWidgetBarSelectedTimeRequest,
  selectedTime,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [selectedCurrency, setSelectedCurrency] = useState("EURUSD");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    fetchWidgetBarSelectedSymbolRequest(currency);
    setAnchorEl(null);
  };

  const handleTimeSelect = (time) => {
    console.log(
      "=====SELECTED TIME======",
      fetchWidgetBarSelectedTimeRequest(time)
    );
    fetchWidgetBarSelectedTimeRequest(time);
  };

  return (
    <AppBar position="fixed" sx={{ top: "4rem", backgroundColor: "#7A7B7B" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          color="inherit"
          onClick={handleMenuOpen}
          aria-controls="currency-menu"
          aria-haspopup="true"
          component="div"
        >
          {selectedCurrency}
        </Button>
        <Menu
          id="currency-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {CURRENCIES.map((currency, index) => (
            <MenuItem
              key={index}
              onClick={() => handleCurrencySelect(currency)}
            >
              {currency}
            </MenuItem>
          ))}
        </Menu>
        {!isMobile ? (
          <Box>
            {TIMEFRAME.map((timeframe, index) => (
              <Button
                color="inherit"
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#9B9C9C",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "#9B9C9C",
                  },
                  backgroundColor:
                    timeframe?.time === selectedTime && "#9B9C9C",
                }}
                onClick={() => handleTimeSelect(timeframe)}
              >
                {timeframe?.time}
              </Button>
            ))}
          </Box>
        ) : (
          <NavbarDrawer />
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  selectedTime: state.widgetsBar?.selectedTime,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
});

const mapDispatchToProps = {
  fetchWidgetBarSelectedSymbolRequest: fetchWidgetBarSelectedSymbolRequest,
  fetchWidgetBarSelectedTimeRequest: fetchWidgetBarSelectedTimeRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetNavbar);