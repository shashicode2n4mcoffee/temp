import '../Styles/_variables.scss'

import React, { useState } from 'react'
import { styled } from '@mui/system'
import { Container, Grid } from '@mui/material'
import { connect } from 'react-redux'
import TradingViewWidget from '../Components/TradingViewWidget'
import Navbar from '../Components/Navbar'
import WidgetNavbar from '../Components/WidgetNavbar'
import Widget from '../Components/Widget'
import WidgetItems from '../Components/WidgetItems'
import LineCharts from '../Components/SentimentsChart'
import CategoriesBarChart from '../Components/CategoriesBarChart'
import EventTime from '../Components/EventTime'
import { WIDGET_ITEMS_NAMES } from '../Configs/widget-items'

const DashboardContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  backgroundColor: '$primary-color',
}))

const getWidget = (widgetName) => {
  switch (widgetName) {
    case WIDGET_ITEMS_NAMES.PRICE_CHART:
      return <TradingViewWidget />
      break
    case WIDGET_ITEMS_NAMES.MEDIA_SIGNALS:
      return <CategoriesBarChart />
      break
    case WIDGET_ITEMS_NAMES.EVENT_BRIEFING:
      return <EventTime />
      break
    case WIDGET_ITEMS_NAMES.EVENT_PULSE:
      return <EventTime />
      break
    case WIDGET_ITEMS_NAMES.SOCIAL_SENTIMENT:
      return <LineCharts />
      break
  }
}

const Dashboard = ({ widgetList }) => {
  return (
    <DashboardContainer maxWidth='xl'>
      <Grid container>
        <Grid item xs={2}>
          <Navbar />
        </Grid>
        <Grid item xs={2}>
          <WidgetNavbar />
        </Grid>
        <Grid container direction='row' spacing={1} sx={{ marginTop: '90px' }}>
          <Grid item xs={12} sm={12} md={12}>
            {widgetList.map((widget, index) => {
              return (
                <Grid item key={index}>
                  <Widget>
                    {widget.value ? getWidget(widget.key) : <WidgetItems />}
                  </Widget>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </DashboardContainer>
  )
}

const mapStateToProps = (state) => ({
  widgetList: state.widgetsBar.widgetList,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

export default connect(mapStateToProps)(Dashboard)
