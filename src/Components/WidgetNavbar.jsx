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
import CurrencyMenu from './CurrencyMenu'
import TimeframeButtons from './TimeframeButtons'

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
        <CurrencyMenu
          anchorEl={anchorEl}
          currencies={CURRENCIES}
          selectedCurrency={selectedCurrency}
          handleCurrencySelect={handleCurrencySelect}
          handleMenuClose={handleMenuClose}
        />
        {!isMobile ? (
          <TimeframeButtons
            timeframes={TIMEFRAME}
            selectedTime={selectedTime}
            handleTimeSelect={handleTimeSelect}
          />
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
