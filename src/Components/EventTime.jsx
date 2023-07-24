import '../Styles/EventTime.css'
import React, { useState, useEffect, useRef } from 'react'
import { EventCard } from './EventCard'
import { Box } from '@mui/material'
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
    action: 'Summary',
    time: new Date('2023-07-24T10:38:00.000Z'),
  },
  {
    title: 'IT Market is booming again',
    status: 'ANNOUNCED',
    action: 'Summary',
    time: new Date('2023-07-24T10:38:00.000Z'),
  },
  {
    title: 'DB is leading FOrex Market',
    status: 'ANNOUNCED',
    action: 'Summary',
    time: new Date('2023-07-24T10:38:00.000Z'),
  },
  {
    title: 'GS annaounced major deal MS',
    status: 'ANNOUNCED',
    action: 'Summary',
    time: new Date('2023-07-24T10:38:00.000Z'),
  },
  {
    title: 'DB is leading FOrex Market',
    status: 'ANNOUNCED',
    action: 'Summary',
    time: new Date('2023-07-21T9:38:00.000Z'),
  },
  {
    title: 'DB is leading Forex Market',
    status: 'ANNOUNCED',
    action: 'Summary',
    time: new Date('2023-07-25T12:38:00.000Z'),
  },
  {
    title: 'GS annaounced major deal MS',
    status: 'ANNOUNCED',
    action: 'Summary',
    time: new Date('2023-07-23T11:38:00.000Z'),
  },
]

const EventTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [eventDivSize, setEventDivSize] = useState({
    past: '0%',
    future: '100%',
  })
  const timeMoveRef = useRef(null)

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
      const futureDuration = 24 * 60 * 60 * 1000 - pastDuration // 24 hours in milliseconds

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

      const pastColor = '#ff9999' // Red for past events
      const futureColor = '#99ff99' // Green for future events

      console.info('=====TIME======', pastPercentage, futurePercentage)

      timeMoveElement.style.backgroundImage = `linear-gradient(90deg, ${pastColor} ${pastPercentage}%, ${futureColor} ${pastPercentage}%, ${futureColor} ${
        pastPercentage + futurePercentage
      }%)`
    }
  }, [currentTime])

  useEffect(() => {
    console.info('====EVENT DIV SIZE====', eventDivSize)
  }, [eventDivSize])

  const isPast = (time) => {
    return time < currentTime
  }

  const isFuture = (time) => {
    return time > currentTime
  }

  const renderData = (eventTime) => {
    return data.map((ele, index) => {
      return eventTime === 'past'
        ? isPast(ele.time) && (
            <EventCard event={ele} key={index} showTimeAndDate />
          )
        : isFuture(ele.time) && (
            <EventCard event={ele} key={index} showTimeAndDate />
          )
    })
  }

  return (
    <Box>
      <Box
        ref={timeMoveRef}
        className='time-move'
        style={{ display: 'flex', backgroundSize: '100% auto', height: '50vh' }} // Adjust the background size as needed
      >
        <Box
          // className="time-move past"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            flexWrap: 'wrap',
            padding: '1rem',
            // width: "50%",
            width: eventDivSize.past,
          }}
        >
          {renderData('past')}
        </Box>
        <Box
          // className="time-move future"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            flexWrap: 'wrap',
            padding: '1rem',
            // width: "50%",
            width: eventDivSize.future,
          }}
        >
          {renderData('future')}
        </Box>
      </Box>
    </Box>
  )
}

export default EventTime
