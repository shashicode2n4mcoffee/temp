import '../Styles/WidgetItemsNavbar.scss'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import { WIDGET_ITEMS, WIDGET_ITEMS_NAMES } from '../Configs/widget-items'
import { updateWidgetBarWidgetListRequest } from '../Redux/actions/widgetBarActions'
import { styled } from '@mui/system'

const TransparentButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
}))

const widgetItemStyle = (key, widgetList) => {
  let style = { marginRight: '1rem' }
  if (key === WIDGET_ITEMS_NAMES.ADD_WIDGET) {
    return { ...style, backgroundColor: 'transparent', border: 'none' }
  } else if (widgetList.find((widget) => widget.key === key && widget.value)) {
    return {
      ...style,
      backgroundColor: 'transparent',
      border: '1px solid #4B5563',
    }
  } else {
    return {
      ...style,
      backgroundColor: 'black',
      border: '1px solid #4B5563',
      color: 'white',
    }
  }
}

const widgetIconSelector = (key) => {
  switch (key) {
    case WIDGET_ITEMS_NAMES.MEDIA_SIGNALS:
      return <SignalCellularAltIcon style={{ marginRight: '.5rem' }} />
    case WIDGET_ITEMS_NAMES.EVENT_PULSE:
      return <CalendarMonthIcon style={{ marginRight: '.5rem' }} />
    case WIDGET_ITEMS_NAMES.EVENT_BRIEFING:
      return <CollectionsBookmarkIcon style={{ marginRight: '.5rem' }} />
    case WIDGET_ITEMS_NAMES.PRICE_CHART:
      return <ShowChartIcon style={{ marginRight: '.5rem' }} />
    default:
      break
  }
}

const WidgetItems = ({ widgetList, updateWidgetBarWidgetListRequest }) => {
  const onHandleClick = (widget) => {
    if (!widgetList.find((item) => item.key === widget.key)?.value) {
      let intermidiateWidgetList = widgetList.slice()
      intermidiateWidgetList.push({ ...widget, value: true })
      updateWidgetBarWidgetListRequest(intermidiateWidgetList)
    }
  }

  return (
    <Box display='flex' justifyContent='center' sx={{ marginBottom: '0.5rem' }}>
      <TransparentButton variant='contained'> ADD WIDGET</TransparentButton>
      {WIDGET_ITEMS.map((widget, index) => (
        <Button
          variant='contained'
          sx={widgetItemStyle(widget.key, widgetList)}
          key={index}
          onClick={() => onHandleClick(widget)}
        >
          {widgetIconSelector(widget.key)}
          {widget.key}
        </Button>
      ))}
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
