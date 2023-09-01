import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { WIDGET_ITEMS_TITLENAMES } from '../Configs/widget-items'

const WidgetTitle = ({ title }) => {
  const [titleHead, setTitleHead] = useState({})

  useEffect(() => {
    setTitleHead(WIDGET_ITEMS_TITLENAMES.find((item) => item.key === title))
  }, [title])

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'cneter',
        alignItems: 'center',
        // flexDirection: 'column',
        height: '200px',
        transform: 'rotate(-90deg)',
      }}
    >
      <Typography variant='h5' fontWeight='bold' color='#6B7280'>
        {titleHead?.title}
      </Typography>
      <Typography variant='h5' fontWeight='normal' color='#6B7280'>
        {titleHead?.subtitle}
      </Typography>
    </Box>
  )
}

export default WidgetTitle
