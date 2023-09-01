import React from 'react'
import { Menu, MenuItem, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const CurrencyMenu = ({
  anchorEl,
  currencies,
  selectedCurrency,
  handleCurrencySelect,
  handleMenuClose,
}) => (
  <>
    <IconButton
      color='inherit'
      onClick={handleMenuOpen}
      aria-controls='currency-menu'
      aria-haspopup='true'
      component='div'
    >
      {selectedCurrency} <ArrowDropDownIcon />
    </IconButton>
    <Menu
      id='currency-menu'
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {currencies.map((currency, index) => (
        <MenuItem key={index} onClick={() => handleCurrencySelect(currency)}>
          {currency}
        </MenuItem>
      ))}
    </Menu>
  </>
)

export default CurrencyMenu
