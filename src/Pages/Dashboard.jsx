import '../Styles/_variables.scss'
import '../Styles/Dashboard.scss'

import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import { Container, Grid } from '@mui/material'
import { connect } from 'react-redux'

import TradingViewWidget from '../Components/TradingViewWidget'
import Navbar from '../Components/Navbar'
import Widget from '../Components/Widget'
import WidgetItems from '../Components/WidgetItems'
import LineCharts from '../Components/SentimentsChart'
import MediaSignal from '../Components/MediaSignal'
import { WIDGET_ITEMS_NAMES } from '../Configs/widget-items'
import { URL_CONTEXT, URLS } from '../Configs/urls'
import { fetchCurrenciesRequest } from '../Redux/actions/currenciesActions'
import EventPulse from '../Components/EventPulse'
import EventBrief from '../Components/EventBrief'

const DashboardContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  backgroundColor: '#1f2937',
}))

const getWidget = (widgetName) => {
  switch (widgetName) {
    case WIDGET_ITEMS_NAMES.PRICE_CHART:
      return <TradingViewWidget title={widgetName} />
      break
    case WIDGET_ITEMS_NAMES.MEDIA_SIGNALS:
      return <MediaSignal title={widgetName} />
      break
    case WIDGET_ITEMS_NAMES.EVENT_PULSE:
      return <EventPulse title={widgetName} />
      break
    case WIDGET_ITEMS_NAMES.EVENT_BRIEFING:
      return <EventBrief title={widgetName} />
      break
    case WIDGET_ITEMS_NAMES.SOCIAL_SENTIMENT:
      return <LineCharts title={widgetName} />
      break
  }
}

const Dashboard = ({ widgetList, fetchCurrencies }) => {
  useEffect(() => {
    const data = {
      url: `${URL_CONTEXT.baseContext}${URLS.currencies}`,
    }
    fetchCurrencies(data)
  }, [])

  return (
    <DashboardContainer
      className='dashboard-container'
      style={{ padding: '5rem', minHeight: '100vh' }}
    >
      <Grid container style={{ width: '100vw ' }} className='shashi'>
        <Grid item xs={2} className='grid-navbar'>
          <Navbar />
        </Grid>
        <Grid
          container
          direction='row'
          spacing={1}
          className='grid-widget-container'
        >
          <Grid item xs={12} sm={12} md={12}>
            {widgetList.map((widget, index) => {
              return (
                <Grid item key={index}>
                  <Widget childTitle={widget.key}>
                    {/* {widget.value ? getWidget(widget.key) : <WidgetItems />} */}
                    {getWidget(widget.key)}
                  </Widget>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid style={{ width: '100vw', margin: 'auto' }}>
          <WidgetItems />
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

const mapDispatchToProps = {
  fetchCurrencies: fetchCurrenciesRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
