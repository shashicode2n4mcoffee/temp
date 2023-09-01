import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import SearchIcon from '@mui/icons-material/Search'
import { connect } from 'react-redux'
import { fetchWidgetBarSelectedSymbolRequest } from '../Redux/actions/widgetBarActions'
import { styled } from '@mui/material/styles'

const StyledSelect = styled(Select)({
  minWidth: 120,
  borderRadius: '5px',
  backgroundColor: '#1F2937',
  border: '1px solid #4B5563',
  color: 'white',
  paddingRight: '30px', // Add space for the arrow icon
  '&:before': {
    borderColor: '#4B5563',
  },
  '&:after': {
    borderColor: '#4B5563',
  },
  '&:hover': {
    borderColor: '#4B5563',
  },
  '&.Mui-focused': {
    borderColor: '#4B5563',
  },
})

const Dropdown = ({
  fetchWidgetBarSelectedSymbolRequest,
  selectedSymbol,
  currencies,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  const handleChange = (event) => {
    fetchWidgetBarSelectedSymbolRequest(event.target.value)
  }

  const handleOpen = () => {
    setIsDropdownOpen(true)
  }

  const handleClose = () => {
    setIsDropdownOpen(false)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <StyledSelect
        labelId='dropdown-label'
        id='dropdown'
        value={selectedSymbol}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label' }}
        MenuProps={{
          MenuListProps: {
            'aria-labelledby': 'dropdown-label',
            style: {
              backgroundColor: '#1F2937',
              color: 'white',
            },
          },
        }}
        startAdornment={
          <SearchIcon
            style={{
              color: 'white',
              paddingRight: '.5rem',
            }}
          />
        }
      >
        {currencies.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </StyledSelect>
      {isDropdownOpen ? (
        <ArrowDropUpIcon
          style={{
            color: 'white',
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
      ) : (
        <ArrowDropDownIcon
          style={{
            color: 'white',
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
      )}
    </FormControl>
  )
}

const mapStateToProps = (state) => ({
  selectedSymbol: state.widgetsBar?.selectedSymbol,
  currencies: state.currencies?.data,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

const mapDispatchToProps = {
  fetchWidgetBarSelectedSymbolRequest: fetchWidgetBarSelectedSymbolRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
