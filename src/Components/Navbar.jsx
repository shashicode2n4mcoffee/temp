import '../Styles/Navbar.scss'
import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  Box,
  Menu,
  MenuItem,
  styled,
  ListItemIcon,
} from '@mui/material'
import { connect } from 'react-redux'
import NavbarDrawer from './NavbarDrawer'
import Dropdown from './Dropdown'
import Timeframe from './Timeframe'
import SettingsIcon from '@mui/icons-material/Settings'
import { setSessionStorage } from '../Utils/sessionStorage'
import { fetchLoginRequest } from '../Redux/actions/authActions'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { googleLogout } from '@react-oauth/google'

const CustomMenu = styled(Menu)(({ theme }) => ({
  '& .MuiMenu-paper': {
    backgroundColor: '#1F2937',
    color: 'white',
  },
}))

function Navbar({ user, fetchLoginRequest }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  const [anchorEl, setAnchorEl] = useState(null)

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleUserMenuClose = () => {
    setAnchorEl(null)
  }

  const onHandleLogout = () => {
    setSessionStorage('userDetails', {})
    fetchLoginRequest({})
    handleUserMenuClose()
    googleLogout()
  }

  return (
    <AppBar position='fixed' className='navbar'>
      <Toolbar className='navbar-toolbar'>
        <Box className='navbar-toolbar-title'>
          <Box display='flex' justifyContent='flex-start' alignItems='center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='35'
              height='35'
              viewBox='0 0 72 72'
              fill='none'
            >
              <path
                d='M56.2108 17.0518L42.6317 17.3675H42.3159L16.4209 55.2623H29.6842L56.2108 17.0518Z'
                fill='#F3F4F6'
              />
              <rect
                x='3.71203'
                y='3.71203'
                width='64.5757'
                height='64.575'
                stroke='#F3F4F6'
                stroke-width='7.42504'
              />
            </svg>
            <Typography
              variant='h6'
              component='div'
              sx={{
                flexGrow: 1,
                paddingRight: '2rem',
                color: 'white',
                paddingLeft: '.5rem',
              }}
              className='navbar-toolbar-logo-wrapper'
            >
              DB Colours
            </Typography>
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <Dropdown />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <Timeframe />
          </Box>
        </Box>

        <Box>
          <Button color='inherit' sx={{ color: 'white' }}>
            <SettingsIcon />
          </Button>
          <Button
            color='inherit'
            onClick={handleUserMenuOpen}
            sx={{
              color: 'white',
            }}
          >
            {user?.authCredientials?.user?.given_name}
            <ArrowDropDownIcon />
          </Button>
          <CustomMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleUserMenuClose}
          >
            <MenuItem onClick={onHandleLogout}>
              <ExitToAppIcon style={{ color: 'white', paddingRight: '1rem' }} />
              Logout
            </MenuItem>
          </CustomMenu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

const mapDispatchToProps = {
  fetchLoginRequest: fetchLoginRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
