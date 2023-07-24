import React, { useState } from 'react'
import { styled } from '@mui/system'
import { Container, Grid } from '@mui/material'
import TradingViewWidget from '../Components/TradingViewWidget'
import Navbar from '../Components/Navbar'
import WidgetNavbar from '../Components/WidgetNavbar'
import Widget from '../Components/Widget'
import WidgetItems from '../Components/WidgetItems'
import { LineCharts } from '../Components/SentimentsChart'
import CategoriesBarChart from '../Components/CategoriesBarChart'
import EventTime from '../Components/EventTime'

import '../Styles/_variables.scss'

const DashboardContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  backgroundColor: '$primary-color',
}))

const Dashboard = () => {
  const [widget, setWidget] = useState({
    tradingView: false,
    mediaSignal: false,
    sentimentSignal: false,
    eventDashboard: false,
  })

  return (
    <div style={{ display: 'flex' }}>
      <DashboardContainer maxWidth='xl'>
        <Grid container>
          <Grid item xs={2}>
            <Navbar />
          </Grid>
          <Grid item xs={2}>
            <WidgetNavbar />
          </Grid>
          <Grid
            container
            direction='row'
            spacing={1}
            sx={{ marginTop: '90px' }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Grid item>
                <Widget>
                  {!widget.tradingView ? (
                    <TradingViewWidget />
                  ) : (
                    <WidgetItems setWidget={setWidget} />
                  )}
                </Widget>
              </Grid>
              <Grid item>
                <Widget>
                  {!widget.sentimentSignal ? <LineCharts /> : <WidgetItems />}
                </Widget>
              </Grid>
              <Grid item>
                <Widget>
                  {!widget.mediaSignal ? (
                    <CategoriesBarChart />
                  ) : (
                    <WidgetItems />
                  )}
                </Widget>
              </Grid>
              <Grid item>
                <Widget>
                  {!widget.eventDashboard ? <EventTime /> : <WidgetItems />}
                  {/* <EventDashboard date={new Date()} events={events} /> */}
                </Widget>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DashboardContainer>
    </div>
  )
}

export default Dashboard
