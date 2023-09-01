import React from 'react'
import { Button, Box } from '@mui/material'

const TimeframeButtons = ({ timeframes, selectedTime, handleTimeSelect }) => (
  <Box>
    {timeframes.map((timeframe, index) => (
      <Button
        color='inherit'
        key={index}
        sx={{
          '&:hover': {
            backgroundColor: '$hover-color',
          },
          '&.Mui-focusVisible': {
            backgroundColor: '$hover-color',
          },
          backgroundColor: timeframe.time === selectedTime && '$hover-color',
        }}
        onClick={() => handleTimeSelect(timeframe)}
      >
        {timeframe.time}
      </Button>
    ))}
  </Box>
)

export default TimeframeButtons
