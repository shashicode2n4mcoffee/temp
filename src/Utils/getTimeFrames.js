import moment from 'moment'

export const getTimeFrames = (timeframe) => {
  if (timeframe === '1D')
    return {
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().add(1, 'days').format('YYYY-MM-DD'),
    }
  if (timeframe === '1W')
    return {
      startDate: moment().startOf('week').format('YYYY-MM-DD'),
      endDate: moment().endOf('week').format('YYYY-MM-DD'),
    }
  if (timeframe === '1M')
    return {
      startDate: moment().startOf('month').format('YYYY-MM-DD'),
      endDate: moment().endOf('month').format('YYYY-MM-DD'),
    }
  if (timeframe === '12M')
    return {
      startDate: moment().startOf('year').format('YYYY-MM-DD'),
      endDate: moment().endOf('year').format('YYYY-MM-DD'),
    }
}
