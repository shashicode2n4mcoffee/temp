import moment from 'moment'

export const getTimeFrames = (timeframe) => {
  const timeframesMap = {
    '1D': 'day',
    '1W': 'week',
    '1M': 'month',
    '12M': 'year',
  }

  const timeFrameUnit = timeframesMap[timeframe]

  if (timeFrameUnit) {
    return {
      startDate: moment().startOf(timeFrameUnit).format('YYYY-MM-DD'),
      endDate: moment()
        .endOf(timeFrameUnit)
        .add(1, 'days')
        .format('YYYY-MM-DD'),
    }
  }
}
