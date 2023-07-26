import { Container, Box, Typography, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { EventCard, EventDetails } from './EventCard'
import '../Styles/EventDashboard.scss'
import { fetchEventPluseRequest } from '../Redux/actions/eventPulseActions'
const MONTH = [
  'JAN',
  'FEB',
  'MAR',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUG',
  'SEPT',
  'OCT',
  'NOV',
  'DEC',
]

export const EventDashboard = ({ date, events }) => {
  const [timePassed, setTimePassed] = useState(0)

  useEffect(() => {
    const currentTime = new Date()
    setTimePassed((currentTime.getHours() * 100) / 24)
  }, [])
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        // overflow: "scroll",
        backgroundImage: `linear-gradient(to right,black ${timePassed}%,#0A175A 0%)`,
        pt: '10px',
        mb: '20px',
      }}
    >
      <Box
        sx={{
          p: 1.5,
          pl: 1,
          mr: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{ fontSize: '20px', font: 'IBM Plex Sans', color: '#7B7A7A' }}
        >
          EVENT PULSE
        </Typography>
        <Typography
          sx={{
            color: '#ABABAB',
            mr: 2,
            mt: 3,
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
          variant='h6'
          component='h6'
          className='event-date'
        >
          {MONTH[date.getMonth()] + ' ' + date.getDate()}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: 8,
          }}
        >
          <Typography
            sx={{
              color: '#ABABAB',
              display: 'flex',
              mt: 1,
              mb: 2,
              fontSize: '20px',
            }}
            className='event-title'
          >
            IN TODAY
          </Typography>
          <Typography
            sx={{
              color: '#ABABAB',
              display: 'flex',
              justifyContent: 'center',

              fontSize: '20px',
              mt: 1,
              mb: 2,
              mr: 6,
            }}
            className='event-title'
          >
            UPCOMING EVENTS TODAY
          </Typography>
        </Box>
        <Stack className='events-card-container'>
          {events.map((eventDetails) => {
            return <EventCard event={eventDetails} />
          })}
        </Stack>
      </Box>
    </Container>
  )
}
