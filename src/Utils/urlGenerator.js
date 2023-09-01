import { currencyFormatter } from './currencyFormatter'
import { getTimeFrames } from './getTimeFrames'

export const urlGenerator = (baseurl, context, symbol, timeframe) => {
  const timeFramesDates = getTimeFrames(timeframe?.time)
  const data = {
    url: `${baseurl}${context}?startDate=${
      timeFramesDates?.startDate
    }&endDate=${timeFramesDates?.endDate}&currencyPair=${currencyFormatter(
      symbol
    )}`,
  }
  return data
}
