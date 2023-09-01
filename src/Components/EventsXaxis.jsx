import { Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'

const EventsXaxis = ({ timeframe, time }) => {
  if (timeframe === '1D')
    return (
      <Typography variant='subtitle2' component='div' color='white'>
        {`${moment(time.startDate).format('HH:MM')} - ${moment(
          time.endDate
        ).format('HH:MM')}`}
      </Typography>
    )
  if (timeframe === '1W')
    return (
      <Typography variant='subtitle2' component='div' color='white'>
        {`${moment(time.startDate).format('DD/MM/YYYY')}`}
      </Typography>
    )
  if (timeframe === '1M')
    return (
      <Typography variant='subtitle2' component='div' color='white'>
        {`${moment(time.startDate)
          .startOf('W')
          .format('DD/MM/YYYY')} - ${moment(time.endDate)
          .endOf('W')
          .format('DD/MM/YYYY')}`}
      </Typography>
    )
  if (timeframe === '12M')
    return (
      <Typography variant='subtitle2' component='div' color='white'>
        {`${moment(time.startDate)
          .startOf('year')
          .format('DD/MM/YYYY')} - ${moment(time.endDate)
          .endOf('year')
          .format('DD/MM/YYYY')}`}
      </Typography>
    )
  return (
    <Typography variant='subtitle2' component='div' color='white'>
      {`${moment(time.startDate).format('DD/MM/YYYY')} - ${moment(
        time.endDate
      ).format('DD/MM/YYYY')}`}
    </Typography>
  )
}

export default EventsXaxis
