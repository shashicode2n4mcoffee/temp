import '../Styles/EventTime.scss'
import React, { useState, useEffect, useRef } from 'react'
import { EventCard } from './EventCard'
import { Box, Typography } from '@mui/material'
import { connect } from 'react-redux'
import { fetchEventPluseRequest } from '../Redux/actions/eventPulseActions'
import { positions } from '@mui/system'
import { URLS, URL_CONTEXT } from '../Configs/urls'
import { getTimeFrames } from '../Utils/getTimeFrames'

const events = [
  {
    title: 'India is growing',
    status: 'ANNOUNCED',
    action: 'Summary',
    time: new Date('2023-12-10T05:30:00.000Z'),
  },
  {
    title: 'India is growing',
    status: 'ANNOUNCED',
    action: 'Summary',
    time: new Date('2023-12-11T05:30:00.000Z'),
  },
]

let data = [
  {
    title: 'NASDAQ is ATH',
    status: 'ANNOUNCED',
    summary: 'Summary',
    time: new Date('2023-07-24T10:38:00.000Z'),
  },
  {
    title: 'IT Market is booming again',
    status: 'ANNOUNCED',
    summary: 'Summary',
    time: new Date('2023-07-24T10:38:00.000Z'),
  },
  {
    title: 'DB is leading FOrex Market',
    status: 'ANNOUNCED',
    summary: 'Summary',
    time: new Date('2023-07-24T10:38:00.000Z'),
  },
  {
    title: 'GS annaounced major deal MS',
    status: 'ANNOUNCED',
    summary: 'Summary',
    time: new Date('2023-07-24T10:38:00.000Z'),
  },
  {
    title: 'DB is leading FOrex Market',
    status: 'ANNOUNCED',
    summary: 'Summary',
    time: new Date('2023-07-21T9:38:00.000Z'),
  },
  {
    title: 'DB is leading Forex Market',
    status: 'ANNOUNCED',
    summary: 'Summary',
    time: new Date('2023-07-25T12:38:00.000Z'),
  },
  {
    title: 'GS annaounced major deal MS',
    status: 'ANNOUNCED',
    summary: 'Summary',
    time: new Date('2023-07-23T11:38:00.000Z'),
  },
]

const EventTime = ({
  eventPulse,
  fetchEventPluseRequest,
  selectedSymbol,
  selectedTime,
}) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [eventDivSize, setEventDivSize] = useState({
    past: '0%',
    future: '100%',
  })
  const timeMoveRef = useRef(null)

  console.log('======selectedSymbol======', selectedSymbol)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const startOfDay = new Date(currentTime)
    startOfDay.setHours(0, 0, 0, 0)
    const startOfDayTimeMs = startOfDay.getTime()
    const firstEventTime = data.length > 0 ? data[0].time.getTime() : null
    const currentTimeMs = currentTime.getTime()
    const timeMoveElement = timeMoveRef.current

    if (startOfDayTimeMs && timeMoveElement) {
      const pastDuration = currentTimeMs - startOfDayTimeMs
      const futureDuration = 24 * 60 * 60 * 1000 - pastDuration

      const pastPercentage = Math.min(
        (pastDuration / (24 * 60 * 60 * 1000)) * 100,
        100
      )
      const futurePercentage = Math.min(
        (futureDuration / (24 * 60 * 60 * 1000)) * 100,
        100
      )

      setEventDivSize((prevState) => ({
        ...prevState,
        past: `${pastPercentage}%`,
        future: `${futurePercentage}%`,
      }))

      const pastColor = '#141414'
      const futureColor = '#0A175A'

      timeMoveElement.style.backgroundImage = `linear-gradient(90deg, ${pastColor} ${pastPercentage}%, ${futureColor} ${pastPercentage}%, ${futureColor} ${
        pastPercentage + futurePercentage
      }%)`
    }
  }, [currentTime])

  useEffect(() => {
    const timeFramesDates = getTimeFrames(selectedTime?.time)
    const data = {
      url: `${URL_CONTEXT.baseContext}${URLS.eventDashboard}?startDate=${timeFramesDates?.startDate}&endDate=${timeFramesDates?.endDate}&currencyPair=${selectedSymbol}`,
    }
    fetchEventPluseRequest(data)
  }, [selectedTime, selectedSymbol])

  const isPast = (time) => {
    return time < currentTime
  }

  const isFuture = (time) => {
    return time > currentTime
  }

  const renderData = (eventTime) => {
    return data.map((ele, index) => {
      return eventTime === 'past'
        ? isPast(new Date(ele.time)) && (
            <EventCard event={ele} key={index} showTimeAndDate />
          )
        : isFuture(new Date(ele.time)) && (
            <EventCard event={ele} key={index} showTimeAndDate />
          )
    })
  }

  return (
    <Box>
      <Box
        ref={timeMoveRef}
        className='time-move'
        sx={{ position: 'relative' }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '1rem',
            color: 'white',
            paddingLeft: '1rem',
          }}
        >
          <Typography sx={{ fontSize: '2rem' }}>Event Pulse</Typography>
        </Box>
        <Box
          className='time-move-events'
          sx={{
            width: eventDivSize.past,
          }}
        >
          {renderData('past')}
        </Box>
        <Box
          className='time-move-events'
          sx={{
            width: eventDivSize.future,
          }}
        >
          {renderData('future')}
        </Box>
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  eventPulse: state.eventPulse.eventPulse,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
  selectedTime: state.widgetsBar.selectedTime,
  selectedSymbol: state.widgetsBar.selectedSymbol,
})

const mapDispatchToProps = {
  fetchEventPluseRequest: fetchEventPluseRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(EventTime)
