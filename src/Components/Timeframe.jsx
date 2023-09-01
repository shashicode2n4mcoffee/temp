import '../Styles/Timeframe.scss'
import React from 'react'
import { Box } from '@mui/system'
import { connect } from 'react-redux'

import { TIMEFRAME } from '../Configs/timeframe'
import { fetchWidgetBarSelectedTimeRequest } from '../Redux/actions/widgetBarActions'

const Timeframe = ({ selectedTime, fetchWidgetBarSelectedTimeRequest }) => {
  const handleTimeSelect = (time) => {
    fetchWidgetBarSelectedTimeRequest(time)
  }

  return (
    <Box>
      {TIMEFRAME.map((data, index) => (
        <Box
          key={index}
          className={
            index === 0
              ? 'timeframe timeframe-left-enditems'
              : index === TIMEFRAME.length - 1
              ? 'timeframe timeframe-right-enditems'
              : 'timeframe timeframe-miditems'
          }
          sx={{
            backgroundColor:
              selectedTime.time === data.time ? '#1E40AF' : '#1F2937',
            color: selectedTime.time === data.time ? '#ffffff' : 'white',
            fontWeight: selectedTime.time === data.time ? 'bold' : 'normal',
          }}
          onClick={() => handleTimeSelect(data)}
        >
          {data.time}
        </Box>
      ))}
    </Box>
  )
}

const mapStateToProps = (state) => ({
  selectedTime: state.widgetsBar?.selectedTime,
  loading: state.widgetsBar.loading,
  error: state.widgetsBar.error,
})

const mapDispatchToProps = {
  fetchWidgetBarSelectedTimeRequest: fetchWidgetBarSelectedTimeRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeframe)
