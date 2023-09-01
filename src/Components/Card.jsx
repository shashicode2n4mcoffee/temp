import '../Styles/CardComponent.scss'

import React from 'react'
import {
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  Box,
  Typography,
} from '@mui/material'
import moment from 'moment'
import { connect } from 'react-redux'
import WidgetTime from './WidgetTime'
import WidgetTitle from './WidgetTitle'

const CardComponent = ({ children, childTitle, selectedTime }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Card
      sx={{
        minHeight: isMobile ? '50vh' : '100%',
      }}
      className='card-container'
    >
      {childTitle !== 'PRICE CHART' && (
        <Box
          sx={{
            height: '300px',
            color: 'white',
            width: '3rem',
            display: 'flex', // Display as flex container
            alignItems: 'center', // Vertically center items
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
          className='left-box'
        >
          <WidgetTime timeframe={selectedTime?.time} />
          <WidgetTitle title={childTitle} />
        </Box>
      )}
      <CardContent className='card-content'>{children}</CardContent>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
  selectedTime: state.widgetsBar.selectedTime,
  selectedSymbol: state.widgetsBar.selectedSymbol,
})

export default connect(mapStateToProps)(CardComponent)
