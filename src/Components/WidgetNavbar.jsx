import '../Styles/WidgetNavbar.scss'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import NavbarDrawer from './NavbarDrawer'

import { TIMEFRAME } from '../Configs/timeframe'
import { CURRENCIES } from '../Configs/currencies'

import {
  fetchWidgetBarSelectedSymbolRequest,
  fetchWidgetBarSelectedTimeRequest,
} from '../Redux/actions/widgetBarActions'

const WidgetNavbar = ({
  fetchWidgetBarSelectedSymbolRequest,
  fetchWidgetBarSelectedTimeRequest,
  selectedTime,
  seletcedSymbol,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const [selectedCurrency, setSelectedCurrency] = useState(
    seletcedSymbol || 'EURUSD'
  )
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency)
    fetchWidgetBarSelectedSymbolRequest(currency)
    setAnchorEl(null)
  }

  const handleTimeSelect = (time) => {
    fetchWidgetBarSelectedTimeRequest(time)
  }

  return (
    <AppBar position='fixed' sx={{ top: '4rem' }} className='widget-navbar'>
      <Toolbar className='widget-navbar-toolbar'>
        <IconButton
          color='inherit'
          onClick={handleMenuOpen}
          aria-controls='currency-menu'
          aria-haspopup='true'
          component='div'
        >
          {selectedCurrency} <ArrowDropDownIcon />{' '}
          {/* Add the ArrowDropDownIcon */}
        </IconButton>
        <Menu
          id='currency-menu'
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
                color='inherit'
                key={index}
                sx={{
                  '&:hover': {
                    backgroundColor: '$hover-color',
                  },
                  '&.Mui-focusVisible': {
                    backgroundColor: '$hover-color',
                  },
                  backgroundColor:
                    timeframe?.time === selectedTime && '$hover-color',
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
  )
}

const mapStateToProps = (state) => ({
  seletcedSymbol: state.widgetsBar?.seletcedSymbol,
  selectedTime: state.widgetsBar?.selectedTime,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

const mapDispatchToProps = {
  fetchWidgetBarSelectedSymbolRequest: fetchWidgetBarSelectedSymbolRequest,
  fetchWidgetBarSelectedTimeRequest: fetchWidgetBarSelectedTimeRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetNavbar)
