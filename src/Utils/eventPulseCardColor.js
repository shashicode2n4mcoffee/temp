import moment from 'moment'
import { getTimeFrames } from './getTimeFrames'

export const getEventPulseCardColor = (selectedTime, xAxis) => {
  const eventPulseXaxisTime = getTimeFrames(selectedTime)

  const isSameDay = moment(eventPulseXaxisTime?.startDate).isSame(
    moment(xAxis),
    'day'
  )
  const isWithinMonthRange =
    moment(eventPulseXaxisTime?.startDate).isSameOrAfter(
      moment(xAxis),
      'month'
    ) &&
    moment(eventPulseXaxisTime?.endDate).isSameOrBefore(moment(xAxis), 'month')

  return {
    bgColor: isSameDay || isWithinMonthRange ? 'white' : '#1f2937',
    color: isSameDay ? 'black' : 'white',
  }
}
