import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import InfoIcon from '@mui/icons-material/Info'

const InfoTooltip = ({ tooltipText }) => {
  return (
    <Tooltip title={tooltipText}>
      <InfoIcon fontSize='small' />
    </Tooltip>
  )
}

export default InfoTooltip
