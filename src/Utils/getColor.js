export const getColor = (value) => {
  if (value === 'positive' || value.toLowerCase() === 'Bullish'.toLowerCase())
    return 'green'
  if (value === 'negative' || value.toLowerCase() === 'Bearish'.toLowerCase())
    return 'red'
  return 'orange'
}
