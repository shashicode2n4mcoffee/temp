import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import moment from 'moment'
import React from 'react'

const WidgetTime = ({ timeframe }) => {
  if (timeframe === '1D')
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='h5'
          color='#6B7280'
          style={{
            width: 'max-content',
          }}
        >
          {moment().format('DD')}
        </Typography>
        <Typography
          color='#6B7280'
          fontWeight='bold'
          style={{
            width: 'max-content',
          }}
        >
          {moment().format('MMM')}
        </Typography>
      </Box>
    )
  if (timeframe === '1W')
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          color='#6B7280'
          variant='h5'
          style={{
            width: 'max-content',
          }}
        >
          {moment().startOf('W').format('DD')}
        </Typography>
        <Typography
          color='#6B7280'
          fontWeight='bold'
          style={{
            width: 'max-content',
          }}
        >
          {moment().startOf('W').format('MMM')}
        </Typography>
        <Typography
          color='#6B7280'
          variant='h5'
          style={{
            width: 'max-content',
          }}
        >
          /
        </Typography>
        <Typography
          color='#6B7280'
          variant='h5'
          style={{
            width: 'max-content',
          }}
        >
          {moment().endOf('W').format('DD')}
        </Typography>
        <Typography
          color='#6B7280'
          fontWeight='bold'
          style={{
            width: 'max-content',
          }}
        >
          {moment().endOf('W').format('MMM')}
        </Typography>
      </Box>
    )
  if (timeframe === '1M')
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          color='#6B7280'
          variant='h5'
          style={{
            width: 'max-content',
          }}
        >
          {moment().startOf('M').format('DD')}
        </Typography>
        <Typography
          color='#6B7280'
          fontWeight='bold'
          style={{
            width: 'max-content',
          }}
        >
          {moment().startOf('M').format('MMM')}
        </Typography>
        <Typography
          color='#6B7280'
          variant='h5'
          style={{
            width: 'max-content',
          }}
        >
          /
        </Typography>
        <Typography
          color='#6B7280'
          variant='h5'
          style={{
            width: 'max-content',
          }}
        >
          {moment().endOf('M').format('DD')}
        </Typography>
        <Typography
          color='#6B7280'
          fontWeight='bold'
          style={{
            width: 'max-content',
          }}
        >
          {moment().endOf('M').format('MMM')}
        </Typography>
      </Box>
    )
  if (timeframe === '12M')
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          color='#6B7280'
          variant='h5'
          style={{
            width: 'max-content',
          }}
        >
          {moment().startOf('year').format('DD')}
        </Typography>
        <Typography
          color='#6B7280'
          fontWeight='bold'
          style={{
            width: 'max-content',
          }}
        >
          {moment().startOf('year').format('MMM')}
        </Typography>
        <Typography
          color='#6B7280'
          variant='h5'
          style={{
            width: 'max-content',
          }}
        >
          /
        </Typography>
        <Typography
          color='#6B7280'
          variant='h5'
          style={{
            width: 'max-content',
          }}
        >
          {moment().endOf('year').format('DD')}
        </Typography>
        <Typography
          color='#6B7280'
          fontWeight='bold'
          style={{
            width: 'max-content',
          }}
        >
          {moment().endOf('year').format('MMM')}
        </Typography>
      </Box>
    )
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        style={{
          width: 'max-content',
        }}
      >
        {moment().format('DD')}
      </Typography>
      <Typography
        style={{
          width: 'max-content',
        }}
      >
        {moment().format('MMM')}
      </Typography>
    </Box>
  )
}

export default WidgetTime
