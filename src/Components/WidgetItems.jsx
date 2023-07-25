import '../Styles/WidgetItemsNavbar.scss'
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { WIDGET_ITEMS } from '../Configs/widget-items'

const WidgetItems = () => {
  const onHandleClick = (widget) => {
    console.log('=====WIDGET=====', widget)
  }

  return (
    <Box className='widget-items-navbar'>
      <Typography variant='h4' sx={{ cursor: 'pointer' }}>
        <FontAwesomeIcon
          icon={faPlus}
          sx={{ color: 'white', paddingRight: '.5rem' }}
        />
        Add a Widget
      </Typography>
      <List>
        {WIDGET_ITEMS.map((widget, index) => (
          <ListItem key={index} onClick={() => onHandleClick(widget)}>
            <FontAwesomeIcon
              icon={faPlus}
              sx={{ color: '$primary-text-color' }}
            />
            <ListItemText
              primary={widget.key}
              sx={{
                paddingLeft: '.5rem',
                color: '$primary-text-color',
                cursor: 'pointer',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default WidgetItems
