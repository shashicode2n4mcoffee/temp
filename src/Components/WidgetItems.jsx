import '../Styles/WidgetItemsNavbar.scss'
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { WIDGET_ITEMS } from '../Configs/widget-items'
import { updateWidgetBarWidgetListRequest } from '../Redux/actions/widgetBarActions'

const WidgetItems = ({ widgetList, updateWidgetBarWidgetListRequest }) => {
  const onHandleClick = (widget) => {
    let intermidiateWidgetList = widgetList.slice()
    intermidiateWidgetList.pop()
    intermidiateWidgetList.push({ ...widget, value: true })
    if (widgetList?.length < 5) {
      intermidiateWidgetList.push({})
    }
    updateWidgetBarWidgetListRequest(intermidiateWidgetList)
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

const mapStateToProps = (state) => ({
  widgetList: state.widgetsBar?.widgetList,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

const mapDispatchToProps = {
  updateWidgetBarWidgetListRequest: updateWidgetBarWidgetListRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetItems)
